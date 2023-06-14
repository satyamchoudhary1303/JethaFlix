import logo from '../images/Taarak_Mehta_ka_Ooltah_Chashmah_(TMKOC)_Logo.png';
import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Navlink from './Navlink';

export default function Navbar(){
    const [searchQuery, setSearchQuery] = useState('');
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            window.location.href = `/${searchQuery}`;
        }
    };

  return (
    <div>
        <nav id="navbar">
            <div id="logo">
                <Link to={'/'}><img src={logo} alt="Jethaji"/></Link>   
            </div>
            <ul id="navlist">
                <li id="navlistitems"><Link to={'/'} className="homelink">Home</Link></li>

                <li id="navlistitems"><button type="button" id="dropdownMenuButton" className="navlink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GPL</button>
                    <div id="morelist" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li id="morelistitems"><Navlink episodetype={'GPL 1'} episode={'176'} numsuggest={'8'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'GPL 2'} episode={'389'} numsuggest={'15'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'GPL 3'} episode={'1426'} numsuggest={'18'}></Navlink></li>
                    </div>
                </li>

                <li id="navlistitems"><button type="button" id="dropdownMenuButton" className="navlink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Navaratri</button>
                    <div id="morelist" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li id="morelistitems"><Navlink episodetype={'1st Navaratri'} episode={'40'} numsuggest={'5'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'2nd Navaratri'} episode={'238'} numsuggest={'3'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'3rd Navaratri'} episode={'445'} numsuggest={'6'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'4th Navaratri'} episode={'707'} numsuggest={'12'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'5th Navaratri'} episode={'974'} numsuggest={'6'}></Navlink></li>
                    </div>
                </li>

                <li id="navlistitems"><button type="button" id="dropdownMenuButton" className="navlink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Holi</button>
                    <div id="morelist" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li id="morelistitems"><Navlink episodetype={'1st Hoil'} episode={'118'} numsuggest={'4'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'2nd Hoil'} episode={'326'} numsuggest={'6'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'3rd Hoil'} episode={'566'} numsuggest={'9'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'4th Hoil'} episode={'820'} numsuggest={'7'}></Navlink></li>
                    </div>
                </li>

                <li id="navlistitems"><button type="button" id="dropdownMenuButton" className="navlink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ganeshutsav</button>
                    <div id="morelist" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li id="morelistitems"><Navlink episodetype={'1st GaneshUtsav'} episode={'22'} numsuggest={'9'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'2nd GaneshUtsav'} episode={'215'} numsuggest={'11'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'3rd GaneshUtsav'} episode={'444'} numsuggest={'9'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'4th GaneshUtsav'} episode={'687'} numsuggest={'9'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'5th GaneshUtsav'} episode={'968'} numsuggest={'6'}></Navlink></li>
                    </div>
                </li>

                <li id="navlistitems"><button type="button" id="dropdownMenuButton" className="navlink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New Year</button>
                    <div id="morelist" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li id="morelistitems"><Navlink episodetype={'New Year 2010'} episode={'289'} numsuggest={'6'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'New Year 2011'} episode={'511'} numsuggest={'3'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'New Year 2014'} episode={'1310'} numsuggest={'9'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'New Year 2015'} episode={'1573'} numsuggest={'10'}></Navlink></li>
                    </div>
                </li>

                <li id="navlistitems"><button type="button" id="dropdownMenuButton" className="navlink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More<i id="more" class={`fa solid fa-caret-down`}></i></button>
                    <div id="morelist" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li id="morelistitems"><Navlink episodetype={'Episode 01-100'} episode={'1'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 101-200'} episode={'101'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 201-300'} episode={'201'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 301-400'} episode={'301'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 401-500'} episode={'401'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 501-600'} episode={'501'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 601-700'} episode={'601'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 701-800'} episode={'701'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 801-900'} episode={'801'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 901-1000'} episode={'901'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 1001-1100'} episode={'1001'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 1101-1200'} episode={'1101'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 1201-1300'} episode={'1201'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 1301-1400'} episode={'1301'} numsuggest={'100'}></Navlink></li>
                        <li id="morelistitems"><Navlink episodetype={'Episode 1401-1500'} episode={'1401'} numsuggest={'100'}></Navlink></li>
                    </div>
                </li>
            </ul>

            <div id="navigate">
                <input spellCheck="false" type="text" id="search" placeholder="Search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyPress={handleKeyPress}/>
            </div>
        </nav>
    </div>
  )
}