const Api = require('./index')

Api.listen(5000, function(){
    console.log('test server started @ localhost:5000')
})