import AWS from 'aws-sdk/global';
import AWSIoTData from 'aws-iot-device-sdk';

// create this file with identityPoolId, host, and region
import config from './awsConfig';

AWS.config.region = config.region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: config.identityPoolId
});


const shadowListeners = (shadows, cb) => {
    shadows.on('connect', () => {
        console.log('connection');
        shadows.subscribe('desk_occupancy');
    });
    shadows.on('reconnect', () => {
        console.log('reconnect');
    });
    shadows.on('message', (topic, message) => {
        console.log('message:', topic, message.toString());
        cb(JSON.parse(message));
    });
}

export const onDeskOccupancyChanged = (cb) => {

    let cognitoIdentity = new AWS.CognitoIdentity();
    AWS.config.credentials.get(function(err, data) {
    if (!err) {
        var params = {
            IdentityId: AWS.config.credentials.identityId
        };
        cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
            if (!err) {

                const shadows = AWSIoTData.thingShadow({
                    region: AWS.config.region,  
                    host: config.host,
                    clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)),
                    protocol: 'wss',
                    maximumReconnectTimeMs: 8000,
                    debug: true,
                    accessKeyId: data.Credentials.AccessKeyId,
                    secretKey: data.Credentials.SecretKey,
                    sessionToken: data.Credentials.SessionToken
                });

                shadowListeners(shadows, cb);
            } else {
                alert('error retrieving credentials: ' + err);
            }
        });
    } else {
        console.log('error retrieving identity:' + err);
        alert('error retrieving identity: ' + err);
    }
    });
}












