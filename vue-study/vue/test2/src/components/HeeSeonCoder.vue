<template>
    <div>
        <p>{{name}}</p>
        <button @click="updateName">Change Name</button>
        
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            name : "HeeSeon Coder",
        }
    },
    methods : {
        updateName() {
            this.name = "HeeSeon Coder Updated";

        }
    }

}
</script>

<style scoped>

</style>