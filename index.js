// //Rest Operator

// function addNumbers(a, b, c, ...other) {
//   console.log(other);
//   return a + b + c;
// }

// const res = addNumbers(2, 5, 6, 8, 9, 7, 8);
// console.log(res);

// //Spread Operator
// var names = ["Ajay", "Anuj", "Vivek"];

// function getNames(name1, name2, name3) {
//   console.log(name1, name2, name3);
// }

// getNames(names[0], names[1], names[2]);

// getNames(...names); //Spread

// getNames(names);

// //Rest with Object

// var students = {
//   name: "Tanuj",
//   age: "27",
//   hobbies: ["Cricket", "Singing"],
// };
// // const age=students.age;
// const { age, ...rest } = students; //Object Destructuring and Rest Operation
// console.log(age);
// console.log(rest);

// //Spread with Object

// var newStudent = {
//   ...students,
//   age: "28",
// };

// console.log(newStudent);

//Async JS Programming
//Callbacks , Promises, Async , Await

const datas = [
  {
    name: "Tanuj",
    Profession: "Software Engineer",
  },
  {
    name: "Anuj",
    Profession: "Software Engineer",
  },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData, callback) {
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
// createData({ name: "Vivek", Profession: "Software Engineer" },getDatas); //Callback

function createData1(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something is wrong");
      }
    }, 2000);
  });
}

// createData1({ name: "Vivek", Profession: "Software Engineer" })
//   .then(getDatas)
//   .catch((err) => console.log(err)); //Promise


//Async & Await

function createData2(newData) {
    setTimeout(() => {
      datas.push(newData);
    }, 2000);
  }


 async function start(){
    await createData1({ name: "Vivek", Profession: "Software Engineer" });
    getDatas();
}

start();
