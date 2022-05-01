import "./login.css"
import CardNote from "../../componnents/card-note/card-note";
import Input from "../../componnents/input/input";
import Button from "../../componnents/button/button";


function Login() {
  return (
    <div className="Login">
      <main>
        <CardNote title="Jot" color="yellow-ligth" animated={true} />
        <p className="text-login">Let's make some notes!</p>
        <div className="input-container">
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <a href="/forgot"> Forgot Password</a>
          <Button text="Sign in" />
          <p className="sing-up-text">Don't have an account?  <a href="/forgot"> SIGN UP</a></p>
         
        </div>
      </main>
    </div>
  );
}

export default Login;
