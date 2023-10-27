const { toHtml } = require('@fortawesome/fontawesome-svg-core');
const bcrypt = require('bcrypt');
const { err } = require('react-native-svg/lib/typescript/xml');

const hashData = async(data,saltRounds = 10)=>{
    try{
        const hashedData = await bcrypt.hash(data,saltRounds);
        return hashedData;
    }
    catch(error){
        throw error
    }
}


const verifyHasedData = async (unhashed,hashed) =>{
    try{
        const match = await bcrypt.compare(unhashed,hashed);
        return match;
    }
    catch(error){
        throw error
    }
}


module.exports={hashData,verifyHasedData}