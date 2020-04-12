import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    poststate = {
        post: null
    }

      componentDidMount() {
        // axios.get returns a promise
        let id = this.props.match.params.post_id;
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
     //   const post  = this.poststate.post;
        // const postList = post.length ? (
        //     post.map(post => {

        //         return (
        //             <div className="post card" key={post.id}>
        //                 {/* Below div is not required */}
        //                 <div className="card content">

        //                     <span className="card-title">{this.poststate.post.title}</span>

        //                     <p>{post.body}</p>
        //                 </div>
        //             </div>
        //         )
        //     })
        // ) : (
        //         <div className="center">No posts here</div>
        //     )
        return (
            <div className="post card">
            {/* Below div is not required */}
            <div className="card content">

                {/* <span className="card-title">{this.poststate.post}</span> */}

                {/* <p>{postList}</p> */}
            </div>
        </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    
}
export default Post