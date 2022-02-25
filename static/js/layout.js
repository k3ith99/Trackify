const signin = document.getElementById("signin");
const homepage = document.getElementById("homepage-section")
const habits = document.getElementById("habits-section")
const custom = document.getElementById("custom")
const requests = require('./requests');
const body = document.querySelector('body')
const habitsbtn = document.getElementById('habitsbtn')




const showTextbox = () => {
    // e.preventDefault();
    const textbox = document.getElementById('textbox')
    const newText = document.createElement('input')
    newText.setAttribute('type', 'text');
    newText.setAttribute('class', 'form-control')
    newText.setAttribute('class', 'shadow')
    textbox.append(newText);
}

// custom.addEventListener('click', showTextbox)

const testbtn = document.getElementById('testbtn')

testbtn.addEventListener('click', showHomepage)
habitsbtn.addEventListener('click', createHabit)

function showHomepage() {
    //id=info

    let sideBoxesDiv = document.getElementById("side-boxes")
    let infoDiv = document.createElement("div")
    let info = document.createElement('h2')
    let para = document.createElement('p')

    info.textContent += "Info"
    para.textContent += "information about the tracker (what it is, what it can be used for, how long they can do it for etc)"
    infoDiv.setAttribute('style', 'background-color:#a4c48f')
    infoDiv.setAttribute('id', 'info')
    infoDiv.classList.add('shadow', 'rounded-3', 'm-3', 'p-5', 'text-black')

    sideBoxesDiv.append(infoDiv)
    infoDiv.append(info)
    infoDiv.append(para)

    //id=login
    
    let loginDiv = document.createElement("div")
    let login = document.createElement('h2')
    let form = document.createElement('form')
    let divE = document.createElement('div')
    let divP = document.createElement('div')
    let email = document.createElement('input')
    let password = document.createElement('input')
    let labelE = document.createElement('label')
    let labelP = document.createElement('label')
    let signin = document.createElement('button')
    let register = document.createElement('button')

    loginDiv.setAttribute('id', 'login')
    loginDiv.setAttribute('style', 'background-color:#a4c48f')
    loginDiv.classList.add('shadow', 'rounded-3', 'm-3', 'p-5', 'text-black')
    login.textContent += "Sign in/Register"
    form.setAttribute('action', 'submit')
    divE.setAttribute('class', 'form-floating')
    divP.classList.add('form-floating', 'mt-1')
    email.setAttribute('type', 'email')
    email.setAttribute('id', 'floatingInput')
    email.setAttribute('class', 'form-control')
    email.setAttribute('placeholder', 'name@example.com') 
    password.setAttribute('type', 'password')
    password.classList.add('text-black', 'form-control')
    password.setAttribute('id', 'floatingPassword')
    password.setAttribute('placeholder', 'Password')
    labelE.setAttribute('for', 'floatingInput')
    labelE.textContent = "Email address"
    labelP.setAttribute('for', 'floatingPassword')
    labelP.setAttribute('style', 'color:black')
    labelP.innerHTML = "Password"
    signin.classList.add('w-100', 'mt-3', 'btn', 'btn-lg', 'btn-outline-dark')
    signin.setAttribute('type', 'submit')
    register.classList.add('w-100', 'mt-3', 'btn', 'btn-lg', 'btn-outline-dark')
    register.setAttribute('type', 'submit')
    signin.innerHTML = "Sign in"
    register.innerHTML = "Register"

    email.append(labelE)
    password.append(labelP)
    divE.append(email)
    divP.append(password)
    form.append(divE)
    form.append(divP)
    form.append(signin)
    form.append(register)
    loginDiv.append(login)
    loginDiv.append(form)
    sideBoxesDiv.append(loginDiv)

    //id=testimonials
    let longBox = document.getElementById('long-box')
    let testDiv = document.createElement('div')
    let test = document.createElement('h2')
    let paraT = document.createElement('p')

    testDiv.setAttribute('id', 'testimonials')
    testDiv.classList.add('shadow', 'h-100', 'm-3', 'p-5', 'text-black', 'rounded-3')
    testDiv.setAttribute('style', 'background-color:#a4c48f')
    test.textContent += "Testimonials"
    paraT.textContent += "This app is great!", "I feel so motivated to reach my goals with this tracker"

    testDiv.append(test)
    testDiv.append(paraT)
    longBox.append(testDiv)

}

