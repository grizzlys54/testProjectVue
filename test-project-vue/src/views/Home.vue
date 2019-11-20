<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DateFact :dateFact="dateFactHome" :fact="factHome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DateFact from "@/components/Date.vue";
import {AjaxAPI} from "@/JS/Ajax.js";

const API = new AjaxAPI();

export default {
  name: "home",
  components: {
    DateFact
  },
  props: ['dateFactHome', 'factHome'],
  mounted:function(){
    this.getRandomDate();
  },
  methods :{
    getRandomDate : async function(){
      const start = new Date(0,0,0);
      const end = new Date();
      let dateToShow = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      
      const data = JSON.parse(await API.ajaxGetFactDate(dateToShow.getDate(), dateToShow.getMonth()));
      
      this.dateFactHome = "Random date: " + dateToShow.getFullYear() + "/" + dateToShow.getMonth() + "/" + dateToShow.getDate();
      this.factHome = "In " + data.year + ", " + data.text
      test()
    }
  }
};
</script>
