import React, {Component} from 'react';

class Tracks extends Component {

state = {
    audioPlaying: false,
    playingUrl: '',
    audio: ''
}

playAudio(previewUrl){
let audio = new Audio(previewUrl);
if(!this.state.audioPlaying){
    audio.play();
    this.setState({
     audioPlaying: true,
     playingUrl: previewUrl,
     audio
    })
}
else if(this.state.playingUrl===previewUrl){
    this.state.audio.pause();
    this.setState({
        audioPlaying: false
    })
}
else {
    this.state.audio.pause();
    audio.play();
    this.setState({
        audioPlaying: false,
        playingUrl: previewUrl,
        audio
    })
}
}

    render() {
        const { tracks } = this.props;
        console.log('TRACKS' , this.props.tracks);
        if(tracks === undefined) {
            console.log(tracks);
        }
        else {
            return (
                <div class="tracks-info">
                    {
                        tracks.map((track,t) => {
                        return (
                            <div key={t} className="tracks" onClick={() => {this.playAudio(track.preview_url)}}>
                             <img src={track.album.images[0].url} className="track-img" />
                             <div className="track-icon" >&#9654;</div>
                             <p className="track-name">{track.name}</p>
                             
                            </div>
                        )
                    })
                    }
                </div>
            )
        }
        return (
            <div>

            </div>
        )
    }
}

export default Tracks;