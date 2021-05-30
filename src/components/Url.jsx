import { Component } from "react";
import './css/file.css'
class Url extends Component {
    constructor(props) {
        super(props);
        this.state = { content: null };
    }

    fetchFileData = () => {
        fetch(
            `https://raw.githubusercontent.com/invictustech/test/main/README.md`
        )
            .then((res) => res.text())
            .then((text) => {
                this.setState({
                    content: text
                        .toString()
                        .replace(/[^a-zA-Z]/g, " ")
                        .split(" "),
                });
            });
        return this.state.content;
    };

    calculateFrequency = (words, s, n) => {
        if (s === true) {
            var freqMap = {};
            words.forEach((w) => {
                if (!freqMap[w]) {
                    freqMap[w] = 0;
                }
                freqMap[w] += 1;
            });

            //console.log(freq);
            const wordarr = Object.entries(freqMap)
                .sort((a, b) => b[1] - a[1])
                .slice(1, Number(n) + 1);

            return wordarr.map((words, index) => {
                return (
                    <tr key={index}>
                        <td>{words[0]}</td>
                        <td>{words[1]}</td>
                    </tr>
                );
            });
        }
    };

    componentDidMount() {
        this.fetchFileData();
    }

    render() {
        return (
            <div className="tableContainer">
                <table>
                    <thead>
                        <th>WORD</th>
                        <th>Count</th>
                    </thead>
                    <tbody>
                        {this.calculateFrequency(
                            this.state.content,
                            this.props.num.status,
                            this.props.num.number
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Url;;
