import React, {Component} from 'react'

export default class GifSearch extends Component {

    state = {
        searchTerm: ""
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            searchTerm: ""
        }, this.props.search(this.state.searchTerm))
        
    }

    render (){
        return (<div>
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} value={this.state.searchTerm} />
            </form>
        </div>)
    }
}