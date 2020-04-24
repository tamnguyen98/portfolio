import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', height:"1000px", margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h3 className="importance-bold landing-self-name"><i>Tam Nguyen's</i></h3>
                        <h1 className="importance-title" style={{fontSize:"9vw", marginTop:"-7%"}}>Portfolio / SS20</h1>
                        <div className="landing-desc">
                            <h2 className="importance-bold" style={{fontSize:"2vw"}}>JUNIOR DEVELOPER FROM <i>WASHINGTON STATE UNIVERSITY</i>&nbsp;
                            WITH A DEGREE
                            <br/>IN <i>COMPUTER SCIENCE</i>
                            <br/>WHOSE PASSION 
                            <br/>FOR PROGRAMMING.</h2>
                        </div>
                    </Cell>
                    <Cell col={12} className="landing-connect">
                        <address>
                            <i><h2 className="importance-bold" style={{fontSize:"1vw"}}>
                                CONNECT WITH ME<br/>
                                T.NGUYEN098@YAHOO.COM</h2></i>
                            <a href="https://www.linkedin.com/in/tam-nguyen-638871142/" target="_blank" className="connect-icons fa fa-linkedin-square"/>
                            <a href="https://github.com/tamnguyen98" target="_blank" className="connect-icons fa fa-github-square"/>
                            <a href="mailto:t.nguyen098@yahoo.com" target="_blank" className="connect-icons fa fa-envelope"/>
                        </address>
                        <i class="fa fa-copyright" aria-hidden="true" style={{color:"white"}}>2020</i>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;