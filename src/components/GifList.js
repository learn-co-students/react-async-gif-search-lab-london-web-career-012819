import React from 'react'

export default class GifList extends React.Component {

  render() {
    return(
    <div>
      <ul>
        {this.props.gifs.map((gif, index) => <li> <img key={index}src={gif.url} alt='gif' width='300px'/></li>)}
      </ul>
    </div>
  )
  }
}
