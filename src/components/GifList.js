import React from 'react'

const GifList = (props) => {
  return (
    <div>
          {props.gifs.map(gif => <img alt='gif' key={gif.url} src={gif.url} />)}
    </div>
  )
}

export default GifList
