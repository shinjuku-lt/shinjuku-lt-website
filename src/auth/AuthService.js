import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-variables'
import EventEmitter from 'eventemitter3'
import router from './../router'

export default class AuthService {
  accessToken
  idToken
  expiresAt
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid'
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        router.replace('AboutUs')
      } else if (err) {
        router.replace('AboutUs')
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime()

    this.authNotifier.emit('authChange', { authenticated: true })

    localStorage.setItem('accessToken', this.accessToken)
    localStorage.setItem('idToken', this.idToken)
    localStorage.setItem('expiresAt', this.expiresAt)
  }

  renewSession () {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        this.logout()
        console.log(err)
      }
    })
  }

  logout () {
    // Clear access token and ID token from local storage
    this.accessToken = null
    this.idToken = null
    this.expiresAt = null

    this.userProfile = null
    this.authNotifier.emit('authChange', false)

    localStorage.removeItem('accessToken')
    localStorage.removeItem('idToken')
    localStorage.removeItem('expiresAt')

    // navigate to the home route
    router.replace('AboutUs')
  }

  getAuthenticatedFlag () {
    return localStorage.getItem('accessToken') !== null
  }

  isAuthenticated () {
    return new Date().getTime() < new Date(parseInt(localStorage.getItem('expiresAt'))) && this.getAuthenticatedFlag() === true
  }
}
