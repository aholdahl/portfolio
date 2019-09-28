import React, { Component } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import Headshot from '../../Headshot.jpg';

class Home extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid container className="myHeader">
                    <Grid item xs={12} sm={2} >
                        <img className="myHeadshot" src={Headshot} />
                    </Grid>
                    <Grid item xs={12} sm={10} className="myDeclaration">
                        <Typography variant="h1">Allyson Holdahl</Typography>
                        <Typography variant="h3">Software Engineer</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} className="myTile">
                        <Typography variant="h3" className="subHeader">About</Typography>
                        <Typography className="myContent">Allyson is queen of the lizard people.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} className="myTile">
                        <Typography variant="h3" className="subHeader">Values</Typography>
                        <Typography className="myContent">Integrity - Diversity - Efficiency - Sustainability</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} className="myTile">
                        <Typography variant="h3" className="subHeader">Skills</Typography>
                        <Typography className="myContent">HTML - CSS - Javascript - JQuery - React - Redux - Java - PostgreSQL</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} className="myTile">
                        <Typography variant="h3" className="subHeader">Social Media</Typography>
                        <Typography className="myContent">
                        <Link href="allyson.holdahl@gmail.com" className="myLinks">Email</Link>
                        <br/>
                        <Link href="https://www.linkedin.com/in/allyson-holdahl/" className="myLinks">LinkedIn</Link>
                        <br />
                        <Link href="https://github.com/aholdahl" className="myLinks">Github</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} className="myTile">
                        <Typography variant="h3" className="subHeader">Deployed Projects</Typography>
                        <Typography className="myContent">Coming Soon!</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Home;