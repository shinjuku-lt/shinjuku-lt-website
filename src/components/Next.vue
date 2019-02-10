<template lang="pug">
div#next
  h2 NEXT
  div.contents
    p 次回のShinkuju.LTの開催場所と日時です。
    p ご都合をお合わせの上、ご参加ください。
  div.contents
    h3 日時
    div.next_wrap
      div.date {{nextDate}} （{{dayOfWeek}}）
      div.time_wrap
        div(v-for="(v, k) in schedule")
          p.time {{v.time}}:
          p.content {{v.content}}
      a(target="_blank" :href="googleCalendar")
        img(src="https://www.google.com/calendar/images/ext/gc_button1_en.gif")
  div.contents
    h3 日時
    div.next_wrap
      a(:href="companyLink" target="t_blank") @{{company}}
      p {{address}}
      iframe.map(
        :src="googleMap"
        frameborder="0"
        style="width: 100% !important"
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
#next h2 {
  position: relative;
  color: #333333;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 10px;
  letter-spacing: 1.2px;
  margin: 0 0 30px;
}
#next h2:before {
  content: '';
  position: absolute;
  top: 50px;
  left: calc((100% - 20px)/2);
  width: 20px;
  height: 4px;
  background-color: #DDDDDD;
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
#next .contents a {
  color: #7CC7F5;
  font-weight: 900;
}
.next_wrap {
  margin: 0 auto 40px;
  width: 80%;
  background: #F5F8FA;
  padding: 36px 60px;
  border-radius: 20px;
}
.time_wrap {
  width: 80%;
}
.next_wrap .date {
  font-size: 24px;
  font-weight: 900;
  margin: 0 0 20px;
}
.next_wrap .time {
  text-align: left;
  margin: 0 auto;
  widows: 30%;
}

iframe.map {
  width: 500px;
  height: 400px;
  border: solid 1px;
  border-color: #3A507D;
}
</style>
