
import React from 'react';
import UserClass from './UserClass';

class About extends React.Component{

    render(){
        return (
            <div>
            <h1>About class Page</h1>
            <p>It's About page</p>

            <UserClass /> 
            </div>
        )
     }

}

export default About;