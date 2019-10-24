import React, {Component} from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
// import venndLogo from '../../Vennd-Logo.jpg';
import vennd from '../../Vennd-Screenshot.png';
import movieSaga from '../../Movie-Saga-Screenshot.png';
import javaHotel from '../../Java-Hotel-Screenshot.png';
import skillSense from '../../SkillSense-Screenshot.jpg';

class Projects extends Component {
    render (){
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent"><Link className="myLinks" src="https://github.com/aholdahl/vennd-directory">Venn'd Directory</Link></Typography>
                    {/* Trying to tap into the github repo social preview */}
                    {/* <iframe id="ytplayer" type="text/html" title="Vennd Directory" width="375" height="210" src="https://github.com/aholdahl/vennd-directory"></iframe> */}
                    {/* <embed src="https://github.com/aholdahl/vennd-directory" width="600" height="400"/> */}
                    {/* <img src="https://github.com/aholdahl/vennd-directory"/> */}
                    {/* <div src="https://github.com/aholdahl/vennd-directory" style="background-image:url(https://github.com/aholdahl/vennd-directory)"></div> */}
                    <img className="myThumbnails myContent" src={vennd} alt="screenshot from Vennd app"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent"><Link className="myLinks" src="https://github.com/aholdahl/movie-sagas">Movie Saga Cinema</Link></Typography>
                    <img className="myThumbnails myContent" src={movieSaga} alt="screenshot from Movie Saga app"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent"><Link className="myLinks" src="https://github.com/aholdahl/pet-hotel-server/settings">Java Pet Hotel</Link></Typography>
                    <img className="myThumbnails myContent" src={javaHotel} alt="screenshot from Java Hotel app"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Typography variant="h6" className="myContent"><Link className="myLinks" src="https://github.com/aholdahl/Skillsense">SkillSense</Link></Typography>
                    <img className="myThumbnails myContent" src={skillSense} alt="screenshot from SkillSense app"/>
                </Grid>
            </Grid>
        )
    }
}

export default Projects;