const initState = {
    posts: [
        { "id": "1",
        "title": "aaa aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto" },
        { "id": "2",
        "title": "2 aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "2 quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto" },
        { "id": "3",
        "title": "3 aaa aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "3 quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto" }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
        let newState = state.posts.filter(post => {
            return  post.id !== action.id
        });
        return {
            // returning the state element
            ...state,
            //overring the posts 
           posts: newState
        }

    }

    
    return state;
}

export default rootReducer
