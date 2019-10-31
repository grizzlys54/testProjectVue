<template>
    <p>Date: {{dateFact}}</p>
</template>

<script>
export default {
  name: "Fact",
  props: {
    dateFact: String
  }
};
</script>