const express = require("express");
const fs = require('fs');
const cors = require("cors");
const mongoose = require("mongoose");
const userSchema = require('../Schema/userSchema')
const bodyParser = require("body-parser");
const multer = require('multer')
require("dotenv").config();
const app = express();
const newEventModel = require('../Schema/newEventSchema')

const { hashData, verifyHasedData } = require("./hashData");
const validationcheck = require("./validation");

const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//DB connection
mongoose.connect(process.env.DATA_BASE_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("database connected");
});
//Schema for DB



//Model
// const UserModel = mongoose.model("User", userSchema);

var dbModel;
let EventModel;

app.get('/api/events',(req,res)=>{
       fs.readFile('eventData.json','utf8',(err,data)=>{
                 if(err){
                          console.error(err)
                     }else{
                        console.log("inside api")
                            res.json(JSON.parse(data));
                         }
                   })
                })
                
               
       



app.post("/api/reg", async (req, res) => {
    const username = req.body.userName;
    const email = req.body.email;
    const eventName = req.body.eventName;
    dbModel = eventName
    await createDbModel()
   
    // const user = new UserModel({userName:username,email:email,date:new Date()})
    //function to check if the user already registered or not
    validationcheck.validationCheck(username, email, EventModel,eventName, res);
});
// function to create 
const createDbModel = async()=>{

    EventModel = mongoose.model(dbModel,userSchema)
}

app.post("/api/otp", async (req, res) => {
    try {
        const { email, otp } = req.body;
        const validOTP = await verifyOtp({ email, otp });
        if (validOTP) {
            res.status(200).json({ message: "OTP verified" });
            await EventModel.updateOne({ email }, { $set: { verified: true } })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    // res.status(400).json({message:error})
                });
            await EventModel.updateOne({ email }, { $unset: { otp: 1 } })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    // res.status(400).json({message:error})
                });
        } else {
            res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (error) {
        throw error;
    }
});

async function deleteOTP({ email }) {
    try {
        await EventModel.deleteOne({ email });
    } catch (error) {
        throw error;
    }
}

async function verifyOtp({ email, otp }) {
    try {
        if (!email && otp) {
            throw Error("Provide values for email,otp");
        }
        // ensure otp record exists
        const matchOTPRecord = await EventModel.findOne({
            email,
        });

        if (!matchOTPRecord) {
            throw Error("No otp record found");
        }
        const { expiresAT } = matchOTPRecord;
        if (expiresAT < Date.now()) {
            await EventModel.deleteOne({ email });
            throw Error("OTP expired");
        }
        // not expired

        const hashedOtp = matchOTPRecord.otp;
        const validOtp = await verifyHasedData(otp, hashedOtp);
        return validOtp;
    } catch (error) {
        throw error;
    }
}

/////////////////////////////////////////////


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../../public')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})


app.post('/api/addEvent',upload.single('newEventImage'),async(req,res)=>{
    const EventData = new newEventModel({
        eventName:req.body.newEventName,
        eventDate:req.body.newEventDate,
        eventInfo:req.body.newEventInfo,
        // img:{
        //     data:fs.readFileSync('uploads/' + req.file.filename),
        //     contentType:'image/png'
        // }
    }) 
    try{
        const savedEvent = await EventData.save()
        res.json({message:"Event Added Successfully"})
        
    }
    catch(error){
        res.json({message:error})
    }
    
})

app.get("/api/getEvent",async(req,res)=>{
    
    const allData = await newEventModel.find()
    res.json(allData)
})

app.post("/api/deleteEvent",async(req,res)=>{
    const id = req.body.id
    await newEventModel.deleteOne({_id:id})
    


})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
