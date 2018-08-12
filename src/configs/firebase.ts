import firebase from "firebase";

// tslint:disable:object-literal-sort-keys
const config = {
    apiKey: "AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU",
    authDomain: "myspace-c3805.firebaseapp.com",
    databaseURL: "https://myspace-c3805.firebaseio.com",
    projectId: "myspace-c3805",
    storageBucket: "myspace-c3805.appspot.com",
    messagingSenderId: "757274443049"
};

let database: firebase.database.Database = null;

const DB_NAME = "hygatsby";

const start = () => {
    firebase.initializeApp(config);
    database = firebase.database();
};

const get = () => {
    database.ref(`/${DB_NAME}`).on("value", (snapshot) => {
        console.log(snapshot.val());
    }, (errorObject: any) => {
        console.log("The read failed: " + errorObject.code);
    });
}

const add = (text: string, successCallback?: () => void) => {
    database.ref(`/${DB_NAME}`).push({ text, createdAt: (new Date()).getTime() }, () => {
        // console.log("complete");
    })
}

const getDatabase = (): firebase.database.Database => {
    return database;
}

export { start, get, add, getDatabase, DB_NAME };
