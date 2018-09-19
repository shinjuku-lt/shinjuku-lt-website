<template lang="pug">
div#head
  v-container(fluid)
    v-layout(row wrap)
      v-flex(xs12 md6 offset-md4)
        v-container(fluid)
          v-layout(row wrap)
            v-flex(md4 xs6)
              h2 次回開催日
              p {{nextDate}}
              p {{dayOfWeek}}
              ul(style="text-align:center")
                li(v-for="(v, k) in schedule")
                  span {{v.time}} : {{v.content}}
              a(target="_blank" :href="googleCalendar")
                img(border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif")
            v-flex(md4 xs6)
              h2 場所
              p {{address}}
              |
              a(:href="companyLink" target="t_blank") @{{company}}
    v-layout(row wrap offset-sm3)
      v-flex(xs12 md6 offset-md3)
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
          this.googleMap = `http://maps.google.co.jp/maps?q=${next.place.address}&output=embed&t=m&z=16&hl=ja`
          this.googleCalendar = `https://calendar.google.com/calendar/r/eventedit?text=Shinjuku.LT&dates=${next.nextTime.year}${next.nextTime.month}${next.nextTime.date}T035000Z/${next.nextTime.year}${next.nextTime.month}${next.nextTime.date}T120000Z&location=${this.address}`
        })
    }
  }
</script>

<style scoped>
h2 {
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 28px;
  color: #3A507D;
}
p {
  margin: 0 0 0 0;
}
div.margin-bottom {
  margin-bottom: 25px;
}
iframe.map {
  width: 500px;
  height: 400px;
  border: solid 1px;
  border-color: #3A507D;
}
</style>
