<template>
    <div class="main">
        <mu-grid-list :cols="3">
            <mu-grid-tile v-for="tile, index in list" :key="index" :titleBarClass="titleBarClass">
                <mu-icon :value="tile.image" :size="96" color="orange" />
            </mu-grid-tile>
        </mu-grid-list>
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

    }
</style>
<style>
    .titleBar{
       display:none!important;
    }
</style>