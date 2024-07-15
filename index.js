const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

const mongourl ="mongodb+srv://skillzzsejal:zgHXdlAvGF3VnPu7@cluster0.qqdpmx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{console.log("Connect to database");
})
.catch((e)=> console.log(e));

require("./imageDetails");
const Images = mongoose.model("Details");

app.get("/",async (req,res)=>{
    res.send("Sucess!");
});

app.listen(5005,()=>{
    console.log("server started");
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null,uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post("/upload-image", upload.single('file'), async (req,res) =>{
    console.log(req.body);
    console.log(req.file)
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
    const imagename = req.file.filename;
    const username = req.body.username;

    try{
      const newImage = new Images({image : imagename, username : username})
      await newImage.save();
      res.json({ status: "Image Uploaded Successfully"})
    } catch(error){
      res.json({status: error})
    }
});

app.get("/image", async (req,res) =>{
  // try{
  //   Images.find({}).then(data=>{
  //     res.send({status: "ok", data: data});
  //   })
  // } catch(error){
  //     res.json({status:error})
  // }

  try{
    console.log('Fetching posts...');
    const posts = await Images.find();
    console.log('Posts fetched:', posts);
    res.json(posts);
  }catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Server Error');
  }
})