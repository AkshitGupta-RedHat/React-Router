import React from 'react'

const Post = (props) => {
    console.log(props);
    return (
        <div className="container">
            <h3 className="center">Post</h3>
        <p>{props.match.params.post}</p>
        </div>
    )
}
export default Post