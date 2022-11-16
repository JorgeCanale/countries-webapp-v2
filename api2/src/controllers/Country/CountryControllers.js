const axios = require("axios")
const { Country, Activities} = require("../../db")
const {Op} = require('sequelize')

const getAllCountries = async ()=>{

    let db = await Country.findAll({include: Activities})

        if(db.length === 0){

            const {data} =( await axios.get('https://restcountries.com/v3/all'))

           
            let allCountries =  data.map((co)=>{
                return {
                    id: co.cca3,
                    name: co.name.common,
                    flags: co.flags[1],
                    continents: co.continents[0],
                    capital: co.capital ? co.capital[0] : 'Undefined capital city',
                    subregion: co.subregion ? co.subregion : 'Undefinded Subregion',
                    area: co.area,
                    population: co.population,
                    languages: co.languages
                }
            })


             allCountries.forEach(c => {
                Country.findOrCreate({
                    where:{id: c.id},
                    defaults:{
                        name: c.name,
                        id: c.id,
                        flags: c.flags,
                        continents: c.continents,
                        capital: c.capital,
                        subregion:c.subregion,
                        area: c.area,
                        population: c.population,
                        languages: c.languages
                    },
                })
            });

            let dbCountries = await Country.findAll()

            return dbCountries
        }else{
            return db
        }


}

const getCountryByName = async(name) =>{
    const country = await Country.findAll({where:{
        name:{
            [Op.iLike]: `%${name}%` 
        }
    },
    include: Activities
})
    return country[0].dataValues
}

const getCountryById = async(id)=>{
    const country = await Country.findOne({where:{
        id: id
    },
    include: Activities})
    
    return country[0].dataValues
}

module.exports  = {
    getAllCountries,
    getCountryByName,
    getCountryById
}