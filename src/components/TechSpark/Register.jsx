import "./Register.css"
import logo from "images/tech-start-logo-white.png";
import React, { Component, useEffect } from 'react';
import axios from "axios";

const dataRoot = "https://techstartbackend.herokuapp.com"

function Register(props){

    const[user, setUser] = React.useState(0)

    useEffect(() => {
        axios.post(
            `${dataRoot}/register`, {
                username: document.getElementById('registerEmail').value,
                email: document.getElementById('registerEmail').value,
                first_name: document.getElementById('registerFirstName').value,
                last_name: document.getElementById('registerLastName').value,
                password: document.getElementById('registerPassword').value
            }
          ).then((response) => {
                
                let data = response.data;
                console.log(data)                
                
          }, (error) => {
            console.log(error);
          });
           
    });

    return (
        <div className = "registerStyling">
               <link rel="stylesheet"
                 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             <div className = "registerHeading">
                <img src = {logo} className = "registerLogo"/>
                <h3 className = "registerStyling">Get Started with TechStart's Community</h3>
             </div>  
            
            <p className = "registerIntro">Find people to connect with and post about your new projects
            and ideas as a TechStart Community Member.</p>
            <form className = "registerForm">
            <div className="registerNameDiv">
                <div className = "registerFirstNameInput">
                <i class="fa fa-user icon">
                  </i>
                    <input type="text" id="registerFirstName" placeholder = "First Name"/>
                </div>
                <div className = "registerLastNameInput">
                <i class="fa fa-user icon">
                  </i>
                    <input type="text" id="registerLastName" placeholder = "Last Name"/><br></br>
                </div>
                <div id="clear"/>
                </div>
                <div className = "registerDiv">
                    <i class="fa fa-envelope icon">
                  </i>
                    <input type="text" id="registerEmail" placeholder = "Email"/><br></br>
                </div>
                <div className = "registerDiv">
                     <i class="fa fa-key icon">
                    </i>
                    <input type="password" id="registerPassword" placeholder="Password"/><br></br>
                </div>
                <input type="submit" id = "registerSubmit" value = "Get Started!" onClick = {() => setUser(user + 1)}/>

            </form>
            <div className = "switchToLogin">
                <h5 className = "logInLink">Already have an account?</h5>
                 <button className= "loginSwitch" onClick = {props.switchMode} ><i class="fa fa-lock icon">
                  </i> Log In</button>
            </div>
        </div>
    );
}

export default Register;