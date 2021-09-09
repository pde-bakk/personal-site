<template>
  <div class="app">
    <button @click="changeName('zelda')">change name</button>
    <button @click="changeAge('35')">change age</button>
  </div>
  <img alt="My logo" src="./assets/logo.png">
  <div class="justify-center flex bg-yellow-300 items-center h-screen">
    <div class="text-4xl">
      Hello 👋🏼
      <p>{{ name }} - {{ age }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: 'Link' as string,
      age: 25 as number | string
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    changeAge(age: string | number) {
      this.age = age;
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
