import React, { Component } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import Headshot from '../../Headshot.jpg';
import Projects from '../Projects/Projects.jsx';

class Home extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid container className="myHeader">
                    <Grid item xs={12} md={2} >
                        <img className="myHeadshot" src={Headshot} />
                    </Grid>
                    <Grid item xs={12} md={10} className="myDeclaration">
                        <Typography variant="h1">Allyson Holdahl</Typography>
                        <Typography variant="h3">Software Engineer</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} className="myTile">
                        <Typography variant="h4" className="subHeader">About</Typography>
                        <Typography className="myContent">My journey into web development began in 2016 when I attended an HTML & CSS workshop at Prime Academy. Three years later, I began to pursue a career in software engineering. It's the perfect arena for me to do what I love professionally (process improvement and data visualization) and personally (aesthetics and empathy).</Typography>
                        <Typography className="myContent">When I'm not coding, you will likely find me either playing an RPG or making something for my next RenFest costume.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="myTile">
                        <Typography variant="h4" className="subHeader">Values</Typography>
                        <Typography className="myContent">Integrity - Diversity - Efficiency - Sustainability</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="myTile">
                        <Typography variant="h4" className="subHeader">Skills</Typography>
                        <Typography className="myContent">HTML - CSS - Bootstrap - Material UI - Javascript - JQuery - React - Redux - Java - PostgreSQL</Typography>
                        <Typography className="myContent">Redux Sagas - Ajax - Axios - Node - NPM - Express - PG - Gradle - Spring Boot - JDBC</Typography>
                        <Typography className="myContent">RESTful - Agile - Universal Design</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="myTile">
                        <Typography variant="h4" className="subHeader">Social Media</Typography>
                        <Typography className="myContent myLinks">
                        <Link href="allyson.holdahl@gmail.com" className="myLinks">Email</Link>
                        <> - </>
                        <Link href="https://www.linkedin.com/in/allyson-holdahl/" className="myLinks">LinkedIn</Link>
                        <> - </>
                        <Link href="https://github.com/aholdahl" className="myLinks">Github</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} className="myTile">
                        <Typography variant="h4" className="subHeader">Projects</Typography>
                        <Projects/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Home;