import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>STACY</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} target = "_blank" rel="noopener noreferrer" >Contact Me</a></button>
                    &nbsp;
                    <button><a href={`${data.cv}`} target = "_blank" rel="noopener noreferrer" >Download CV</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;