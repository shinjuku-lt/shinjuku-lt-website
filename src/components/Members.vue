<template lang="pug">
  div#members
    h2.top-title Members
    div.members-message
      | Shinjuku.LTの主要メンバーを紹介します！
      br
      | それぞれ普段やっているサービスも扱う言語も役割もさまざまな人たちが
      br
      | 月に一度集まりLTを通して交流を深めています。
      br
      | たまにしか現れないレアキャラもいたりいなかったり・・・
    div.member-items.full-width
      div.member-item(v-for="val in members")
        img.member-icon-circle(:src="'/static/img/members/' + val.image")
        div.member-name {{ val.name }}
        div.member-account
          a(:href="val.account_url" target="_blank") {{ val.account_name }}
        div.member-job {{ val.job }}
        div.member-skill {{ val.skill }}
        div.member-comment {{ val.comment }}
</template>

<script>
  import { MEMBERS } from '../constant/members'
  export default {
    name: 'Members',
    data () {
      return {
        members: MEMBERS
      }
    }
  }
</script>

<style>
#members {
  margin-top: 50px;
}
.members-message {
  margin-top: 40px;
  line-height: 2em;
  font-weight: 900;
}
.full-width {
  margin-left: -200%;
  margin-right: -200%;
  padding: 0 200%;
  width: 1000px;
  box-sizing: content-box;
}
.member-items {
  margin-top: 95px;
  padding-bottom: 65px;
  background-color: #F5F8FA;
  display: flex;
  flex-wrap: wrap;
}
.member-item {
  display: inline-flex;
  width: 33%;
  height: 454px;
  position: relative;
  flex-wrap: wrap;
}
.member-item > * {
  width: 80%;
  margin: 0 auto;
  line-height: 22px;
}
.member-icon {
  width: 220px;
  height: 220px;
  position: absolute;
  left: 50%;
  top: 60px;
}
.member-icon-circle {
  width: 220px;
  height: 220px;
  position: relative;
  top: 61px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.member-position-top {
  position: relative;
  top: 50px;
}
.member-name {
  margin-top: 70px;
  font-size: 18px;
  font-weight: 900;
}
.member-account a{
  color: #6CC7FF;
  font-weight: 900;
}
.member-job, .member-skill, .member-comment{
  font-size: 14px;
  font-weight: 500;
}
@media screen and (max-width: 750px) {
  #members {
    margin: 10px 20px 40px;
  }
  .members-message {
    margin-top: 10px;
    font-weight: 600;
  }
  .full-width {
    margin-left: -200%;
    margin-right: -200%;
    padding: 0 200%;
    width: 1000px;
    box-sizing: content-box;
  }
  .member-items {
    margin-top: 10px;
    padding-bottom: 20px;
    width: 100%;
  }
  .member-item {
    width: 50%;
    height: auto;
  }
  .member-item > * {
    width: 90%;
    margin: 0 auto;
    line-height: 22px;
  }
  .member-icon-circle {
    width: 20vh;
    height: 20vh;
    top: 30px;
  }
  .member-name {
    margin-top: 40px;
    font-size: 15px;
  }
  .member-job, .member-skill, .member-comment{
    font-size: 13px;
  }
}
</style>
