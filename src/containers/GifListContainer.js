import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


const baseurl = "http://api.giphy.com/v1/gifs/search?"
const api_key = "dc6zaTOxFJmzC"
const api_url = `${baseurl}&api_key=${api_key}&limit=3`

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount(){
    }

    search = searchTerm => {
        fetch(api_url+"&q="+searchTerm)
            .then(resp => resp.json())
            .then(({data}) => {
                this.setState({
                    gifs: data.map( gif => ({ url: gif.images.original.url }) )
                })
            })
    }

    render (){
        return <div>GifListContainer
            <GifList gifs={this.state.gifs} />
            <GifSearch search={this.search} />
        </div>
    }
}