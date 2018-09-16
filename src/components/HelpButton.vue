<template>
    <div class="wrapper">
        <button color="blue" @click="helpUs()">HElp</button>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState('main', ['giveaways'])
    },
    methods: {
        ...mapMutations('main', ['updateLastGiveaway']),
        helpUs(){
            let x = {...this.giveaways[this.giveaways.length-1]}
            x.status = 1
            x.collectingTime = '18.09.2018 12:00'
            this.updateLastGiveaway(x)
        }
    }
}
</script>
<style>

</style>
