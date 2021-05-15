import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'ap-southeast-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'bharat.poptwani@gmail.com',
    Destination: {
      ToAddresses: ['bharat.poptwani@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Bharat!',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
