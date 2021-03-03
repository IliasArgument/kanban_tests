import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyCwHUOVaPTCSmZ4jgaC-iJU9TcR5KckfXk",
    authDomain: "kanban1231.firebaseapp.com",
    databaseURL: "https://kanban1231-default-rtdb.firebaseio.com",
    projectId: "kanban1231",
    storageBucket: "kanban1231.appspot.com",
    messagingSenderId: "1085909752943",
    appId: "1:1085909752943:web:2d0368b6df68c4087c019a",
    measurementId: "G-4JWZYRFZ7N"
  });
  firebase.analytics();
};

export const createDesk = (name) => {
  const db = firebase.firestore();

  return db
    .collection("desks")
    .add({ name })
    .then((docRef) => docRef.get());
};

export const getDesks = () => {
  const db = firebase.firestore();
  return db
    .collection("desks")
    .get()
    .then((querySnapshot) => {
      const desks = [];
      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
      return desks;
    });
};

export const deleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection("desks").doc(id).delete();
};

export const getColumns = (deskId) => {
  const db = firebase.firestore();
  return db
    .collection("columns")
    .where("deskId", "==", deskId)
    .get()
    .then((querySnapshot) => {
      const columns = [];
      querySnapshot.forEach((doc) => {
        const { deskId, name } = doc.data();
        columns.push({
          id: doc.id,
          name,
          deskId,
        });
      });

      return columns;
    });
};
export const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns").doc(id).delete();
};

export const getCards = (columnId) => {
  const db = firebase.firestore();
  return db
    .collection("cards")
    .where("columnId", "==", columnId)
    .get()
    .then((querySnapshot) => {
      const cards = [];
      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();
        cards.push({
          id: doc.id,
          name,
          columnId,
        });
      });

      return cards;
    });
};
export const deleteCard = (id) => {
    const db = firebase.firestore();
    return db.collection("cards").doc(id).delete()
};
export const createCard = (name, columnId) => {
    const db = firebase.firestore();
    return db
      .collection("cards")
      .add({ name, columnId })
      .then((docRef) => docRef.get());
};
export const createColumn = (name, deskId) => {
    const db = firebase.firestore();
    return db
      .collection("columns")
      .add({ name, deskId })
      .then((docRef) => docRef.get());
};