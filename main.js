//1
const listOfTask = [
    {
        name: "running",
        isCompleted: true
    },
    {
        name: "work",
        isCompleted: true
    },
    {
        name: "work-out",
        isCompleted: false
    },
    {
        name: "learning",
        isCompleted: true
    },
    {
        name: "sleeping",
        isCompleted: false
    }
]
const screen = document.getElementById("screen");
for (let i = 0; i < listOfTask.length; i++) {
    listOfTask[i].id = Math.floor(Math.random() * 2001 + 1);
    screen.innerHTML += `<p class="same">${listOfTask[i].name}, ${listOfTask[i].isCompleted},${listOfTask[i].id}</p> `;
    
}
let added = {}
let same = document.getElementsByClassName("same")
const button = document.getElementById("add");
const userInput = document.getElementById("input");
button.addEventListener("click", function(){
    added.isCompleted = true;
    listOfTask.push(added)
    added.id = Math.floor(Math.random() * 2001 + 1);
    added.name = userInput.value;
    screen.innerHTML += `<p class="same">${added.name}, ${added.isCompleted},${added.id} </p>`;
    if (added.isCompleted) {
        same[same.length -1].style = "background-color:red;";
    }
})
for (let i = 0; i < same.length; i++) {
    if (listOfTask[i].isCompleted) {
        same[i].style = "background-color:red;";
    }
}

//2
const screen1 = document.getElementById("screen1")
const movies = [
    {
        movieName: "above the rim",
        moviePic:"https://filmous.com/static/photos/26502/21_midi.jpg",
        movieCast: [ "tupac", "sheperd" , "loony toons"]
    },
    {
        movieName: "coach carter",
        moviePic:"https://media.movieassets.com/static/images/items/movies/posters/500/100/coach-carter-3bcc19a8ff427f1704265072d2996ecd.jpg",
        movieCast: [ "samuel l.jackson", "cruz" , "coach son"]
    },
    {
        movieName: "Top Gun",
        moviePic:"https://i1.wp.com/www.pcgalaxy.co.il/wp-content/uploads/2017/07/top-gun-%D7%90%D7%94%D7%91%D7%94-%D7%91%D7%A9%D7%97%D7%A7%D7%99%D7%9D.jpeg?resize=660%2C330&ssl=1",
        movieCast: [ "tom cruz", "bridget" , "bill cosby"]
    }
]
for (let i = 0; i < movies.length; i++) {
    screen1.innerHTML +=`<h1>movie name:${movies[i].movieName}`
    screen1.innerHTML +=`<img src="${movies[i].moviePic}">`
    screen1.innerHTML +=`<p>cast: ${movies[i].movieCast}`
}

//3
const userInput2 = document.getElementById("userInput")
const push = document.getElementById("push")
const screen2 = document.getElementById("screen2")
push.addEventListener("click", function(){
    screen2.innerText += userInput2.value 
})

//4
const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const push1 = document.getElementById("push1")
const screen3 = document.getElementById("screen3")
push1.addEventListener("click", function(){
    screen3.innerHTML +=`${firstInput.value} ${secondInput.value}`
})

//5
// const userForm = {
//     firstName:"nadav",
//     email:"fsf@gmail.com",
//     age: 29
// }
// const push2 = document.getElementById("btn")
// const screen4 = document.getElementById("screen4")
// push2.addEventListener("click", function(){
//     let newUser = {
//         firstName:"ezra",
//         email: "dfs@gmail.com",
//         age: 28
//     }
//     screen4.innerHTML = `<form>${newUser.firstName}, ${newUser.email}, ${newUser.age}</form>`
// })

const nameFirst = document.getElementById("nameFirst");
const mail = document.getElementById("mail");
const usAge = document.getElementById("usAge");
const send = document.getElementById("send");
const show = document.getElementById("show");
send.addEventListener("click", function(){
    let newUser2 = {
        firstName:nameFirst.value,
        email:mail.value,
        age:Number(usAge.value)
    }
    show.innerHTML += `first name: ${newUser2.firstName}, email: ${newUser2.email}, age: ${newUser2.age }`
})

//6
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const push3 = document.getElementById("btn1")
const screen5 = document.getElementById("screen5")
push3.addEventListener("click", function(){
    let newObj = {
        userName: firstName.value,
        userLastName: lastName.value,
    }
    screen5.innerHTML +=`${newObj.userName}, ${newObj.userLastName}`
    console.log(newObj);
})

//7
const push4 = document.getElementById("btn2")
const screen6 = document.getElementById("screen6")
push4.addEventListener("click", function(){
    for (let i = 0; i < 10; i++) {
        screen6.innerHTML +=`<p>${[i]}</p>`
    }
})

//8
const email = document.getElementById("email")
const push5 = document.getElementById("btn3")
const screen7 = document.getElementById("screen7")
const emailList = [
    {
        email1: "abc@gmail.com"
    },
    {
        email1: "efg@gmail.com"
    },
    {
        email1: "hij@gmail.com"
    }
]
push5.addEventListener("click", function(){
    for (let i = 0; i < emailList.length; i++) {
        if (email.value == emailList[i].email1) {
            screen7.innerHTML =`<p>hey ${email.value} ur in</p>`;
            return
        }
    }screen7.innerHTML =`<p>hey ${email.value} ur out</p>`;
})


//9
const userString = document.getElementById("userString")
const push6 = document.getElementById("btn4")
const screen8 = document.getElementById("screen8")
push6.addEventListener("click", function(){
    screen8.innerHTML +=`<p>user string: ${userString.value}</p>`
    screen8.innerHTML +=`<p>string length: ${userString.value.length}</p>`
})


//10
const personForm = {
    fullName: "nadav zaro",
    birthPlace: "israel",
    flag: "https://insidesources.com/wp-content/uploads/2015/11/bigstock-Flag-Of-Israel-61293473.jpg",
    userAge: 29
}
const push7 = document.getElementById("btn5")
const screen9 = document.getElementById("screen9")
push7.addEventListener("click", function(){
    let newPersonForm = {
        fullName: "zaro nadav",
        birthPlace: "ethiopia",
        flag: "https://www.flagandbanner.com/images/FETHI35_l.jpg",
        userAge: 29
    }
    screen9.innerHTML +=`full name: ${newPersonForm.fullName}, birth place: ${newPersonForm.birthPlace}, age: ${newPersonForm.userAge}`
    screen9.innerHTML +=`<img src="${newPersonForm.flag}">`
})