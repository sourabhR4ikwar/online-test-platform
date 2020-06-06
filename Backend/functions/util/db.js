const admin = require("firebase-admin");
const serviceAccount = require("../cred.json");

// Firebase initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://online-test-portal-f97ac.firebaseio.com",
});

const db = admin.firestore();

module.exports = { db, admin};