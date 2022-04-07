<template>
  <div id="Index">
    <label for="msg">{{ msg }}</label>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Index extends Vue {
  constructor() {
    super();
    this.msg = "Index";
  }
  msg: string;
}
</script>
<style scoped lang="scss"></style>
