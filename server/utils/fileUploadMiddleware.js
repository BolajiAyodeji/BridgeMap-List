const axios = require("axios");
const cloudinary = require("cloudinary");

const fileUploadMiddleware = (req, res) => {
  console.log("BBODY: ", req.body);
  cloudinary.uploader
    .upload_stream(result => {
      return axios({
        url: "/api/upload", //API endpoint that needs file URL from CDN
        method: "post",
        data: {
          url: result.secure_url,
          name: req.body.name,
          description: req.body.description
        }
      })
        .then(response => {
          res.status(200).json(response.data.data);
        })
        .catch(error => {
          console.log("ERROR: ", error);
          res.status(500).json(error.response.data);
        });
    })
    .end(req.file.buffer);
};

module.exports = fileUploadMiddleware;
