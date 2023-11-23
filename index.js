//Rest Operator

function addNumbers(a,b,c,...other){
    console.log(other);
    return a+b+c;
}

const res = addNumbers(2,5,6,8,9,7,8);
console.log(res);


//Spread Operator
var names = ["Ajay","Anuj","Vivek"];

function getNames(name1,name2,name3){
    console.log(name1,name2,name3);
}

getNames(names[0],names[1],names[2]);

getNames(...names); //Spread

getNames(names);


//Rest with Object

var students={
    name:"Tanuj",
    age:"27",
    hobbies:["Cricket","Singing"]
}
// const age=students.age;
const {age,...rest}=students; //Object Destructuring and Rest Operation
console.log(age);
console.log(rest);

//Spread with Object

var newStudent={
    ...students,
    age:"28"
}

console.log(newStudent)