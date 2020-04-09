import React,  {Component} from 'react'
import axios from 'axios'

//Functional component can not use lifecycle hooks
class Home extends Component {
    //Good time to get an external data is uing hte lifecyle hook when componenet did mount
    
    state ={
        posts: []
    }
    componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        const { posts }= this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className = "post card" key={post.id}>
                        <div className="card content">
                          <span className="card-title">{post.title}</span>  
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