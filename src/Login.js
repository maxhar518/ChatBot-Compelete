import './Login.css';

function Login() {
    return (
        <form class="form_main" action="">
            <p class="heading">Login</p>
            <div class="inputContainer">
                <input placeholder="Username" id="username" class="inputField" type="text" />
            </div>

            <div class="inputContainer">
                <input placeholder="Password" id="password" class="inputField" type="password" />
            </div>


            <button id="button">Submit</button>
            <div class="signupContainer">
                <p>Don't have any account?</p>
                <a href="/Signup">Sign up</a>
            </div>
        </form>
    );
}

export default Login;
