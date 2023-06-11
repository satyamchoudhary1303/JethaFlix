import React, { useState ,useEffect} from 'react';
import youtubeApi from './youtube';

export default function Playsearch(props) {
    const [video, setvideo] = useState('');
    useEffect(() => {
        const searchYouTube = async () => {
            try{
                const response = await youtubeApi.get("/search",{
                    params:{
                        q: "Tarak Mehta ka Ulta Chasma " + `${props.search}`,
                        maxResults:'01',
                    }
                });      
                if (response.data.items.length > 0) {
                    const firstVideoId = response.data.items[0].id.videoId;
                    setvideo(firstVideoId);
                }
                else {
                    console.log('No videos found');
                }
            } 
            catch (error) {
                console.error(error);
            }
        }
    searchYouTube();
    },[props.search]);

    return (
        <div id="playsearch">
            <div id='video'>
                {video.length>0 ? (<iframe id="episode" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>):(<p>No video found {props.search}</p>)}
            </div>
        </div>
    )
}