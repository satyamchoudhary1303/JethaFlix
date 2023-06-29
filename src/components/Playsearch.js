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
                        key: props.apikey,
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
    },[props.search,props.apikey]);

    return (
        <div id="playsearch">
            <div id='video'>
                <iframe id="episode" src={`https://www.youtube.com/embed/${video}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}