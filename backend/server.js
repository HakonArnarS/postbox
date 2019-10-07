const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authInfo = require('./secret.js');
const axios = require('axios');
const port = 3001;
const app = express();
const fetch = require('isomorphic-fetch'); 

app.use(cors());

app.use(
    bodyParser.json()
);

app.get('/users', (req, res) => {
    axios('https://ssb-dev-fep-01.azurewebsites.net/api/Sender', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(authInfo).toString('base64')
        }
    }).then(r => {
        res.send(r.data)
    })
})



app.post('/post-orders', (req, res) => {
    fetch("https://ssb-dev-fep-01.azurewebsites.net/api/Delivery", {
        body: JSON.stringify({

            "senderOrderID": "603",
            "description": "lysing",
            "senderId": 4,
            "numberOfPackages": req.body.numberOfPackages,
            "pickupAtDeliveryBranch": true,
            "box": false,
            "location": "hilla",
            "recipient": {
                "email": req.body.email,
                "phone": req.body.phone,
                "name": req.body.name
            }
        }),
        headers: {
            Accept: "application/json",
            Authorization: 'Basic '+Buffer.from(authInfo).toString('base64'),
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then(r =>
            r.json()
        )
        .then(buisKey =>
            {console.log(buisKey) 
           res.send(buisKey)}

        )
})




app.listen(port, () => {
    console.log("listening to port", port);
})



