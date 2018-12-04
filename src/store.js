import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      added: [],
      all: [],

  },
  mutations: {
    ADD_TO_CART (state, { id }) {
      const record = state.added.find(p => p.id === id)
      if (!record) {
        state.added.push({
          id,
          quantity: 1
        })
      } else {
        record.quantity++
      }
    }
  },
  actions: {
    addToCart({ commit }, product){
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }

  },
  getters: {
      allProducts: state => state.all, // would need action/mutation if data fetched async
      getNumberOfProducts: state => (state.all) ? state.all.length : 0,
      cartProducts: state => {
        return state.added.map(({ id, quantity }) => {
          const product = state.all.find(p => p.id === id)
    return {
            name: product.name,
            price: product.price,
            quantity
          }
        })
      }
    }
})
