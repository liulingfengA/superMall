<template>
    <div class="news">
        <ul>
            <li v-for="(item,index) in news" :key='index'>{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            news:{
                type:Array,
                default:()=>[],
                required:true,
            }
        }
    }
</script>

<style lang="scss" scoped>
.news{
    
}

</style>