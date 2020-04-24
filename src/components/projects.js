import React, { Component } from 'react';
import {  Grid, Cell/*, Card, CardTitle, CardText, CardActions, Button*/ } from 'react-mdl';
import { Card, Button } from 'react-bootstrap'
import iconc from '../icon-c.svg';
import iconpy from '../icon-py.svg';
import iconjav from '../icon-java.svg';
import iconreact from '../icon-react.svg';
import iconruby from '../icon-ruby.svg';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    retrieveCard(props) {
        return (
            <Cell col={3} style={{width:"13vw"}}>
                <div className="card-div">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.thumbnail} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                            <Button variant="outline-light" target="_blank" href={props.projectUrl}>Visit Repo</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Cell>
		);
    }

    render() {
        return (
        <>
            <div className="project-grid">
                <Grid className="project-grid">
                    <Cell col={12}><h1 class="project-section">C</h1></Cell>
                    <this.retrieveCard
                        title="Philospher Dining Problem"
                        thumbnail={iconc}
                        description="This program attempts to 'solve' the famous dining philosopher problem using c while avoiding deadlock. This approach is using mutex."
                        projectUrl="https://github.com/tamnguyen98/C-Coding/tree/master/Threads/Dining_Philospher_Problem"
                    />
                    <this.retrieveCard
                        title="Threaded quicksort"
                        thumbnail={iconc}
                        description="This program was made for a class assignment to demonstrate the speed when performing sorting using threads vs. no threads."
                        projectUrl="https://github.com/tamnguyen98/C-Coding/tree/master/Threads/Threaded-Quick-Sort"
                    />
                    <this.retrieveCard
                        title="Remote Host"
                        thumbnail={iconc}
                        description="This was the final assignment for WSU CS 360 where the goal of it is (in a way) to act like terminal based FTP application."
                        projectUrl="https://github.com/tamnguyen98/C-Coding/tree/master/Protocols/(Final)Remote_Host"
                    />
                    <this.retrieveCard
                        title="Word Pairs Hashing"
                        thumbnail={iconc}
                        description="A program (in C) targeted at the Linux platform which reads words from one or more files, and prints out a list of the most frequently occurring sequential pairs of words and the number of times they occurred, in decreasing order of occurrence."
                        projectUrl="https://github.com/tamnguyen98/C-Coding/tree/master/Other_Low_Level/Word-Pairs-Hashing"
                    />
                    {/* ========================================================================================  */}
                    <Cell col={12}><h1 class="project-section">Python</h1></Cell>
                    <this.retrieveCard
                        title="CVS to SQL"
                        thumbnail={iconpy}
                        description="This program takes a database csv (pre-given) file and parse all the tuples to be added to a MYSQL database via python."
                        projectUrl="https://github.com/tamnguyen98/Python-Coding/tree/master/Python-SQL-study"
                    />
                    <this.retrieveCard
                        title="Stock Market Prediction"
                        thumbnail={iconpy}
                        description="A program made for prediction stock market prices using. This program was a pair programming project for my Machine Learning Class."
                        projectUrl="https://gitlab.encs.vancouver.wsu.edu/john.bunn/483-group/-/blob/master/project1/main.pdf"
                    />
                    <this.retrieveCard
                        title="VAL-Compression"
                        thumbnail={iconpy}
                        description="Disregard the name, this program was made to learn more about VAL compression. Read a given data table, convert it to bitmap, and compress it with 32/64 bit VAL compression."
                        projectUrl="https://github.com/tamnguyen98/Python-Coding/tree/master/WAH-compression-study"
                    />
                    <this.retrieveCard
                        title="Shifts Logger"
                        thumbnail={iconpy}
                        description="A small automation tool I made to log my part time job's shift via automation."
                        projectUrl="https://github.com/tamnguyen98/wsuv-time-logger"
                    />
                    {/* ========================================================================================  */}
                    <Cell col={12}><h1 class="project-section">Java</h1></Cell>
                    <this.retrieveCard
                        title="Automata State Machine"
                        thumbnail={iconjav}
                        description="A class project that takes in post-fixed regular expression and converted to an NFA"
                        projectUrl="https://github.com/tamnguyen98/Java-Coding/tree/master/Automata-State-Machine"
                    />
                    <this.retrieveCard
                        title="Registration Bot"
                        thumbnail={iconjav}
                        description="A automation bot that register Clark College's students to their prefered class, since (at the time) class registration was a manual and competitve process."
                        projectUrl="https://github.com/tamnguyen98/Java-Coding/tree/master/Class-Signup-Bot"
                    />
                    <this.retrieveCard
                        title="Classic Tic-Tac-Toe"
                        thumbnail={iconjav}
                        description="A terminal/cmd base classic game of Tic-Tac-Toe and connect four. Game includes a basic AI to play against."
                        projectUrl="https://github.com/tamnguyen98/Java-Coding/tree/master/Tic-Tac-Toe"
                    />
                    {/* ========================================================================================  */}
                    <Cell col={12}><h1 class="project-section">Web Design</h1></Cell>
                    <this.retrieveCard
                        title="Portfolio Website"
                        thumbnail={iconreact}
                        description="This site was made with React.js and it's my first React project I've made."
                        projectUrl="/"
                    />
                    <this.retrieveCard
                        title="Autolab (Capstone)"
                        thumbnail={iconruby}
                        description="My role during this Ruby on Rail project was code review, debug and maintain, implementing new UX features, and implementing/fixing setup script for a smooth development."
                        projectUrl="https://gitlab.encs.vancouver.wsu.edu/autolab-project/m4/Autolab"
                    />
                </Grid>
            </div>
        </>
        )
    }
}

export default Projects;