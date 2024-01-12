<template>
        <footer id="foot">Kwagga</footer>
</template>
<script>
export default {
        data(){
               return{
                currentYear: ""
               };
        },
        mounted(){
                thisgetData();
        },
        methods:{
                getData(){
                        let currentYear = new Date().getFullYear();
                        this.currentYear = currentYear.toString();
                }
        }
    
}
</script>
<style>
    #footer{
        color: red;
    }
</style>