import React from 'react'
import {Link} from 'react-router-dom';
import thumbnail from '../images/tmkoc.png'

export default function Suggest(props) {
  const episodeUrl = `/${props.numfirst}/${props.numsuggest}/${props.num}`;
  const containerClassName = props.isActive ? 'activeContainer' : 'Container';
  return (
    <>
      <Link to={episodeUrl} className={containerClassName}>
        <img id="episodeImg" src={thumbnail} alt="" width="201px" height="120px"/>
        <div id="episodenumber"><i id="watchicon" class="fa-solid fa-play"></i> Episode: {props.num}</div>
      </Link>
    </>
  )
}