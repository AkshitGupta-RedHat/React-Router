import React, { Component } from 'react'
import {connect} from 'react-redux'


class Post extends Component {
    render() {
        console.log(this.props);
       const post  = this.props.post ? (
            <div className="post">
                {/* Below div is not required */}
                <h4 className="center">{this.props.post.title}</h4>>
                <p>{this.props.post.body}</p>
            </div>
            
        ) : (
                <div className="center">No posts here</div>
            )
        return (
            <div className="container">
            {/* Below div is not required */}
                {post}
            </div>
       
        )
    }

}
// ownProps contains the id of the post so that we can find the dat corresponding to it
const mapStateToProps = (state, ownProps) => {
   
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id === id )
    }
}
export default connect(mapStateToProps)(Post)