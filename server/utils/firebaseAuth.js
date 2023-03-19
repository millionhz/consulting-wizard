const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

const createUser = (uid, email, password) =>
  auth.createUser({
    uid,
    email,
    password,
  });

const deleteUser = (uid) => auth.deleteUser(uid);

const validateToken = (token) => auth.verifyIdToken(token);

module.exports = { createUser, deleteUser, validateToken };

