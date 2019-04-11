import React, {Component} from 'react';

class Artists extends Component { 
    render(){
const {name, images, followers, genres} = this.props.artist;
if(this.props.artist.followers === undefined) {
console.log(this.props.followers)
}
else{
    return (
        <div className="artist">
           <div>{name}</div>
            <div>{followers.total} Followers </div>
            <div>
                <img src={images[0].url} alt="artist-image" className="artist-img"/>
            </div>
            <div>
                {genres.map((genre, id) => {

                   genre = genre === genres[genres.length-1] ? `& ${genre}` : `${genre}, `;

                  return (
                      <span key={id}>{genre}</span>
                  )
                })}
            </div>
        </div>
    )
}

        return (
            <div>
              
            </div>
        )
    }
}

export default Artists;