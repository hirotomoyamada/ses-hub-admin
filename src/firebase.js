import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

import { algolia } from "./algolia";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export const db = app.firestore();
export const auth = firebase.auth();
export const functions = firebase.app().functions("asia-northeast1");
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const providerGithub = new firebase.auth.GithubAuthProvider();

const index = algolia.initIndex("companys");

export const insert = async () => {
  await db
    .collection("companys")
    // .collection("persons")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
        // データ 追加
        await doc.ref
          .set(
            {
              payment: {
                option: { freelanceDirect: true },
              },
              // type: ["individual", "parent"][Math.floor(Math.random() * 2)],
            },
            { merge: true }
          )
          .catch((e) => {
            console.log(e);
          });

        await index.partialUpdateObject(
          {
            objectID: doc.id,
            freelanceDirect: "enable",
          },
          {
            createIfNotExists: false,
          }
        );

        // データ 削除
        // doc.ref
        //   .update({
        //     // history: firebase.firestore.FieldValue.delete(),
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   });
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
