const admin = require('firebase-admin');
const { uid: getUid } = require('uid/secure');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
const uidLength = 24;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

const createUser = (email, password) =>
  auth.createUser({
    uid: getUid(uidLength),
    email,
    password,
  });

const deleteUser = (uid) => auth.deleteUser(uid);

module.exports = { createUser, deleteUser };
