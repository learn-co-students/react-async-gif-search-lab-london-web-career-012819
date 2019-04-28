import React, {Component, Fragment} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q='

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    getGifs = (query) => {
        fetch(URL + query)
            .then(resp => resp.json())
            .then(gifData => {
                const gifs = gifData.data.slice(0, 3).map(gif => gif.images.original.url)
                this.setState({gifs: gifs})
            })
    }

    handleQuery = (event, query) => {
        event.preventDefault()
        this.getGifs(query)
    }

    render() {
        return(
            <Fragment>
                <GifSearch handleQuery={this.handleQuery}/>
                <GifList gifs={this.state.gifs}/>
            </Fragment>
        )
    }

    componentDidMount() {
        this.getGifs("welcome")
    }
}

export default GifListContainer