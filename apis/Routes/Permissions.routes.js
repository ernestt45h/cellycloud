const router = require('express').Router()
const permission = require('../db/permission.db')

router.get('/', (req, res)=>{
    permission.find({})
    .then((result) => {
        res.json(result)  
    }).catch((err) => {
        res.send(err)
    });
})
//i will download insomnia now and test the api .. 
// try running a post request in insomnia with http://localhost:5000/permission/test
// I thought you already had it??

router.post('/test', (req, res)=>{
    let perm = new permission({        
        name: 'Test',
        type: 'dev',
        role: 'developer', 
        targets: 
            [
                'developer', 
                'administrative ', 
                'informational ', 
                'therapeutic',
                'diagnostic',
                'support',
                'in_patient',
                'out_patient'
            ]
    })
    
    perm.save((err, doc)=>{
        if(err) res.json(400, {error: err.errmsg })
        res.json(doc)
    })
})

router.post('/', (req, res)=>{
    let body = req.body
    if(body.name){
        let perm = new permission(body)
        perm.save((err, doc)=>{
            if(err) res.status(400).json({error: err.message})
            res.json(doc)
        })
    }else{
        res.status(400).json({error: 'Permission name can not be empty'})
    }
})


module.exports = router
// oh