<template>
    <div class="main">
        <pins :cols="3">
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>                
        </pins>
    </div>
</template>


<script>
    export default {
        name: 'gridList',
        data() {
            return {
                list: [{
                    image: 'home',
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: '/images/burger.jpg',
                    title: 'Burger',
                    author: 'Linyu'
                }, {
                    image: '/images/camera.jpg',
                    title: 'Camera',
                    author: 'ruolin'
                }, {
                    image: '/images/hats.jpg',
                    title: 'Hats',
                    author: 'kakali'
                }, {
                    image: '/images/honey.jpg',
                    title: 'Honey',
                    author: 'yuyang'
                }, {
                    image: '/images/morning.jpg',
                    title: 'Morning',
                    author: 'mokayi'
                }, {
                    image: '/images/vegetables.jpg',
                    title: 'Vegetables',
                    author: 'NUyyyyyyy'
                }, {
                    image: '/images/water-plant.jpg',
                    title: 'water',
                    author: 'TDDyyyyyyy'
                }, {
                    image: '/images/water-plant.jpg',
                    title: 'water',
                    author: 'TDDyyyyyyy'
                }],
                titleBarClass:['titleBar']
                    

            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    
    .main {
        height:400px
    }
</style>
<style>
    .titleBar{
       display:none!important;
    }
</style>