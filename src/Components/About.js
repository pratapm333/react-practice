
import React from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/userContext';

class About extends React.Component{

    render(){
        return (
            <div >
            <h1 className="">About class Page</h1>
           <div>
            loggedIn User : 
            <UserContext.Consumer>
                {({loggedInUser})=><h1 className='text-xl font-bold'> {loggedInUser}</h1>}
            </UserContext.Consumer>
           </div>

            <UserClass /> 
            </div>
        )
     }

}

export default About;