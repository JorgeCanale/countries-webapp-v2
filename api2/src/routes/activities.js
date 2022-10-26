const {Router} = require('express')
const {postActivity, getAllActivities} = require('../controllers/activities/ActivitiesController')
const {Activities} = require('../db')
const router = Router()


router.post('/post', async (req,res)=>{
    try {
        const {name,difficulty,duration,season,countries} = req.body
        let exist = await Activities.findAll({where:{name:name}})
        if(exist.length > 0) { 
            res.status(400).send("la actividad ya existe")
        }else{
        await postActivity(name, difficulty, duration,season,countries)
        res.send("actividad creada")
    }
    } catch (error) {
        res.send( error)
    }
})

router.get('/', async (req,res)=>{
    try {
        const allActivities = await getAllActivities()
       if(allActivities !== undefined){ 
        res.status(200).send(allActivities)
    }else{
        res.status(404).send('Activities not found 😥')
    }
    } catch (error) {
        res.send(error)
    }
})

module.exports = router