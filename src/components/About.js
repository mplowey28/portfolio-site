import React from 'react';
import profilePhoto from '../assests/images/me.jpg'

const About  = () => {
    return ( 
        <div>
            <h1>About</h1>
            <img className='profilePhoto' src={profilePhoto} alt='profile'/>
            <p>
                I am an experienced Full Stack JavaScript Developer with a demonstrated history of working with Node.js, Express, and React. Before becoming a developer I worked as researcher and teacher who developed a strong interest in development through hobby coding and through my work as a researcher. I enjoy communicating technical concepts and developing apps and services that are both user-friendly and visually appealing. 
            </p>
        </div>
     );
}
 
export default About ;