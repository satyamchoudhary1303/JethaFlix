import React from 'react'
import { Link } from 'react-router-dom';

export default function Maindisplay(props){
    const episodeUrl = `/${props.episode}`;
    return (
        <>
            <div id="episodehome">Episode: {props.episode}</div>
            <div id="about">{props.episodetype}</div>
            <Link to={episodeUrl} id="watch"><i id="watchicon" class="fa-solid fa-play"></i>Watch Now</Link>
        </>
    )
}