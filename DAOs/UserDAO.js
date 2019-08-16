import {db, firebaseAuth} from '../firebase';

export default class UserDAO{

    saveUserOnFirebase(UserObject, mode='update'){
        let userInJSON = JSON.stringify(UserObject);

        if(mode == 'create'){ /*Avaliar possiblidade*/
            firebaseAuth.createUserWithEmailAndPassword(UserObject.email).then().catch();
        }

        db.child('users').child(UserObject.cpf).set(userInJSON);
    }


}
