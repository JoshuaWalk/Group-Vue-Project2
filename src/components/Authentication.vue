<template>
<form id="signUp">

    <div>
    <h3>login</h3><br>

    <input name='name' type='text' placeholder='name' v-model='name'>
    
    </div>
    
    <br>
    
    <div>
    <input name='email' type='text' placeholder='email' v-model='email'>
    
    </div>
    
    <br>
    
    <div>
    <button v-@click= 'addUser' name='submit' type='button'>SUBMIT</button>
    
    </div>

</form>
</template>


<script>

// let database = app.firebase();
// let dbUser = database.ref('users');

export default {
    name: 'Authentication',

    data:() => {
        return {
            users: {
                name: '',
                email: '',
            }
        }
    },

    methods: {
        addUser: function(){
        dbUser.push(this.newUser);
        this.newUser.name = '{{name}}',
        this.newUser.email = '{{email}}'
        
        
    }
    }
}
</script>

<style></style>