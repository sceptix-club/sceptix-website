const nodemailer = require("nodemailer");
require("dotenv").config();
const speakeasy = require("speakeasy");
const generatedOtp = require('./generateOtp')
const sendEmail = require('./sendEmail')
const {hashData,verifyHasedData} = require('./hashData')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports.validationCheck = async function (username,email,UserModel,res,duration = 1) {
    UserModel.find({ email: email }).then(async (response) => {
        if (response.length === 0) {
            try {
                const code = await generatedOtp()

                const mailOptions = {
                    from:process.env.EMAIL,
                    to:email,
                    subject:"Otp for Email Verification",
                    html:`<p style = "color:tomato;
                    font-size:25px; letter-spacing:2px;"><br>${code}</br></p> <p>This code <b>expires in ${duration} hour(s)</b></p></p>`
                }

                await sendEmail(mailOptions,res)

                const hashedOtp = await hashData(code)


                const user = new UserModel({
                    userName:username,
                    email:email,
                    otp:hashedOtp,
                    date:new Date(),
                    createdAT:Date.now(),
                    expiresAT : Date.now () + 3600000 * +duration,
                    verified:false

                })



                //  await user.save();

                
               

                //to send otp through email 

                

                
              
            } catch (err) {
                console.log(err.message);
                res.status(500).json({ message: "Internal Server Error" });
            }

            // await user.save()
            // const statusCode = 200;
            // res.status(statusCode).json({message:"Registration Successfull"})
        } else {
            console.log("user exist");
            res.status(409).json({ message: "This email Id already registerd" });
        }
    });
};
