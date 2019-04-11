import React, { Component } from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import Artists from './Artists';
import Tracks from './Tracks';

class App extends Component { 
state = {
  valuee : '',
  artist: {},
  tracks: []
}

searchArtist() {
  const BASE_URL = "https://spotify-api-wrapper.appspot.com";
  let FETCH_URL = `${BASE_URL}/artist/${this.state.valuee}`;
  fetch(FETCH_URL)
  .then(response => response.json())
  .then(json => {
    console.log('valuesss', json)
    const artist = json.artists.items[0];
    this.setState({
      artist
    })
    console.log('ARTISTSSS', this.state.artist);
  FETCH_URL = `${BASE_URL}/artist/${artist.id}/top-tracks`;
  fetch(FETCH_URL)
  .then(response => response.json())
  .then(json => {
    const tracks = json.tracks;
    this.setState({
      tracks
    })
  });
});
}

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>
          MUSIC MASTER
        </h2>
        <FormGroup>
          <InputGroup>
          <FormControl 
          placeholder="Search for an artist"
          type="text"
          onChange={event => this.setState({valuee: event.target.value})}
          />
          <Button onClick={() => this.searchArtist()} >
          Search
          </Button>
          </InputGroup>
        </FormGroup>
          <div>
          <Artists artist= {this.state.artist} />
          </div>
          <div>
            <Tracks tracks= {this.state.tracks} />
          </div>
        </div>
    )
}
}
export default App;
