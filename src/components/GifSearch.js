import React, {Component} from 'react'

class GifSearch extends Component {
    state = {
        text: ""
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={(event) => this.props.handleQuery(event, this.state.text)}>
                <input type="text" onChange={this.handleChange} value={this.state.text}></input>
                <input type="submit" value="Search"></input>
            </form>
        )
    }
}

export default GifSearch