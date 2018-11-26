import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FaLinkedinIn, FaGithub, FaMedium, FaCodepen } from 'react-icons/fa'; 

export class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            

            <div className="banner-text">
              <h1>Radhika Prajapati <br/>Front-end / UI Developer</h1>

              <p>HTML/CSS | Bootstrap | JavaScript | React | Angular | NodeJS | Express | MongoDB</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <FaGithub className='icons'/> 
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <FaLinkedinIn className='icons'/>
                </a>

                {/* Freecodecamp */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <FaMedium className='icons'/> 
                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <FaCodepen className='icons'/>
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

