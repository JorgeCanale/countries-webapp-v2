const {Activities,Country} = require("../../db")

const getAllActivities = async() =>{

try{    
    let activityArray = []
    const allActivities = await Activities.findAll()
    if(typeof allActivities === "object") activityArray.push(allActivities)

    if(allActivities !== undefined && allActivities.length !== 0){

        if(activityArray.length > 0){
            return activityArray
        }else{
            return allActivities
        }
    
    }

        return undefined

    }catch(error){
        return error
    }
    
}

const postActivity = async(name,difficulty,duration,season,countries) =>{
    try{    

        let newActivity = await Activities.create({
        name:name,
        difficulty:difficulty,
        duration:duration,
        season:season.toLowerCase(),
        countries: countries
    })

    let activityCountries = await Country.findAll(
        {
            where:{
                name:countries
            }
        })
         
        return newActivity.addCountry(activityCountries)
         
        }catch(error){

            return error
         }
}


module.exports = {
    getAllActivities,
    postActivity
}