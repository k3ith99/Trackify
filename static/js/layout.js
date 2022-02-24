const signin = document.getElementById("signin");
const homepage = document.getElementById("homepage-section")
const habits = document.getElementById("habits-section")
const custom = document.getElementById("custom")



const showTextbox = (e) => {
    e.preventDefault();
    const textbox = document.getElementById('textbox')
    const newText = document.createElement('input')
    newText.setAttribute('type', 'text');
    newText.append(textbox);
}

custom.addEventListener('click', showTextbox)


const habitCards = document.getElementById("habit-cards")
//const habitsHTML = require("../templates/habits")
signin.addEventListener('click', showHabitsSection)
const deletebtn = document.getElementById("delete")
const updatebtn = document.getElementById("complete")
const requests = require("./requests")








function showHabitsSection(data) {
    //e.preventDefault();
    //homepage.innerHTML = target.style.display.none; //remove e potentially
    for (let key of data){
        habitCards.innerHTML+=habitsHTML(key)}

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
    const goal = document.createElement("h4")
    goal.setAttribute("class", "goal")
    const frequency = document.createElement("h4")
    frequency.setAttribute("class", "frequency")
    const streak = document.createElement("h4")
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



module.exports = {showHabitsSection, appendHabit,};


signin.addEventListener('click', showHabitsSection)

function showHabitsSection(e) {
    e.preventDefault();
    homepage.innerHTML = e.target.style.display('none');
}




