import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      gifs: []
    }
  }

  search = (searchQuery) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(({data}) => this.setState(
      {gifs: data.map(gif => ({url: gif.images.original.url}) )}
    ))
  }

  componentDidMount() {
    this.search()
  }

  render() {
    return (
    <div>
      <GifSearch search={this.search} />
      <GifList gifs={this.state.gifs} />
    </div>
  )
  }
}
