import {db, firebaseAuth} from '../firebase';

export default class UserDAO{

    saveUserInTable(UserObject){
        UserObject.deletePassword();
        let chave = db.ref('/profissionals/').push();
        //db.child('/profissionals/').child(chave).set(UserObject);
        chave.set(UserObject)
        .catch((err)=>{alert('Erro ao salvar dados!')});
    }

    saveUserOnFirebaseAuth(UserObject){
        firebaseAuth.createUserWithEmailAndPassword(UserObject.email.trim(), UserObject.password.trim())
        .then((succ)=>{
            alert("Cadastrado com sucesso");
            this.saveUserInTable(UserObject);
        }).catch((err)=>{
            alert(err.message);
            return "Erro ao cadastrar usuário."
        });
    }

    updateUser(UserObject){
        let chave = UserObject.getCPF();
        
        db.child(UserObject.getCPF()).update(UserObject)
        .then((suc)=> {
            return "Dados atualizado com sucesso."
        }).catch((err)=>{
            return "Erro ao atualizar os dados."
        });
    }

    deleteUser(UserObject){
        //
    }

}