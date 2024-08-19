<template>
    <div>
        <h1>fruits</h1>
        <div>
        <section v-for="fruit in $store.state.fruits" :key="fruit.fruit_id">
            {{ fruit.fruit_id }}
            {{ fruit.fruit_name}}
            {{ fruit.weight}}
            {{ fruit.amount}}
            <button v-if="$cookies.get('token')" @click="addToCart(fruit.fruit_id)">Purchase</button>

        </section>
    </div>
    </div>
</template>
<script>
export default {
    methods:{
      getFruits(){
        this.$store.dispatch('getFruits')
      },
      addToCart(fruit_id){
        this.$store.dispatch('addToCart',fruit_id)
    }
    },
    
    mounted(){
        this.getFruits()
    }
}
</script>
<style>
    
</style>