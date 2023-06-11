import React from 'react'
import {Link} from 'react-router-dom';

export default function Navlink(props) {
  const episodeUrl = `/${props.episode}/${props.numsuggest}/${props.episode}`;

    return (
        <Link className="morelink" to={episodeUrl}>{props.episodetype}</Link>
    )
}