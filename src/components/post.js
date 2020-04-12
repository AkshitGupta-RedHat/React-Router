import React, { Component } from 'react'
import {connect} from 'react-redux'


class Post extends Component {
     handleClick = () =>{
    //passing the id of the post
    this.props.deletePost(this.props.post.id);
    // pushing the url so that it retuns back to home page
    this.props.history.push('/');
}
    render() {
        console.log(this.props);
       const post  = this.props.post ? (
            <div className="post">
                {/* Below div is not required */}
                <h4 className="center">{this.props.post.title}</h4>>
                <p>{this.props.post.body}</p>
                {/* Clicking the buttn invoke the handleClick function */}
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>  
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
// function to delete the posts
// whenever we are creating a function outside the component then it becomes props(properties) of the component and is assecceing be props
// in this function we are returning a method or function which is expecting a id and then dispatching which a function of redux
const mapDeleteToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch({type:'DELETE_POST', id: id}) }
    }
}
export default connect(mapStateToProps, mapDeleteToProps)(Post)