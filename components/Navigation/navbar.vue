<template>
    <div @blur="menuOpened = false" id="navbar" :style="{width: navWidth}">
        <Row class="menu">            
            <Button @click="menuOpened = false" v-if="menuOpened" type="text" icon="md-close" shape="circle"></Button>
            <Button @click="menuOpened = true" v-else type="text" icon="md-menu" shape="circle"></Button>
        </Row>
        <Row type="flex" justify="space-around" class="navigations">
            <nuxt-link to="/" class="nav" :class="{active: $nuxt._route}">
                <Icon type="ios-home"></Icon>
                <span v-if="menuOpened">Home</span>
            </nuxt-link>

            <nuxt-link to="/appointments" type="primary" class="nav">
                <Icon type="md-calendar"></Icon>
                <span v-if="menuOpened">Appointments</span>
            </nuxt-link>

            <nuxt-link to="/records" type="primary" class="nav">
                <Icon type="md-folder"></Icon>
                <span v-if="menuOpened">Records</span>
            </nuxt-link>
            
            <nuxt-link to="/messages" type="primary" class="nav">
                <Icon type="md-mail"></Icon>
                <span v-if="menuOpened">Messages</span>
            </nuxt-link>
        </Row>
    </div>
</template>
<script>
export default {
    props:{
        width:{
            type: String,
            default: '65px'
        }
    },
    data() {
        return {
            menuOpened: false
        }
    },
    computed:{
        navWidth(){
            return this.menuOpened ? '100vw' : '65px'
        }
    }
}
</script>

<style scoped>

#navbar{
    text-align: center;
    padding: 15px 0;
    height: 100vh;
    background: #fff;
    z-index: 999991;
    box-shadow: 2px 0 10px rgba(0, 0, 0, .15);
    transition: all .2s;
}


.nav{
    margin-bottom: 35px;
    color: #aaa;
    font-size: 24px;
    padding: 0px 10px 5px;
    border-radius: 50px;
}


.active{
    color: #fff;  
    background: #2db7f5; 
}

.navigations{
    margin-top: 50px;
}

span{
    margin-left: 7.2px;
    font-size: 14px;
}
</style>
