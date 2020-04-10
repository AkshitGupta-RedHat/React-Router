import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: null
    }

      componentDidMount() {
        // axios.get returns a promise
        let id = this.props.match.params.post;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                console.log(res);
                this.setState({
                    post: res.data
                })
                console.log(this.state.post.body)
            })
    }
    render() {
        const post  = this.state.post;
        const postList = post.length ? (
            post.map(post => {

                return (
                    <div className="post card" key={post.id}>
                        {/* Below div is not required */}
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
export default Post