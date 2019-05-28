const UricAcidModel = require('../models/uricacid');

module.exports = {
    uricacid: async(args,req)=>{
        try{
            const uricacid = await UricAcidModel.find();
            return{
                ...uricacid._doc
            }
        }catch(err){
            throw err;
        }
    },
    createUricAcid: async (args,req)=>{
        const uricacid = new UricAcidModel({
            uricAcidLevel: args.uricacidInput.uricAcidLevel,
            createdAt: new Date()
        });
        return await uricacid.save().catch((err)=>console.log(err));
    } 
}