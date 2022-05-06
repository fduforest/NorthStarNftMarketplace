// const pinataApiKey = process.env.PINATA_API_KEY
// const pinataSecretApiKey = process.env.PINATA_API_SECRET
const pinataApiKey = "639d0dfdc673f1247b61"
const pinataSecretApiKey =
  "565c297cacecab488ef40a210c2e2c17f1fc4f8279663b044358b0b15ff71c16"
const pinataSDK = require("@pinata/sdk")
const pinata = pinataSDK(pinataApiKey, pinataSecretApiKey)

//ex: https://ipfs.io/ipfs/QmdwfhzZSoQxrwYEFhjmfuG622D6EqXA6Yi71vYtF6pJ4Y

const options = {
  pinataMetadata: {
    name: "Fumigene",
    keyvalues: {
      size: 1024,
      smoke: "yes",
    },
  },
  pinataOptions: {
    cidVersion: 0,
  },
}

// const axios = require("axios")
// const fs = require("fs")
// const FormData = require("form-data")
// const pinFileToIPFS = async () => {
//   const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
//   let data = new FormData()
//   data.append("file", fs.createReadStream("../public/poster.jpg"))
//   const res = await axios.post(url, data, {
//     maxContentLength: "Infinity",
//     headers: {
//       "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
//       pinata_api_key: pinataApiKey,
//       pinata_secret_api_key: pinataSecretApiKey,
//     },
//   })
//   console.log(res.data)
// }
// pinFileToIPFS()

pinata
  .testAuthentication()
  .then((result) => {
    //handle successful authentication here
    console.log(result)

    const fs = require("fs")
    const readableStreamForFile = fs.createReadStream("../public/poster.jpg")

    pinata
      .pinFileToIPFS(readableStreamForFile, options)
        .then((result) => {
        
        const body = {
          description: "Fumigene poster",
          image: "https://ipfs.io/ipfs/" + result.IpfsHash,
          name: "Fumigene",
          attributes: {
            size: 1024,
            smoke: "yes",
          },
        }
        pinata
          .pinJSONToIPFS(body, options)
          .then((result) => {
            //handle results here
            console.log(result)
          })
          .catch((err) => {
            //handle error here
            console.log(err)
          })
        console.log(result)
      })
      .catch((err) => {
        //handle error here
        console.log(err)
      })
    
    
  })

  .catch((err) => {
    //handle error here
    console.log(err)
  })
