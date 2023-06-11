import React from 'react'
import {Link} from 'react-router-dom';
import thumbnail from '../images/tmkoc.png'

export default function Suggest(props) {
  const episodeUrl = `/${props.numfirst}/${props.numsuggest}/${props.num}`;
  return (
    <>
    <Link to={episodeUrl} id="container">
      <img id="episodeImg" src={thumbnail} alt="" width="200px" height="120px"/>
      <div id="episodenumber">Episode: {props.num}</div>
    </Link>
    </>
  )
}