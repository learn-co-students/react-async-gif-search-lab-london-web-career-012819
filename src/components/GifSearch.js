import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.query}
              name="query" />
          </form>
      </div>
    )
  }

}

export default GifSearch
