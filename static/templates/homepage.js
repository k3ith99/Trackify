homepage.innerHTML = `
<div id="homepage-sections">
    <div id="side-boxes" class="">
        <div id="info" class="m-3 p-5 text-black rounded-3" style="background-color:#a4c48f">
            <h2>Info</h2>
            <p>information about the tracker (what it is, what it can be used for, how long they can do it for etc)</p>
        </div>
        <div id="login" class="p-5 m-3 rounded-3 text-black" style="background-color:#a4c48f">
            <h2>Sign in/Register</h2>
            <form action="submit">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput p-5">Email address</label>
                </div>
                <div class="form-floating mt-1">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                <button id="signin" class="w-100 mt-3 btn btn-lg btn-outline-dark" type="submit">Sign in</button>
                <button id="register" class="w-100 mt-3 btn btn-lg btn-outline-dark" type="submit">Register</button>
            </form>
        </div>
    </div>
    <div id="long-box">
        <div id="testimonials" class="h-100 m-3 p-5 text-black rounded-3" style="background-color:#a4c48f">
            <h2>testimonials</h2>
            <p>"This app is great!" <br> "I feel so motivated to reach my goals with this tracker"</p>
        </div>
    </div>
</div>
`
