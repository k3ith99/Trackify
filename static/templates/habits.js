function habitsHTML({habit,goal,frequency,streak}){
    return  `
<div class="habit p-5 m-3 rounded-3 text-black" style="background-color:#a4c48f">
    <h2 class="title">${habit}</h2>
    <h4 class="goal">Goal: ${goal}</h4>
    <h4 class="frequency">Frequency: ${frequency}</h4>
    <h4 class="streak">Streak: ${streak}</h4>
    <button id="complete" class="mt-3 mx-3 btn btn-lg btn-outline-dark" type="submit">Complete Habit</button>
</div>`
}

module.exports = habitsHTML;