function createHabit() {
    let createHabit = document.getElementById('create-habit')
    // let btn = document.createElement('button')
    let addHabit = document.createElement('div')
    let create = document.createElement('h2')
    let createForm = document.createElement('form')
    // let radio = input.setAttribute('type', 'radio')
    let habit = document.createElement('input')
    // let goal = document.createElement('input')
    // let frequency = document.createElement('h4').textContent += "Frequency"
    // let frequencyGroup = createDiv.classList.add('btn-group', 'shadow')
    // let daily = radio.setAttribute('id', 'daily')
    // let weekly = radio.setAttribute('id', 'weekly')
    // let monthly = radio.setAttribute('id', 'monthly')
    // let custom = radio.setAttribute('id', 'custom')
    let divH = document.createElement('div')
    // let divG = document.createElement('div')
    let labelH = document.createElement('label')
    // let labelG = document.createElement('label')

    addHabit.setAttribute('id', 'add-habit')
    addHabit.classList.add('shadow', 'p-5', 'm-3', 'rounded-3')
    createForm.setAttribute('action', 'submit')
    create.textContent += "Create Habit"
    habit.setAttribute('class', 'form-control')
    habit.setAttribute('id', 'habit')
    habit.setAttribute('type', 'text')
    habit.setAttribute('placeholder', 'Habit')
    // goal.setAttribute('class', 'form-control')
    // goal.setAttribute('id', 'goal')
    // goal.setAttribute('type', 'text')
    // goal.setAttribute('placeholder', 'Goal')
    labelH.setAttribute('class', 'p-5')
    labelH.setAttribute('for', 'habit')
    // labelG.setAttribute('class', 'p-5')
    // labelG.setAttribute('for', 'goal')

    divH.append(labelH)
    divH.append(habit)
    addHabit.append(divH)
    // createHabit.append(addHabit)
    // goal.append(labelG)
    console.log(addHabit)
    
    // divG.append(goal)
    // createForm.append(divH)
    // createForm.append(divG)
    // createHabit.append(createForm)
}



// const habitCards = document.getElementById("habit-cards")
// //const habitsHTML = require("../templates/habits")
// signin.addEventListener('click', showHabitsSection)
// const deletebtn = document.getElementById("delete")
// const updatebtn = document.getElementById("complete")









function showHabitsSection() {
    e.preventDefault();
    homepage.style.display="none"; //remove e potentially
    // habits.style.display="block"
    // for (let key of data){
    //     habitCards.innerHTML+=habitsHTML(key)}

}


divCreate = document.createElement("div")



function appendHabit(data){
    const newDiv = document.createElement("div") // add a class
    newDiv.setAttribute('class', 'habit')
    const habitCard = formatCard(newDiv, data)
    habitCards.append(newDiv)

}

function formatCard(newDiv, data){
    //creating elements
    const habit = document.createElement("h2")
    habit.setAttribute("class", "title")
    const goal = document.createElement("h6")
    goal.setAttribute("class", "goal")
    const frequency = document.createElement("h6")
    frequency.setAttribute("class", "frequency")
    const streak = document.createElement("h6")
    streak.setAttribute("class", "streak")
    const habitbtn = document.createElement("button")
    habitbtn.setAttribute("type", "submit")
    habitbtn.innerHTML = "Complete Habit"
    const deletebtn = document.createElement("button")
    deletebtn.setAttribute("class" , "delete")
    deletebtn.innerHTML = "Delete Habit"
    deletebtn.onclick = () => requests.deleteHabit(data,newDiv)
//call delete function and add data, newDiv
    habit.textContent = data.habit
    goal.textContent = data.goal
    frequency.textContent = data.frequency
    streak.textContent = data.streak

    newDiv.append(habit)
    newDiv.append(goal)
    newDiv.append(frequency)
    newDiv.append(streak)
    return newDiv
    
    
}



function updateHabit(data){


}





module.exports = {showHabitsSection, appendHabit};





