<template lang="pug">
  div#app
    router-view(:auth="auth" :authenticated="authenticated")
</template>

<script>
import AuthService from './auth/AuthService'

const auth = new AuthService()

export default {
  mounted () {
    parent.document.title = 'Shinjuku.LT'
  },
  data () {
    return {
      auth,
      authenticated: auth.authenticated,
      res: 'here is response'
    }
  },
  created () {
    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    if (auth.getAuthenticatedFlag() === true) {
      auth.renewSession()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Rounded Mplus 1c', Helvetica, Arial, mplus-1p-regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  background-size: cover;
  font-size: 16px;
  color: #333333;
  margin: 0 auto;
}

main {
  font-family: "Rounded Mplus 1c";
  color: #666;
  margin: auto;
}

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a::hover{
  text-decoration: none;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
p {
  line-height: 30px;
}
a {
  color: #7CC7F5;
  font-weight: 900;
}
a:hover {
  opacity: 0.8;
}
.top-title {
  display: inline-block;
  position: relative;
  color: #333333;
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 10px;
  letter-spacing: 1.2px;
  margin: 0px;
}
.top-title:before {
  content: '';
  position: absolute;
  top: 50px;
  left: calc((100% - 20px)/2);
  width: 20px;
  height: 4px;
  background-color: #DDDDDD;
}
@media screen and (max-width: 750px) {
  #app {
    font-size: 14px;
  }
  p {
    line-height: 24px;
  }
  .top-title {
    font-size: 18px;
  }
  .top-title:before {
    top: 22px;
    height: 3px;
  }
}
</style>
