import React,{useRef,useState,useEffect} from 'react'
import Video from './video';
import Maindisplay from './Maindisplay';
import back1 from '../images/back1.jpg'
import back2 from '../images/back2.jpg'
import back3 from '../images/back3.jpg'
import back4 from '../images/back4.jpg'
import back5 from '../images/back5.jpg'

export default function Home() {
    const best = useRef(null);
    const scrollexplore=()=>{
        best.current.scrollIntoView({ behavior: 'smooth' });
    }
    const divisions = [{episode:'01',episodetype:'Jethala in Jail',backgroundImage:back1}, {episode:'499', episodetype:'Daya Meri Rani',backgroundImage:back2}, {episode:'507', episodetype:'Meet Bagha',backgroundImage:back3}, {episode:'544', episodetype:'Surprise Party',backgroundImage:back4}, {episode:'578', episodetype:'Email Fraud',backgroundImage:back5}];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        document.title = 'JethaFlix';
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === divisions.length - 1 ? 0 : prevIndex + 1));
        }, 4000);
    
        return () => {
            clearInterval(interval);
        };
    }, []);

    const leftclick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? divisions.length - 1 : prevIndex - 1));
    };

    const rightclick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === divisions.length - 1 ? 0 : prevIndex + 1));
    };

    const currentDivision = divisions[currentIndex];
    const backgroundImageStyle = {
        '--background-image': `url(${currentDivision.backgroundImage})`,
    };

  return (
    <div id="home" style={backgroundImageStyle}>
        <div id="left" onClick={leftclick}>
            <div id="icon">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
        </div>
        <div id="right" onClick={rightclick}>
            <div id="icon">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        <button id="explore" onClick={scrollexplore}><i id="glassicon" class="fa-solid fa-glasses"></i>Explore</button>
        <div id="content">
            <Maindisplay episode={divisions[currentIndex].episode} episodetype={divisions[currentIndex].episodetype}></Maindisplay>
        </div>
        <div id="base"></div>
        <div id="homecontent">
            <h1 ref={best}>Best Picks For You</h1>
            <div id="containerBox">
                <Video episode={'149'} episodetype={'Kachi Keri ka Sarbat'} episodecontent={'Natu Kaka is upset as Jethalal does not bring Sarbat for him by taking 2 minutes'} numsuggest={'1'}></Video>
                <Video episode={'283'} episodetype={'Hotel Blue Queen'} episodecontent={'While going to meet Sundar in Blue Queen, a thief catches Jethalal and tries harassing him'} numsuggest={'1'}></Video>
                <Video episode={'434'} episodetype={'Hum hum hai bakki sab'} episodecontent={'Champaklal scolds Jethalal for dressing like a thief by calling him "Lottery ki ticket bechne wala"'} numsuggest={'1'}></Video>
                <Video episode={'487'} episodetype={'Rajnikant, Zeenat Aman'} episodecontent={'Jethalal and Daya wears old outfits and seeing them in old attire, Iyer make fun of Jethalal'} numsuggest={'1'}></Video>
                <Video episode={'499'} episodetype={'Daya Meri Rani'} episodecontent={'Jetha brings Gajra for Daya and while doing romance, Champak spots them'} numsuggest={'1'}></Video>
                <Video episode={'725'} episodetype={'Gabbar Jetha'} episodecontent={'Jethalal, Bagha and Nattu Kaka, all buys fridge for Babitaji, makes Jetha angry'} numsuggest={'1'}></Video>
                <Video episode={'733'} episodetype={'Maa ka Gyan'} episodecontent={'While Tappu is forcing Bapuji to wear sunglasses, Jetha sits on Champak`s glasses'} numsuggest={'1'}></Video>
                <Video episode={'785'} episodetype={'Tapu, mera Gaguda'} episodecontent={'Tapu whistles in Jetha`s ear and a banter starts between Jethalal and Daya menwhile Bhedi`s glasses brokes'} numsuggest={'1'}></Video>
                <Video episode={'799'} episodetype={'Mirchi Contest'} episodecontent={'As Iyer refused to eat Kacchhi food, Jethalal challenges Iyer to a chilli-eating contest.'} numsuggest={'1'}></Video>
                <Video episode={'1065'} episodetype={'Golgappa Jetha'} episodecontent={'While  talking with her Maa, Daya continuously roasts Jetha by calling him Golgappa and'} numsuggest={'1'}></Video>
                <Video episode={'1082'} episodetype={'Nimbu Pani, Pani Nimbe'} episodecontent={'Bhide buy nimbu`s from Navi Mumbai that fall`s in society compound'} numsuggest={'1'}></Video>
            </div>
            <h1>All Time Favorite</h1>
            <div id="containerBox">
                <Video episode={'55'} episodetype={'Sundar`s Scheme'} episodecontent={'Sundar brings a scheme for Gokuldham members to double their money but promptly disappears'} numsuggest={'7'}></Video>
                <Video episode={'122'} episodetype={'Chaggan and Maggan'} episodecontent={'Jethala make a big mistake by giving Chaggan`s money to Maggan, let`s fight Chaggan'} numsuggest={'4'}></Video>
                <Video episode={'153'} episodetype={'Robbery in Gokuldham'} episodecontent={'Jethalal has 25 lakhs,but robbery incidents tooks in gokuldham, society on alert'} numsuggest={'11'}></Video>
                <Video episode={'190'} episodetype={'Babitaji`s Bithday'} episodecontent={'Its Babita ji`s bithday but Iyer Idli has some different plans for Babita`s party'} numsuggest={'6'}></Video>
                <Video episode={'203'} episodetype={'London Trip'} episodecontent={'Jethalal got a chance to go to London for free, sponsored by Tony TV'} numsuggest={'7'}></Video>
                <Video episode={'300'} episodetype={'Gada`s to Ahmedabad'} episodecontent={'Gada`s are off to Ahmedabaad for Makarsankranti to meet Jeevdayaben'} numsuggest={4}></Video>
                <Video episode={'334'} episodetype={'Tempo Stucked'} episodecontent={'Gokuldham`s enterance is blocked due to tempo'} numsuggest={'7'}></Video>
                <Video episode={'382'} episodetype={'Water Cut'} episodecontent={'Sundar comes in Gokuldham with guests during water cut, Water Tanker called'} numsuggest={'7'}></Video>
                <Video episode={'410'} episodetype={'Jetha`s new Hairstyle'} episodecontent={'Sundar sent a shampoo which make Jethalal looks funny due to bad hairs shape'} numsuggest={'3'}></Video>
                <Video episode={'1089'} episodetype={'New member, Sheru'} episodecontent={'Will society accepts Sheru. Is this a new troublemaker for Jethalal'} numsuggest={'23'}></Video>
            </div>
            <h1>Must Watch</h1>
            <div id="containerBox">
                <Video episode={'71'} episodetype={'Tappu ki Shadi'} episodecontent={'Champaklal is in hurry for Tapu`s Marrige going against Jethalal and Gokuldham'} numsuggest={'12'}></Video>
                <Video episode={'148'} episodetype={'Kitty Party'} episodecontent={'Mahila Mandali plans kitty party, but party results in fight between Daya & Madhavi'} numsuggest={'5'}></Video>
                <Video episode={'166'} episodetype={'Popatlal coming back'} episodecontent={'New thunder storm in society, Dashing Problematic Patrakar Popatlal from Toofan Express'} numsuggest={'3'}></Video>
                <Video episode={'224'} episodetype={'Kerry in India'} episodecontent={'Kerry, Jethalal`s assumed sister, come to India to visit Gada`s'} numsuggest={'21'}></Video>
                <Video episode={'247'} episodetype={'Thief Sunder'} episodecontent={'Jethalal claims that Sunderlal stole Babitaji`s phone, Daya to leave for Ahemdabad'} numsuggest={'10'}></Video>
                <Video episode={'268'} episodetype={'Missing Gogi'} episodecontent={'Seeing Gogi to be upset from not appearing in TV ad, Tapu decides to hide him'} numsuggest={'5'}></Video>
                <Video episode={'554'} episodetype={'Mahashivratri Prasad'} episodecontent={'Enjoy Jethalal`s funny confessions about Babitaji after eating Bhaang'} numsuggest={'5'}></Video>
                <Video episode={'578'} episodetype={'Atmaram Millionanire'} episodecontent={'Bhide get`s a fraud e-mail offering 1cr, get stucked in trap and invests his savings'} numsuggest={'10'}></Video>
                <Video episode={'640'} episodetype={'Robbery at GE'} episodecontent={'Jethalal stucks in his Godowon`s bathroom but robbers have some other plans'} numsuggest={6}></Video>
                <Video episode={'790'} episodetype={'Off to Kutch'} episodecontent={'Gokuldham visits Kacch but problems are awaiting Gada`s at Kutch'} numsuggest={'10'}></Video>
            </div>
            <h1>Comedy with Villains</h1>
            <div id="containerBox">
                <Video episode={'46'} episodetype={'Sheikh`s offer'} episodecontent={'Jethalal stuck`s in Sheikh`s offer to sacrifise his kidney for Sheikh`s Brother'} numsuggest={'4'}></Video>
                <Video episode={'66'} episodetype={'Jethalal`s Affair'} episodecontent={'Sweety comes and makes everyone believe that Jethalal has an affair with her.'} numsuggest={'4'}></Video>
                <Video episode={'140'} episodetype={'Meenakshi Washing Powder'} episodecontent={'Irritated from hearing of Meenakshi, Takark scolded Meenakshi, a Don`s wife'} numsuggest={'3'}></Video>
                <Video episode={'413'} episodetype={'Bhootni in Gokuldham'} episodecontent={'Jethalal encounters a scary lady, later comes to society, everyone is scared'} numsuggest={'13'}></Video>
                <Video episode={'461'} episodetype={'Iyer Babita`s Anniversary'} episodecontent={'Iyer plans a surprise for Babita on their Anniversary, takes Purush Mandali to Jail'} numsuggest={'11'}></Video>
                <Video episode={'501'} episodetype={'Credit Card, CLK Bank'} episodecontent={'Mahila Mandal buys credit cards from Kutkutiya and falls in the trap'} numsuggest={'6'}></Video>
                <Video episode={'660'} episodetype={'Chaddi Gang'} episodecontent={'Chaddi Gang`s brother-in-law to kidnapp Daya as she`s the only evidance against them'} numsuggest={'18'}></Video>
                <Video episode={'764'} episodetype={'Mental Champak'} episodecontent={'Posters of Champaklal are all over the places mentioning that Champaklal is mad'} numsuggest={'10'}></Video>
                <Video episode={'1025'} episodetype={'Gulabo weds Sayeba'} episodecontent={'Gulabo from Mathkunda comes to Society claiming that she`s Jethalal`s first wife'} numsuggest={'32'}></Video>
                <Video episode={'1123'} episodetype={'Sangram`s Mango'} episodecontent={'Tapu Sena stoles Kacchi Kerry from Sangram Singh`s farmhouse'} numsuggest={'9'}></Video>
            </div>
            <h1>Old is Gold</h1>
            <div id="containerBox">
                <Video episode={'7'} episodetype={'Bapuji`s arrival'} episodecontent={'Bapuji, new in Mumbai, goes missing now what?'} numsuggest={'2'}></Video>
                <Video episode={'14'} episodetype={'Jethalal kidnapped'} episodecontent={'Jethala abducted by bunch of thugs. What awaits Jethalal`s fate now?'} numsuggest={'2'}></Video>
                <Video episode={'30'} episodetype={'Gobachari in the house'} episodecontent={'All men of the society meet Gobachari who brainwashes them against their wives'} numsuggest={'5'}></Video>
                <Video episode={'90'} episodetype={'Dr. Hathi Stuked'} episodecontent={'Dr. Hathi stucks in tempo after loosing or gaining 30 kg weight?'} numsuggest={'3'}></Video>
                <Video episode={'96'} episodetype={'Jethalal Fitness'} episodecontent={'Babita advises Jethalal to do a proper diet and exercise along with her in the early morning.'} numsuggest={'5'}></Video>
                <Video episode={'104'} episodetype={'Police Abduct Bapuji'} episodecontent={'Police abduct Bapuji mistaking him to be a theif in Adarsh Nagar Colony'} numsuggest={'3'}></Video>
                <Video episode={'115'} episodetype={'Crazy toothpaste'} episodecontent={'Bhide is struggling with the whistle stuck in his throat.'} numsuggest={'3'}></Video>
            </div>
            <h1>Gokuldham Premier League</h1>
            <div id="containerBox">
                <Video episode={'176'} episodetype={'GPL 1'} episodecontent={'Jabardast Jetha vs Bindass Bhide'} numsuggest={'8'}></Video>
                <Video episode={'389'} episodetype={'GPL 2'} episodecontent={'Daya Dandia Devil vs Blaster Babita'} numsuggest={'15'}></Video>
                <Video episode={'1426'} episodetype={'GPL 3'} episodecontent={'Jetha ke Jabaz vs Metha ke Maharathi'} numsuggest={'18'}></Video>
            </div>
            <h1>Navaratri</h1>
            <div id="containerBox">
                <Video episode={'238'} episodetype={'Navaratri with Kerry'} episodecontent={'Mahila mandali plans to buy Chaniya Choli from Ahemdabad along wiht Kerry'}  numsuggest={'3'}></Video>
                <Video episode={'455'} episodetype={'No Garba in Society'} episodecontent={'Daya will not play garba untill Jethalal`s deal got finalised'}  numsuggest={'6'}></Video>
                <Video episode={'707'} episodetype={'Falguni Pathak in Navratri'} episodecontent={'Navratri with Falguni Pathak and Ravan dehen by Jethalal on Dussehra'}  numsuggest={'12'}></Video>
                <Video episode={'974'} episodetype={'The Chineese Navratri'} episodecontent={'Due to Sundar`s mess Jethalal is in trouble will he can make it through theese all problems'}  numsuggest={'6'}></Video>
            </div>
            <h1>Holi</h1>
            <div id="containerBox">
                <Video episode={'118'} episodetype={'Sachin and Shahrukh'} episodecontent={'Sundar makes promises that Sachin and Shahrukh are comming to play Holi '}  numsuggest={'4'}></Video>
                <Video episode={'326'} episodetype={'Holi in Mahabaleshwar'} episodecontent={'Iyer have special plan for Jethalal will jethalal make it out or he will get stuck in Iyer`s paln'}  numsuggest={'6'}></Video>
                <Video episode={'566'} episodetype={'Lost Sundarala'} episodecontent={'Sundarla make some fraud and hiding himself in Gokuldham playing holi with other'} numsuggest={'9'}></Video>
                <Video episode={'820'} episodetype={'Holi in Krishna Kunj'} episodecontent={'Jethala plan for holi in Krishna Kunj but Bagha has make some troubles for Jethalal'}  numsuggest={'7'}></Video>
            </div>
            <h1>Ganeshutsav</h1>
            <div id="containerBox">
                <Video episode={'22'} episodetype={'First Ganeshutsav'} episodecontent={'Kids were excited as it is first ganesh utsav in society'}  numsuggest={'9'}></Video>
                <Video episode={'215'} episodetype={'Ganeshutsav in London'} episodecontent={'Jetha is in London but fun and laugh is in gokuldham as Kavi Sammelan is organised'}  numsuggest={'11'}></Video>
                <Video episode={'444'} episodetype={'Sangeet Samrath'} episodecontent={'Sangeet Samrath competition is organised and Tapu Sena has called none other than Anandji Virji Shah as the judge'}  numsuggest={'9'}></Video>
                <Video episode={'687'} episodetype={'3G, Ganpati Sponsor'} episodecontent={'3G come from America to sponsor Gokuldham`s ganpati idol as it`s his mannat'}  numsuggest={'9'}></Video>
                <Video episode={'968'} episodetype={'Group Antakshari'} episodecontent={'The grand Antakshari ka Mahayudh is organised with all the team leaders from Tapu Sena'} numsuggest={'6'}></Video>
            </div>
            <h1>New Year Celebration</h1>
            <div id="containerBox">
                <Video episode={'289'} episodetype={'Only men`s party'} episodecontent={'Jethala plans on new year`s eve all men party but Sundar has some other plans'}  numsuggest={'7'}></Video>
                <Video episode={'511'} episodetype={'No party in gokuldham'} episodecontent={'Bhide said no to party but purush mandali has got some party outside society'}  numsuggest={'3'}></Video>
                <Video episode={'1310'} episodetype={'Jalsa Party'} episodecontent={'Sundar`s big offer to Bhide for Jalsa Party on 31st'}  numsuggest={'9'}></Video>
                <Video episode={'1573'} episodetype={'High Champak Chacha'} episodecontent={'Purush mandali plans a secret party at Potatlal`s house, but Champak Chacha comes in'}  numsuggest={'10'}></Video>
            </div>
            <h1>Singing Competition, Antakshari</h1>
            <div id="containerBox">
                  <Video episode={'198'} episodetype={'Raat Jagran'} episodecontent={'Realization to purush mandali now see who wins the antakshari'}  numsuggest={'3'}></Video>         
                  <Video episode={'448'} episodetype={'Singing competition'} episodecontent={'All melodious folks compete in gokuldham antakshari competetion '}  numsuggest={'5'}></Video>       
                  <Video episode={'974'} episodetype={' Antakshari competition'} episodecontent={'Teams will play this competition antakshari ka mahayudh'}  numsuggest={'9'}></Video>
            </div>
            <h1>Society Gets New Colour, Construction, Renovation </h1>
            <div id="containerBox">
                <Video episode={'514'} episodetype={'Contractor Sakharam'} episodecontent={'Society gets new colour but is it too easy let`s find out'} numsuggest={'5'}></Video>
                <Video episode={'753'} episodetype={'D&T Construction'} episodecontent={'Sundarlal grabs the contract as weel as Jethalal`s tension increased'} numsuggest={'85'}></Video>
                <Video episode={'1758'} episodetype={'Society Renewation'} episodecontent={'This time new tension with renewation but fun also. Let`s see how they get their houses'} numsuggest={51}></Video>
            </div>
            <div id="footer">
                <div>Copyright © 2023 jethaflix.netlify.app | All Rights Reserved</div>
                <div>
                    <a href='https://github.com/satyamchoudhary1303' target='blank'><i class="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/satyam-choudhary-37b669210/' target='blank'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://www.instagram.com/_satyam.13/' target='blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.facebook.com/lokendra.choudhary.9083' target='blank'><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div> 
        </div>
    </div>
  )
}
