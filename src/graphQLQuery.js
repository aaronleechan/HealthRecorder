import { Platform } from 'react-native';
export const createUricAcid = async (obj) =>{
    const requestBody = {
        query: `
            mutation{
                createUricAcid(uricacidInput:{uricAcidLevel: "${obj.uricAcidLevel}", createdAt: "${obj.createdAt}"}){
                    uricAcidLevel
                }
            }   
        `
    };
    try{
        await fetch('http://10.0.0.20:3000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Failed');
            }
        })
        .then(resData=>{
            alert("Success")
        })
        .catch(err=>{
            console.log(err)
        })
    }catch(error){
        console.log(error)
    }    
}

module.exports = createUricAcid