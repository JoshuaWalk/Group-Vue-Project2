<template>
    <center>
        <div>
            <nav-bar></nav-bar>
            <h1 class="title">All Products</h1>
                <!-- <p>{{length}} products</p> -->
                <table class="table is-striped">
                    <thead>
                        <tr>
                            <th>Name</th> |
                            <th>Description</th> |
                            <th>Price</th> |
                            <th>Add</th> |
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products"  v-bind:key="product.id">
                            <td>{{product.name}}</td> |
                            <td>{{product.description}}</td> |
                            <td>${{product.price}}</td> |
                            <td><button @click='addToCart(product)' class='button is-info'>Add to cart</button></td> |
                        </tr>
                    </tbody>
                </table>
        </div>
       
    </center>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    const db = firebase.firestore();
    export default {
        name: 'shop',
        components: {
            NavBar
        },
        data: () => ({ products : []}),
        firestore: {
            products: db.collection('products')
            
        },
        methods: {
            addToCart  () {
                 alert ('added')
            }
    },            
}

</script>


<style>

</style>