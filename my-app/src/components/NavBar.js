import React from "react";
import css from './css/NavBar.module.css'

class NavBar extends React.Component{

    constructor() {
        super();
        this.state = {
            greeting: "Hello, ",
            name: "guest!",
            buttonText: "Login"
        }
    }

    greetUser() {
        this.setState((prevState) => {
            console.log('old greeting', prevState.greeting);
            console.log('old name', prevState.name);
            console.log('old buttonText', prevState.buttonText);
            return {
                greeting: prevState.greeting === "Hello, " ? "Welcome back, " : "Hello, ",
                name: prevState.name === "guest!" ? "user!" : "guest!",
                buttonText: prevState.buttonText === "Login" ? "Logout" : "Login"
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <div className={css.Greeting}>
                    <span>{this.state.greeting}{this.state.name}</span>
                </div>
                <div className={css.Button}>
                    <button onClick={() => this.greetUser()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBar;