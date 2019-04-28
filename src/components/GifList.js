import React, {Component} from 'react'

class GifList extends Component {

    render() {
        return(
            <ul>
                {this.props.gifs.map(gif => (
                    <li> <img alt="" src={gif}></img></li>
                ))}
                
            </ul>
        )
    }
}

export default GifList