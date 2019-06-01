const weightModel = require('../models/weight')

module.exports = {
    weight: async(args,req)=>{
        try{
            const weight = await weightModel.find()
            return weight
        }catch(err){
            throw err;
        }
    },
    createWeight: async (args,req)=>{
        const createweight = new weightModel({
            weight: args.weightInput.weight,
            createdAt: new Date()
        });
        return await createweight.save().catch((err)=>console.log(err));
    } 
}