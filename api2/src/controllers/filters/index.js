
const {Country , Activities} = require("../../db")


const countriesByContinents = async(continent) =>{
        let byContinent = await Country.findAll({
            where:{
                continents: continent
            },
            include:{model: Activities}
        })

        return byContinent



}



const minPopulation = async() =>{

        let minToMax = await Country.findAll({
            order:[['population','ASC']],
            include:{model: Activities}

        })

        return minToMax


}

const maxPopulation = async() =>{

    let maxTomin = await Country.findAll({
        order:[['population','DESC']],
        include:{model: Activities}
    })

    return maxTomin
}


const descendentName = async () =>{

    let ZtoA = await Country.findAll({
        order:[['name','DESC']],
        include:{model: Activities}
    })

    return ZtoA

}

const ascendentName = async() =>{

    let AtoZ = await Country.findAll({
        order: [['name','ASC']],
        include:{model: Activities}
    })
    
    return AtoZ
}



module.exports = {
    countriesByContinents,
    minPopulation,
    maxPopulation,
    descendentName,
    ascendentName
}