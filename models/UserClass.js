

export default class UserClass{

    constructor(name='', cpf='', cellphonesArray=[]){
        this.name = name;
        this.cpf = cpf;
        this.cellphones = cellphonesArray;
    }

    addPhone(newNumberPhone){
            this.cellphones.push(newNumberPhone);
    }

    removePhone(phone){
        let cont = 0;
        this.cellphones.forEach((item, index)=>{
            if(item == phone){
                cont = index;
                break;
            }
        });

        this.cellphones.splice(cont, 1)
    }

    setName(newName){
            this.name = newName;
    }

    setCpf(cpfNumber){
        this.cpf = cpfNumber;
    }





}
