import React from 'react'

export default class GifSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      searchQuery: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.search(this.state.searchQuery)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.searchQuery} onChange={this.handleOnChange}/>
        </form>
      </div>
    )
  }
}
