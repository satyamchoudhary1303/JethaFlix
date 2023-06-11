import image from '../images/tmkoc.png';
import React from 'react'
import {Link} from 'react-router-dom';

export default function Video(props) {
    const episodeUrl = `/${props.episode}/${props.numsuggest}/${props.episode}`;

    return (
        <Link to={episodeUrl} id="container">
          <img id="episodeImg" src={image} alt="" width="200px" height="120px" />
          <div id="episodetype">{props.episodetype}</div>
          <div id="episodecontent">{props.episodecontent}</div>
        </Link>
  )
}