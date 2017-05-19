import React from 'react'
import store from '../store'
import Lyrics from '../components/Lyrics'
import { fetchLyrics } from '../action-creators/lyrics'

class LyricsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('~~~~ state inside handleSubmit: ', this.state);
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  render () {
    return <Lyrics
              text={this.state.text}
              setArtist={this.handleArtistInput}
              setSong={this.handleSongInput}
              artistQuery={this.state.artistQuery}
              songQuery={this.state.songQuery}
              handleSubmit={this.handleSubmit}
          />
  }
}

export default LyricsContainer;