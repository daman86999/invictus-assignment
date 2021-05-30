import React from "react";
import "./css/App.css";
import DropFile from "./DropFile";
import Url from "./Url";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: null, isSubmitted: false };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.number);
        this.setState({ isSubmitted: true });
    };

    myChangeHandler = (event) => {
        this.setState({ isSubmitted:false});
        this.setState({ number: event.target.value });   
    };

    render() {
        const info = {
            number: this.state.number,
            status: this.state.isSubmitted,
        };

        return (
            <div className="container">
                <div className="formContainer">
                    <form onSubmit={this.mySubmitHandler}>
                        <h1>Welcome</h1>
                        <label htmlFor="number">Enter your number:</label>
                        <input
                            type="number"
                            id="number"
                            onChange={this.myChangeHandler}
                        />
                        <input type="submit" id="submit" />
                    </form>
                </div>
                <DropFile/>
                <Url num={info} />
            </div>
        );
    }
}

export default App;
