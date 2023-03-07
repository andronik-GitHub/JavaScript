import React from "react";

class Ex9 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paragraph: "paragraph-2"
        };

        this.changeParagraph = this.changeParagraph.bind(this);
    }

    changeParagraph(event) {
        this.setState({
            paragraph: event.target.value
        });
    }

    render() {
        return(
            <div>
                <select onChange={ this.changeParagraph }>
                    <option value="paragraph-1">Paragraph 1</option>
                    <option value="paragraph-2" selected>Paragraph 2</option>
                    <option value="paragraph-3">Paragraph 3</option>
                </select>
                <div>
                    <p style={{
                        display: this.state.paragraph === "paragraph-1" ? "block" : "none"
                    }}>
                        Paragraph 1
                    </p>
                    <p style={{
                        display: this.state.paragraph === "paragraph-2" ? "block" : "none"
                    }}>
                        Paragraph 2
                    </p>
                    <p style={{
                        display: this.state.paragraph === "paragraph-3" ? "block" : "none"
                    }}>
                        Paragraph 3
                    </p>
                </div>
            </div>
        );
    }
}

export default Ex9;