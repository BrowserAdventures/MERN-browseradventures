import firebase from 'firebase'
import KEYS from './config/keys'


firebase.initializeApp(KEYS.firebase);

export const database = firebase.database().ref('/picturebooks')

export const db_book=(id)=>
{
    return firebase.database().ref(`/picturebooks/${id}`)
}

export const db_bookDescription=(book, description)=>
{
    return firebase.database().ref(`/picturebooks/${book}/${description}`)
}
