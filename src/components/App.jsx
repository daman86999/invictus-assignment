import React from "react";
import "./App.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: null, isSubmitted: false, content: null };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.number);
        this.setState({ isSubmitted: true });
        fetch(
            `https://raw.githubusercontent.com/invictustech/test/main/README.md`
        )
            .then((res) => res.text())
            .then((text) => {
                console.log(text);
                this.setState({
                    content: text,
                });
            });
        
    };

    myChangeHandler = (event) => {
        this.setState({ number: event.target.value });
    };

    render() {
        let result = null;
        let freq = null;
        if (this.state.isSubmitted) {
            var cont = this.state.content;
            function wordFreq(string) {
                var words = string
                    .toString()
                    .replace(/[^a-zA-Z]/g, " ")
                    .split(" ");
                var freqMap = {};
                words.forEach((w) => {
                    if (!freqMap[w]) {
                        freqMap[w] = 0;
                    }
                    freqMap[w] += 1;
                });
                delete freqMap["n"];
                delete freqMap["s"];
                return freqMap;
            }

            freq = wordFreq(JSON.stringify(cont));

            console.log(freq);
            Object.entries(freq)
                .sort((a, b) => b[1] - a[1])
                .slice(1, Number(this.state.number) + 1)
                .forEach((w) => {
                    console.log(w[0] + "  =  " + w[1]);
                });

            result = (
                <div className="resultCard">
                    <table>
                        <thead>
                            <tr>
                                <th>Word</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                        <td></td>
                </tbody>
                    </table>
                </div>
            );
        }

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
                <div>{result}</div>
            </div>
        );
    }
}

export default App;
