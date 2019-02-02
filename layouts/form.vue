<template>
    <div >
        <Row id="form" type="flex" justify="center" align="middle">
            <Col :xs="20" :sm="16" :md="8" :lg="6">
                <Card class="card">
                    <nuxt/>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #form{
        height: 100vh;
        background: url('../assets/svg/background_1.svg');
        background-size: cover;
        background-repeat: none;
        background-position: right; 
    }

    @media screen and (min-width: 400px) {
        #form{
            background: url('../assets/svg/background_mobile.svg');
            background-position: center; 
            background-size: cover;
            background-repeat: none;
        }
    }

    .card{
        border: none;
        box-shadow: 0 0px 20px rgba(0, 0, 0, .15);
        text-align: center;
    }
</style>

