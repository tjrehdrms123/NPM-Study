// Load the AWS SDK for Node.js
require("dotenv").config();
const AWS = require("aws-sdk");
// Set the region
AWS.config.loadFromPath("./awsconfig.json");

// Create sendEmail params
const params = {
  Destination: {
    /* required */
    CcAddresses: [
      "seogdonggeun@gmail.com",
      /* more items */
    ],
    ToAddresses: [
      "seogdonggeun@gmail.com",
      /* more items */
    ],
  },
  Message: {
    /* required */
    Body: {
      /* required */
      Html: {
        Charset: "UTF-8",
        Data: "<h1>This is AWS SES for Mailer</h1>",
      },
      Text: {
        Charset: "UTF-8",
        Data: "Hello,",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "AWS SES With Node SDK",
    },
  },
  Source: "seogdonggeun@gmail.com" /* required */,
  ReplyToAddresses: [
    "seogdonggeun@gmail.com",
    /* more items */
  ],
};

// Create the promise and SES service object
const sendPromise = new AWS.SES({ apiVersion: "2022-09-07" })
  .sendEmail(params)
  .promise();

// Handle promise's fulfilled/rejected states
sendPromise
  .then(function (data) {
    console.log(data.MessageId);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
