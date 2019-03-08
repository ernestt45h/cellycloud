<template>
    <div>
        <h1>Sign Up</h1>
        <Divider></Divider>
        <Alert v-if="error" type="warning" closable show-icon>
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
                <Input v-model="password" placeholder="Password">
                </Input>
            </Col>
            <Col class="input" :xs="20">
                <Input v-model="repassword" placeholder="Confirm password">
                </Input>
            </Col>
            <Col class="input" :xs="20">
                <Button @click="loginUser" :loading="loading" long type="info" icon="md-log-in">Sign Up</Button>
            </Col>
            <Divider></Divider>
            <p>Already a user? <nuxt-link to="/auth">Sign In</nuxt-link></p>
        </Row>
    </div>
</template>
<script>
export default {
    layout: 'form',
    data() {
        return {
            email: '',
            password: '',
            repassword: '',
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
                    let user = {
                        email: res.user.email,
                        uid: res.user.uid,
                        phoneNumber: res.user.phoneNumber,
                        photoURL: res.user.photoURL,
                    }
                    this.$store.commit('user/setCreds', user)
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

