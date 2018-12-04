<template>
    <center>
        <div>
            <h1 class="title">All Products</h1>
                <p>{{length}} products</p>
                    <table class="table is-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" track-by="id">
                                <td>{{product.name}}</td>
                                <td>{{product.description}}</td>
                                <td>${{product.price}}</td>
                                <td><button @click='addToCart(product)' class='button is-info'>Add to cart</button></td>
                            </tr>
                        </tbody>
                    </table>
        </div>
        <!-- <div>
            <h3> Welcome to the Shop </h3>
        </div>
        <div>
            <h3> buy some quotes or whatever </h3>
            <ol>
                <ul> "We can stay up late, swapping manly stories, and in the morning, I'm making waffles!" - Donkey <v-btn flat color="primary">buy</v-btn></ul>
                <ul> "My music isn’t just music — it’s medicine." - Kanye West <v-btn flat color="warning">buy</v-btn></ul>
                <ul> "I don't like telephones." - Marc Bolan <v-btn flat color="primary">buy</v-btn></ul>
            </ol>
        </div> -->
    </center>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'shop',
        computed: mapGetters({
            products: 'allProducts',
            length: 'getNumberOfProducts'
        }),
        methods: mapActions([
            'addToCart'
        ])
}
    
    
</script>

<style>

</style>