import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {ActionsType,  PostsType} from "../../../Redux/State";


type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType  ) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElement = props.posts.map((p) =>
        <Post message={p.message} likesCount={p.likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch({type:"ADD-POST", newPostText: props.newPostText })
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text!})
    }

    return <div>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <button className={s.btn} onClick={addPost}>Add</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>

}

export default MyPosts