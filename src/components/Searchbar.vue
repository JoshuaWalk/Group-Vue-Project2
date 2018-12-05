<template>
  <div id="all-t-shirts">
    <input type="text" v-model="search" placeholder="search t-shirts">
    <div v-for="tshirt in tshirts" v-bind:key="tshirt.title" class="single-tshirt">
      <h2>{{tshirt.title}}</h2>
      <article>{{tshirt.picture}}</article>
    </div>
  </div>
</template>

    //the HTML in the code

<script>
export default {
  data() {
    return {
      tshirts: [],
      search: ""
    };
  },

  created() {},
  // Use a GET which has the information you want to filter in the search using the created property

  computed: {
                     // Helps return what needs to be returned. 
    //   filteredtshirts: function(){
    //       return this.tshirts.filter((tshirt) => {
    //         return tshirt.title.match(this.search)
    //       }),
    //   }
  }
};
</script>
    // JAVASCRIPT

<style>
#all-t-shirts {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}
.single-tshirt {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>

    // CSS in the code 