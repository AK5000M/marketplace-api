const AWS = require('aws-sdk');

export const sendSmsToPhone = (mobileNo, message) => {
  var params = {
    Message: message,
    PhoneNumber: mobileNo,
  };

  return new AWS.SNS({ apiVersion: '2010–03–31' })
    .publish(params)
    .promise()
    .then((message) => {
      console.log('message=>', { message });
      console.log('OTP SEND SUCCESS', { message });
    })
    .catch((err) => {
      console.log('Error ' + err);
      return err;
    });
};
