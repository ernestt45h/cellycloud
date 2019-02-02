<template>
    <div>
        <h1>Login</h1>
        <Divider></Divider>
        <Alert v-if="error" type="warning" show-icon>
            A warning prompt
            <div style="text-align: center" slot="desc">
                {{error.message}}
            </div>
        </Alert>
        <Row type="flex" justify="center">
            <Col class="input" :xs="20">
                <Input v-model="email" placeholder="Email" type="email"/>
            </Col>
            <Col class="input" :xs="20">
                <Input v-model="password" placeholder="Password" :type="passwordType">
                    <Button @click="togglePassword" slot="append" icon="md-eye"></Button>
                </Input>
            </Col>
            <Col class="input" :xs="20">
                <Button @click="loginUser" :loading="loading" long type="info" icon="md-log-in">Log in</Button>
            </Col>
            <Divider></Divider>
            <p>Don't have an account <nuxt-link to="auth/signup">Sign Up</nuxt-link></p>
        </Row>
    </div>
</template>
<script>
export default {
    layout: 'form',
    data() {
        return {
            email: 'dev@mail.com',
            password: 'developer',
            passwordType: 'password',
            error: '',
            loading: false
        }
    },
    methods:{
        togglePassword(){
            console.log('dasdasd')
            this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
        },
        loginUser(){
            
            // Turn off errors before login in
            this.error = ''
            this.loading = true
            if(this.email && this.password)
                //Login user
                this.$auth.signInWithEmailAndPassword(this.email, this.password)
                .then((res)=>{
                    this.loading = false
                    this.$store.commit('user/setCreds', res.user)
                    this.$router.push('/')
                })
                .catch((error)=>{
                    this.loading = false
                    this.error = error
                })
            else{
                
                this.loading = false

                // Display error
                this.error = {
                    message: 'Please fill the fields'
                }
            }
        }
    }
}
</script>
<style scoped>

    h1{
        font-size: 42px;
        color: #2977e7;
    }

    .input{
        margin-top: 20px;
    }
</style>

