import React, { useState ,useEffect} from 'react';
import Suggest from './Suggest';
import youtubeApi from './youtube';

export default function Play(props) {
    const {numfirst,numsuggest,num} = props; 
    const numfir = parseInt(numfirst,10);
    const numsug = parseInt(numsuggest,10);
    const numepi = parseInt(num,10);

    const [video, setvideo] = useState([]);
    useEffect(() => {
      const searchYouTube = async () => {
          try{
              const response = await youtubeApi.get("/search",{
                  params:{
                      q: "Tarak Mehta ka Ulta Chasma " + `${numepi}`,
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
  },[numepi]);

  return (
    <div id="play">
        <div id='video'>
          <iframe id="episode" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div id='containerBox'>
          {Array.from({ length: numsuggest }, (_, index) => (
            <Suggest num={numfir + index} numfirst={numfirst} numsuggest={numsuggest} isActive={numfir + index === parseInt(num, 10)}/>
          ))}
        </div>
    </div>
  )
}