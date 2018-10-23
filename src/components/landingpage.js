import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class landingpage extends Component {
    render(){
        return(
           <div style={{ width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}> 
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnSx-SL1FNR52gIWYUDI7Rm74dPywgiNCymNLXU8s0FzaE0bc"
               alt="avatar"
               className="avatar-image"
               />
               <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>
               </div>    
            </Cell>
            </Grid>
           </div>    
        );
    }
}

export default landingpage;