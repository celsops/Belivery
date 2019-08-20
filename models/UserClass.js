

export default class UserClass{

    constructor(name='', cpf='', cellphonesArray=[], email='', pass='', profission=''){
        this.name = name;
        this.cpf = cpf;
        this.cellphones = cellphonesArray;
        this.email = email;
        this.password = pass;
        this.profission = profission;
    }

    addPhone(newNumberPhone){ this.cellphones.push(newNumberPhone); }

    removePhone(phone){
        let cont = 0;
        this.cellphones.forEach((item, index)=>{
            if(item == phone){
                cont = index;
                //break;
            }
        });

        this.cellphones.splice(cont, 1)
    }

    deletePassword(){
        delete this.password;
    }

    setProfission(newProfission){ this.profission = this.profission; }

    setName(newName){ this.name = newName; }

    setCpf(cpfNumber){ this.cpf = cpfNumber; }

    setEmail(newEmail){ this.email = newEmail; }

    setPassword(pass){ this.password = pass; }

    getCPF(){ return this.cpf; }

    getEmail(){ return this.email; }

    getProfission(){ return this.profission; }
}
