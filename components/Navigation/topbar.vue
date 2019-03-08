<template>
    <Row id="topnav" type="flex" justify="space-between" align="middle">
        <Col id="top-left">
            <div>
                <img src="/logo.svg" width="65px"/>
            </div>
        </Col>
        <Col id="top-right">
        <Dropdown trigger="click">
            <Button shape="circle" type="text">
                <Badge dot>
                    <Avatar src="/me.jpg"/>
                </Badge>                
                <br>
                <Icon type="md-arrow-dropdown"></Icon>
            </Button>
            <DropdownMenu style="width:300px" slot="list">
                <DropdownItem>
                    <Icon type="md-person"></Icon>
                    <Divider type="vertical" />
                    User Profile
                </DropdownItem>
                <DropdownItem>
                    <Icon type="md-notifications"></Icon>
                    <Divider type="vertical" />
                    Notifications
                </DropdownItem>
                 <DropdownItem>
                    <Icon type="md-settings"></Icon>
                    <Divider type="vertical" />
                    Preferences
                </DropdownItem>
                <DropdownItem>
                    <Icon type="ios-chatbubbles"></Icon>
                    <Divider type="vertical" />
                    Feedback
                </DropdownItem>
                <DropdownItem>
                    <Icon type="ios-alert"></Icon>
                    <Divider type="vertical" />
                    About
                </DropdownItem>
                <DropdownItem divided>
                    <Button type="warning" long>
                        <Icon type="md-lock"></Icon>
                        <Divider type="vertical" />
                        Log out
                    </Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </Col>
    </Row>
</template>
<script>
export default {
    data() {
        return {
            modal: false
        }
    },
}
</script>

<style scoped>
#topnav{
    background: #fff;
    height: 65px;
    padding: 0 10px;
    box-shadow: 5px 0 10px rgba(0, 0, 0, .15);
    z-index: 99999;
}
</style>
