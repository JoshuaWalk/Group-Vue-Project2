<template>
  <div id="login">
    <h3>login</h3>
    <v-btn flat href="/login" target="login here">
     login
    </v-btn>
    <div component="dashboard">
        <ul>
      <li v-for="user in users" v-bind:key="user.id">
        id: {{user.id}}
     
      </li>
    </ul>
    </div>
  </div>
</template>


<script>
const db = firebase.firestore();
console.log(db);
export default {
  name: "login",
  data: () => ({ users: []
   }),
  firestore: {
    users: db.collection("users"),
    
  }
};
</script>