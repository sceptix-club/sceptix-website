const nodemailer = require("nodemailer");
require("dotenv").config();

const transpoter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})


const sendEmail = async (mailOptions,res)=>{
    try{
        transpoter.sendMail(mailOptions,(error,info)=>{
            if(error){
                res.status(400).json({message: error});
                console.log("Error"+error)
            }
            else{
                console.log("Email sent "+info.response)
                res.status(201).json({message:"otp sent sucessfull"})
            }
        })
    }
    catch(error){
        throw error
    }
}

module.exports = sendEmail;
 


