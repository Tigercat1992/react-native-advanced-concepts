const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const requestOneTimePassword = require('./request_one_time_password');
const verifyOneTimePassword = require('./verify_one_time_password');
const serviceAccount = require('./service_account.json');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-c63ab.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);

exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);

exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);
