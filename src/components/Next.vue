<template lang="pug">
div#next
  h2.top-title Next
  div.contents
    p 次回のShinkuju.LTの開催場所と日時です。
    p ご都合をお合わせの上、ご参加ください。
  div.contents
    h3 日時
    div.next_wrap
      div.date {{nextDate}} （{{dayOfWeek}}）
      div.time_wrap.clearfix(v-for="(v, k) in schedule")
        p.time {{v.time}}：
        p.content {{v.content}}
      a(target="_blank" :href="googleCalendar")
        <img src="../assets/google_calendar.svg">
        | google カレンダー
  div.contents
    h3 日時
    div.next_wrap
      a.company(:href="companyLink" target="t_blank") @{{company}}
      p {{address}}
      iframe.map(
        :src="googleMap"
        frameborder="0"
      )
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Contact',
    data () {
      return {
        nextDate: '',
        dayOfWeek: '',
        schedule: [],
        address: '',
        company: '',
        companyLink: '',
        googleMap: '',
        googleCalendar: ''
      }
    },
    mounted () {
      axios.get('https://shinjuku-lt-backend.now.sh/next')
        .then(response => {
          const next = response.data
          this.nextDate = `${next.nextTime.year}/${next.nextTime.month}/${next.nextTime.date}`
          this.dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(this.nextDate).getDay()]
          this.schedule = next.schedule
          this.address = next.place.address
          this.company = next.place.company
          this.companyLink = next.place.companyLink
          this.googleMap = next.google.map
          this.googleCalendar = next.google.calendar
        })
    }
  }
</script>

<style scoped>
#next {
  margin: 50px auto;
}
#next h3 {
  display: inline-block;
  color: #333333;
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  background: linear-gradient(transparent 60%, #ffff66 60%);
  margin: 0 0 20px;
}
#next .contents {
  margin-top: 40px;
  line-height: 1em;
  font-weight: 700;
}
.next_wrap {
  margin: 0 auto 40px;
  width: 80%;
  background: #F5F8FA;
  padding: 36px 60px;
  border-radius: 20px;
}
.next_wrap a img {
  width: 40px;
  margin: 20px 10px -10px;
}
.next_wrap .date {
  font-size: 24px;
  font-weight: 900;
  margin: 0 0 20px;
}
.time_wrap {
  width: 100%;
  margin: 0 auto;
}
.time_wrap .time {
  text-align: right;
  width: 50%;
  float: left;
}
.time_wrap .content {
  text-align: left;
  width: 50%;
  float: right;
}
.next_wrap .company {
  font-size: 24px;
  margin: 0 0 20px;
  display: inline-block;
}
iframe.map {
  width: 80%;
  height: 460px;
  border: solid 1px;
  border-color: #333;
  margin: 20px auto;
}
@media screen and (max-width: 750px) {
  #next {
    margin: 10px 20px 40px;
  }
  #next h3 {
    font-size: 18px;
    line-height: 20px;
    margin: 0 0 10px;
  }
  #next .contents {
    margin-top: 10px;
  }
  .next_wrap {
    margin: 0 auto 40px;
    width: 80%;
    background: #F5F8FA;
    padding: 36px 60px;
    border-radius: 20px;
  }
  .next_wrap a img {
    width: 40px;
    margin: 20px 10px -10px;
  }
  .next_wrap .date {
    font-size: 24px;
    font-weight: 900;
    margin: 0 0 20px;
  }
  .time_wrap {
    width: 100%;
    margin: 0 auto;
  }
  .time_wrap .time {
    text-align: right;
    width: 50%;
    float: left;
  }
  .time_wrap .content {
    text-align: left;
    width: 50%;
    float: right;
  }
  .next_wrap .company {
    font-size: 24px;
    margin: 0 0 20px;
    display: inline-block;
  }
  iframe.map {
    width: 80%;
    height: 460px;
    border: solid 1px;
    border-color: #333;
    margin: 20px auto;
  }
}
</style>
