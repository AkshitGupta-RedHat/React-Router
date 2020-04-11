import React,  {Component} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import eye from "./eye.jpg"
import './homeStyles.css'
//Functional component can not use lifecycle hooks
class Home extends Component {
    //Good time to get an external data is uing hte lifecyle hook when componenet did mount
    
    state ={
        posts: []
    }
    componentDidMount(){
            // axios.get returns a promise
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0,10)
                })
                console.log(res)
            })
       }
    render(){
        const { posts }= this.state;
        const postList = posts.length ? (
            posts.map(post => {

                return (                 
                    <div className = "post card" key={post.id}>
                    {/* Below div is not required */}
                    <img src={eye} alt="a pokeball"/>
                         <div className="card content">
                            <Link to = {'/post/'+ post.id}>
                               <span className="card-title red-text">{post.title}</span> 
                            </Link> 
                          <p>{post.body}</p>
                          </div>      
                    </div>
                )
            })
        ) : (
            <div className="center">No posts here</div>
        )
        return (
             <div className="container">
            <h2 className="center">Home</h2>
               {postList}
             </div>
        )
    }

}

export default Home