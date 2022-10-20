const {Router} = require('express')
const{ascendentName,descendentName,maxPopulation,minPopulation, countriesByContinents} = require('../controllers/filters/index')

const router = Router()


router.get('/continents/:continent', async(req,res)=>{
    try {
        const {continent} = req.params
        const countries = await countriesByContinents(continent)
        res.status(200).send(countries)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.get('/alphabetical/:order', async(req,res)=>{
    try {
        const {order} = req.params 
        if(order === 'asc') {
            let ascendent = await ascendentName()
            res.send(ascendent)
        }else if(order === 'desc'){
            let descendent = await descendentName()
            res.send(descendent)
        }

    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/population/:order', async(req,res)=>{
try{    const{order} = req.params

    if(order === 'desc'){
        const descendentCountries = await maxPopulation()
        res.status(200).send(descendentCountries)
    }
    if(order === 'asc'){
        const ascendentCountries = await minPopulation()
        res.status(200).send(ascendentCountries)
    }
}catch(error){
    res.status(500).send(error)
}
})



module.exports = router