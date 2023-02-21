// class Student{
//     name = 'mehedy';
//     roll = 12
// }

// const student1 = new Student();
// console.log(student1.name)

class Student{
    name;
    roll;
    constructor(name,roll){
        this.name = name;
        this.roll = roll
    }
    showDetails(){
        console.log(`My name is ${this.name}. My roll is ${this.roll}`)
    }
}

const student1 = new Student('mehedy',12)
const student2 = new Student('Hasan', 52)



student1.showDetails()
student2.showDetails()



