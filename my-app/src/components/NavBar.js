import React from "react";

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
            return {
                greeting: prevState.greeting === "Hello, " ? "Welcome back, " : "Hello, ",
                name: prevState.name === "guest!" ? "user!" : "guest!",
                buttonText: prevState.buttonText === "Login" ? "Logout" : "Login"
            }
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.greeting}{this.state.name}   </span>
                <button onClick={() => this.greetUser()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default NavBar;