const {Router} = require("express")
const {getAllCountries, getCountryByName, getCountryById} = require('../controllers/Country/CountryControllers')

const router = Router()

router.get('/', async(req,res)=>{

     let allCountries = await getAllCountries()
     if(allCountries !== undefined ){
        res.send(allCountries)
    }else{
        res.status(404).send('Error 404 paises no encontrados 😥')
     }
})

router.get('/country/:country', async(req,res)=>{
    try {
        const {country} = req.params

        const countryByName = await getCountryByName(country)
        res.send(countryByName)

    } catch (error) {
        res.send('Error 404 country not found 😥')
    }
})

router.get('/country/:id', async(req,res)=>{
    try{
        const{id} = req.params
        const countryById = getCountryById(id)
        res.send(countryById) 

    }catch(error){
        res.send(error)
    }
})


module.exports = router