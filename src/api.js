import AWS from 'aws-sdk/global';
import AWSIoTData from 'aws-iot-device-sdk';

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:35299f6f-fa5f-49bf-b36d-4538cada935e',
});

const shadows = AWSIoTData.thingShadow({
    region: AWS.config.region,  
    host: 'ahc4edec5fxm7.iot.us-east-1.amazonaws.com',
    clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)),
    protocol: 'wss',
    maximumReconnectTimeMs: 8000,
    debug: true,
    accessKeyId: '',
    secretKey: '',
    sessionToken: ''
});

let cognitoIdentity = new AWS.CognitoIdentity();
AWS.config.credentials.get(function(err, data) {
   if (!err) {
      console.log('retrieved identity: ' + AWS.config.credentials.identityId);
      var params = {
         IdentityId: AWS.config.credentials.identityId
      };
      cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
         if (!err) {
            shadows.updateWebSocketCredentials(data.Credentials.AccessKeyId,
               data.Credentials.SecretKey,
               data.Credentials.SessionToken);
         } else {
            console.log('error retrieving credentials: ' + err);
            alert('error retrieving credentials: ' + err);
         }
      });
   } else {
      console.log('error retrieving identity:' + err);
      alert('error retrieving identity: ' + err);
   }
});

export const onMapChanged = (cb) => {
    shadows.on('connect', () => {
        console.log('connection');
        // shadows.publish('myTopic/1', JSON.stringify({ test_data: 1}));
    });
    shadows.on('reconnect', () => {
        console.log('reconnect');
    });
    shadows.on('message', (topic, message) => {
        console.log('message:', topic, message.toString());
    });
}











