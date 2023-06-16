import image from '../images/tmkoc.png';
import React from 'react'
import {Link} from 'react-router-dom';

export default function Video(props) {
  var episodeUrl = ''
  if(props.numsuggest === '1'){
    episodeUrl = `/${props.episode}`;
  }
  else{
    episodeUrl = `/${props.episode}/${props.numsuggest}/${props.episode}`;
  }
    return (
        <Link to={episodeUrl} className='Container'>
          <img id="episodeImg" src={image} alt="" width="200px" height="120px" />
          <div id="episodetype">{props.episodetype}</div>
          <div id="episodecontent">{props.episodecontent}</div>
        </Link>
  )
}