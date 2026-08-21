const express = require('express');
const multer = require('multer');  // multer middleware is for file data format
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model');
const cors = require('cors');

const app = express();
app.use(express.json());  // this middleware is for raw data format
const upload = multer({ storage: multer.memoryStorage()})
app.use(cors());

//POST
app.post('/create-post', upload.single("image"), async (req, res) => {

    // console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({

        image: result.url,
        caption: req.body.caption

    })

    return res.status(201).json({
        message: "Post created successfully",

        post
    })

})


//GET
app.get('/posts', async (req, res) => {

    const posts = await postModel.find();

    return res.status(200).json({

        message: "Posts fetched successfully",

        posts
    })
    
})


module.exports = app;