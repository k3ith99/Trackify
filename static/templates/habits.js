
function habitsHTML({habit,goal,frequency,streak}){
    return  

/*habits.innerHTML = 

`<div class="habit p-5 m-3 rounded-3 text-black" style="background-color:#a4c48f">
    <h2 class="title">${habit}</h2>
    <h4 class="goal">Goal: ${goal}</h4>
    <h4 class="frequency">Frequency: ${frequency}</h4>
    <h4 class="streak">Streak: ${streak}</h4>
    <button id="complete" class="mt-3 mx-3 btn btn-lg btn-outline-dark" type="submit">Complete Habit</button>
</div>`*/


`<div class="form-floating text-black">
                        <input type="text" class="form-control" id="title" placeholder="Habit">
                        <label for="title p-5">Habit</label>
                    </div>
                    <div class="form-floating text-black">
                        <input type="text" class="form-control" id="goal" placeholder="goal">
                        <label for="goal p-5">Goal</label>
                    </div>
                    <h4 class="mt-3">Frequency:</h4>
                    <div class="btn-group shadow" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="daily" autocomplete="off" checked>
                        <label class="btn btn-outline-light" for="daily">Daily</label>
                        <input type="radio" class="btn-check" name="btnradio" id="weekly" autocomplete="off">
                        <label class="btn btn-outline-light" for="weekly">Weekly</label>
                        <input type="radio" class="btn-check" name="btnradio" id="monthly" autocomplete="off">
                        <label class="btn btn-outline-light" for="monthly">Monthly</label>
                        <input type="radio" class="btn-check" name="btnradio" id="custom" autocomplete="off">
                        <label class="btn btn-outline-light" for="custom">Custom</label>
                        <div id="textbox"></div>
                      </div>`
}

module.exports = habitsHTML;



