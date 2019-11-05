import React, {Component} from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
// import venndLogo from '../../Vennd-Logo.jpg';
import vennd from '../../Vennd-Screenshot.png';
import movieSaga from '../../Movie-Saga-Screenshot.png';
import javaHotel from '../../Java-Hotel-Screenshot.png';
import skillSense from '../../SkillSense-Screenshot.jpg';
import reactCalculator from '../../React-Calc-Screenshot.png';
import jqueryCalculator from '../../JQuery-Calc-Screenshot.png';

class Projects extends Component {
    render (){
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent">Venn'd Directory</Typography>
                    <Link className="myLinks" src="http://vennd-directory.herokuapp.com/#/home">Live</Link>
                    <Link className="myLinks" src="https://github.com/aholdahl/vennd-directory">Github</Link>
                    {/* Trying to tap into the github repo social preview */}
                    {/* <iframe id="ytplayer" type="text/html" title="Vennd Directory" width="375" height="210" src="https://github.com/aholdahl/vennd-directory"></iframe> */}
                    {/* <embed src="https://github.com/aholdahl/vennd-directory" width="600" height="400"/> */}
                    {/* <img src="https://github.com/aholdahl/vennd-directory"/> */}
                    {/* <div src="https://github.com/aholdahl/vennd-directory" style="background-image:url(https://github.com/aholdahl/vennd-directory)"></div> */}
                    <img className="myThumbnails myContent" src={vennd} alt="screenshot from Vennd app"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent">SkillSense</Typography>
                    <Link className="myLinks" src="https://skillsense.herokuapp.com/">Live</Link>
                    <Link className="myLinks" src="https://github.com/aholdahl/Skillsense">Github</Link>
                    <img className="myThumbnails myContent" src={skillSense} alt="screenshot from SkillSense app" />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent">React Calculator</Typography>
                    <Link className="myLinks" src="https://holdahl-react-calculator.herokuapp.com/">Live</Link>
                    <Link className="myLinks" src="https://github.com/aholdahl/react-calculator">Github</Link>
                    <img className="myThumbnails myContent" src={reactCalculator} alt="screenshot from React Calculator app" />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent">JQuery Calculator</Typography>
                    <Link className="myLinks" src="https://morning-retreat-92709.herokuapp.com/">Live</Link>
                    <Link className="myLinks" src="https://github.com/aholdahl/jquery-server-side-calculator">Github</Link>
                    <img className="myThumbnails myContent" src={jqueryCalculator} alt="screenshot from JQuery Calculator app" />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent">Movie Saga Cinema</Typography>
                    <Link className="myLinks" src="https://github.com/aholdahl/movie-sagas">Github</Link>
                    <img className="myThumbnails myContent" src={movieSaga} alt="screenshot from Movie Saga app"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent">Java Pet Hotel</Typography>
                    <Link className="myLinks" src="https://github.com/aholdahl/pet-hotel-server/settings">Github</Link>
                    <img className="myThumbnails myContent" src={javaHotel} alt="screenshot from Java Hotel app"/>
                </Grid>
            </Grid>
        )
    }
}

export default Projects;