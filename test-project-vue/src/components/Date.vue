<template>
<div>
    <h1>{{dateFact}}</h1>
    <h2>{{fact}}</h2>
</div>
</template>

<script>
export default {
  name: "Date",
  props: {
    dateFact: String,
    fact: String
  }
};
</script>