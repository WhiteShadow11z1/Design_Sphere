import { useState } from "react";
import LoginImage from "../../img/Digital lifestyle-pana.svg";
import CoverImage from "../../img/Tablet login-rafiki.svg";
import {useDispatch} from "react-redux";
import "./Auth.css";
import { login, signUp } from "../../actions/AuthActions";

function AuthPage()
{
    const dispatch = useDispatch();
    const [data, setData] = useState({firstName : null, lastName : null, username : null, password : null, confirmPassword : null});
    const [isSignUp, setSignUp] = useState(false);
    const [isConfirmPassword, setConfirmPassword] = useState(true);

    const update = (e) =>
    {
        setData({...data, [e.target.name] : e.target.value})
    }

    const confirmPassword = (e) =>
    {
        e.preventDefault();
        
        if(isSignUp)
        {
            if(data.password === data.confirmPassword)
            {
                dispatch(signUp(data));
            }
            else
            {
                setConfirmPassword(false);
            }
        } 
        else
        {
            dispatch(login(data));
        }
    }

    return (
        
        <div className = "Authentication">
            {isSignUp ?
            <div className = "SignUp-Container" onSubmit={confirmPassword}>
                <form className = "SignUp-Form" action = "/signup" method="post">
                    <input name = "username" placeholder="User Name" onChange = {update}></input>
                    <input name = "firstName" placeholder = "First Name" onChange = {update}></input>
                    <input name = "lastName" placeholder = "Last Name" onChange = {update}></input>
                    <input type = "email" placeholder = "Email" onChange = {update}></input>
                    <input name = "password" type = "password" placeholder="Password" onChange = {update}></input>
                    <input name = "confirmPassword" type = "password" placeholder = "Confirm password" onChange={update}></input>
                    {!isConfirmPassword && <span>"Password and confirm password are not the same!"</span>}
                    <button type = "submit">Sign Up</button>
                </form>

                <div className = "Image-Container">
                    <img className = "Image-Container-img" src = {CoverImage} alt = "signUp"></img>
                </div>
            </div> : 
            <div className = "Login-Container align-center-Login">
                <div className = "Form-Container">
                    <form className="align-center-Login" action = "/" method = "post" onSubmit={confirmPassword}>  
                        <p style = {{justifyContent:"flex-start", marginBottom : "0.5rem"}}>Email</p>
                        <input className = "Login-input" type = "text" name = "username" placeholder = "username" onChange = {update}></input>
                        <p>Password</p>
                        <input className = "Login-input" type = "password" name = "password" placeholder = "Password" onChange = {update}></input>
                        <button  type = "submit">Login</button> 
                    </form>
                </div>
                <div className = "Login-Image">
                    <img className = "Login-Image-img" src = {LoginImage} alt = "Login"></img>
                </div>
            </div>}
            {isSignUp && <h3 className="ChangePage" onClick={() => setSignUp((prev) => !prev)}>"Already have an account? Log in"</h3>}
            {!isSignUp && <h3 className="ChangePage" onClick={() => setSignUp((prev) => !prev)}>"Don't have an accoutn yet? Sign up"</h3>}
        </div>
    );
}

export default AuthPage;