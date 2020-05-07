import React from 'react';
import { Container, Row, Card, Button, CardGroup } from 'react-bootstrap';
import FadeInSection from './fadein';
import cImg from '../img/c_img.svg';
import pyImg from '../img/python_img.svg';
import reactImg from '../img/react_img.svg';
import javaImg from '../img/Java_img.svg';
import rubyImg from '../img/ruby_img.svg';

const Project = (props) => {
    return (
            <Card style={{width:"15rem"}} className="a-card" bg="custom" border="matching">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button href={props.link} target="_blank" variant="primary">Visit Repo</Button>
            </Card.Body>
            </Card>
    );
}

const Projects = () => {
    return (
        <>
        <FadeInSection>
            <div className="diagonalTop2 new-sect"/>
                <div className="diagonalContent">
                        <FadeInSection><h2 className="section-title">Some cool Projects</h2>
                        <hr className="section-hr"/></FadeInSection>
                    <Container fluid className="diagonalContent center">
                    <FadeInSection>
                    <CardGroup>
                        <Project
                            title="Philospher Dining Problem"
                            img={cImg}
                            desc="This program attempts to 'solve' the famous dining philosopher problem using c while avoiding deadlock."
                            link="https://github.com/tamnguyen98/C-Coding/tree/master/Threads/Dining_Philospher_Problem"/>
                        <Project
                            title="Threaded quicksort"
                            img={cImg}
                            desc="This program was made for a class assignment to demonstrate the speed when performing sorting using threads vs. no threads."
                            link="https://github.com/tamnguyen98/C-Coding/tree/master/Threads/Threaded-Quick-Sort"/>
                        <Project
                            title="Remote Host"
                            img={cImg}
                            desc="This was the final assignment for WSU CS 360 where the goal of it is (in a way) to act like a terminal-based FTP application."
                            link="https://github.com/tamnguyen98/C-Coding/tree/master/Protocols/(Final)Remote_Host"/>
                        <Project
                            title="Word Pairs Hashing"
                            img={cImg}
                            desc="A program targeted at the Linux platform which reads words from one or more files, and prints out a list of the most frequently occurring sequential pairs of words and the number of times they occurred, in decreasing order of occurrence."
                            link="https://github.com/tamnguyen98/C-Coding/tree/master/Other_Low_Level/Word-Pairs-Hashing"/>
                    </CardGroup>
                    </FadeInSection>
                    </Container>
                </div>
            <div className="diagonalBottom2"/>

            {/*                                                         PYTHON                                                       */}
            <Container fluid className="center">
                <FadeInSection>
                    <CardGroup>
                        <Project
                            title="CVS to SQL"
                            img={pyImg}
                            desc="This program takes a database csv (pre-given) file and parse all the tuples to be added to a MYSQL database via python."
                            link="https://github.com/tamnguyen98/Python-Coding/tree/master/Python-SQL-study"/>
                        <Project
                            title="Stock Market Prediction"
                            img={pyImg}
                            desc="A program made for prediction stock market prices using. This program was a pair programming project for my Machine Learning Class."
                            link="https://gitlab.encs.vancouver.wsu.edu/john.bunn/483-group/-/blob/master/project1/main.pdf"/>
                        <Project
                            title="VAL-Compression"
                            img={pyImg}
                            desc="Disregard the name, this program was made to learn more about VAL compression. Read a given data table, convert it to bitmap, and compress it with 32/64 bit VAL compression."
                            link="https://github.com/tamnguyen98/Python-Coding/tree/master/WAH-compression-study"/>
                        <Project
                            title="Shifts Logger"
                            img={pyImg}
                            desc="A small automation tool I made to log my part time job's shift via automation."
                            link="https://github.com/tamnguyen98/wsuv-time-logger"/>
                    </CardGroup> 
                </FadeInSection>
            </Container>
             <div className="diagonalTop2"/>
                <div className="diagonalContent center">
                <FadeInSection>
                    <CardGroup style={{width:"50%"}}>
                        <Project
                            title="Automata State Machine"
                            img={javaImg}
                            desc="A class project that takes in post-fixed regular expression and converted to an NFA"
                            link="https://github.com/tamnguyen98/Java-Coding/tree/master/Automata-State-Machine"/>
                        <Project
                            title="Registration Bot"
                            img={javaImg}
                            desc="A automation bot that register Clark College's students to their prefered class, since (at the time) class registration was a manual and competitve process."
                            link="https://github.com/tamnguyen98/Java-Coding/tree/master/Class-Signup-Bot"/>
                        <Project
                            title="Classic Tic-Tac-Toe"
                            img={javaImg}
                            desc="A terminal/cmd base classic game of Tic-Tac-Toe and connect four. Game includes a basic AI to play against."
                            link="https://github.com/tamnguyen98/Java-Coding/tree/master/Tic-Tac-Toe"/>
                    </CardGroup>
                </FadeInSection>
                </div>
            <div className="diagonalBottom2"/>
                <div className="center">
                <FadeInSection>
                    <CardGroup style={{width:"50%"}}>
                        <Project
                            title="Portfolio Website"
                            img={reactImg}
                            desc="This site was made with React.js and it's my first React project I've made."
                            link="https://tamnguyen98.github.io/"/>
                        <Project
                            title="Autolab (Capstone)"
                            img={rubyImg}
                            desc="My role during this Ruby on Rail project was code review, debug and maintain, implementing new UX features, and implementing/fixing setup script for a smooth development."
                            link="https://gitlab.encs.vancouver.wsu.edu/autolab-project/m4/Autolab"/>
                        <Project
                            title="LGD Professional Painting"
                            img={reactImg}
                            desc="A React static website I develope for a (my first) client."
                            link="https://lgdprofessionalpainting.expert/"/>
                    </CardGroup>
                </FadeInSection>
                </div>
        </FadeInSection>

        </>
    );
}

export default Projects