import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            userInfo: {
                name: "Dummydata",
                location: "Dummydata", 
                email: "Dummydata",

            }
        }
    }
  async  componentDidMount(){
        const data = await fetch("https://api.github.com/users/pratapm333");
       const json = await data.json();
       console.log("GITHUB data", json)

       this.setState({
        userInfo:json,
       })
    }

    componentDidUpdate(){
        console.log("Comp did update")
    }

    componentWillUnmount(){
        console.log("Comp did Unmount")
    }
    render(){

        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="columns-2xs">
                 <img src={avatar_url}></img> 
                 <div className="columns-2xs py-2 px-2" >
                <h1 className="font-bold">Name: {name}</h1>
                <h2 className="text-lg">Location: {location}</h2>
                </div>
            </div>
        )
    }
}

export default UserClass; 