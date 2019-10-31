<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Fact :dateFact="dateFactHome" />
  </div>
</template>

<script>
// @ is an alias to /src
import Fact from "@/components/Fact.vue";

export default {
  name: "home",
  components: {
    Fact
  },
  props: ['dateFactHome'],
  mounted:function(){
    this.getRandomDate();
  },
  methods :{
    getRandomDate : function(){
      const start = new Date(0,0,0);
      const end = new Date();
      let dateToShow = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      this.dateFactHome = dateToShow.getFullYear() + "/" + dateToShow.getMonth() + "/" + dateToShow.getDate();
    }
  }
};
</script>
