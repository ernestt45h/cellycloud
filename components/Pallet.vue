<template>
    <Card :bordered="false" class="card info">
        <Row type="flex" justify="space-between" align="middle">
            <Row type="flex" align="middle">
                <!-- <Avatar src="/me.jpg"  size="large"/>
                &nbsp -->
                <h4>Title</h4>
            </Row>
            <Icon type="md-more" style="color: white"></Icon>
        </Row>
        <Row>
            <span>Discriptions go here</span>
        </Row>
        <Row class="description">
            <p>Hello this is some serios shit</p>
            <p>Ok just joking</p>
            <slot></slot>
        </Row>
    </Card>
</template>
<style scoped>



.card{
    color: #fff;
    background: linear-gradient(315deg, #000, #aaa);
    margin-bottom: 10px;
}

span{
    font-size: 12px;
}

.info{
    background: linear-gradient(315deg, #2db7f5, #70d2ff);
}

.warning{
    background: linear-gradient(315deg, #f90, rgb(255, 197, 111));
}

.error{
    background: linear-gradient(315deg, #ed4014, #ff8e71);
}

.primary{
    background: linear-gradient(315deg, #2d8cf0, #6cb3ff);
}

.description{
    margin-top: 7.2px;
}
</style>
