const {Router} = require("express")
const {getAllCountries, getCountryByName} = require('../controllers/Country/CountryControllers')

const router = Router()

router.get('/', async(req,res)=>{

     let allCountries = await getAllCountries()
     if(allCountries !== undefined ){
        res.send(allCountries)
    }else{
        res.send('Error 404 paises no encontrados 😥')
     }
})

router.get('/country/:country', async(req,res)=>{
    try {
        const {country} = req.params

        const countryByName = await getCountryByName(country)
        res.send(countryByName)

    } catch (error) {
        res.send('Error 404 Pais no encontraso 😥')
    }
})


module.exports = router