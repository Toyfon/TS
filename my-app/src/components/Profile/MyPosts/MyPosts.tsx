import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {PostsType} from "../../../Redux/State";


type MyPostsPropsType ={
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    let postElement = props.posts.map((p) =>
        <Post message={p.message} likesCount={p.likesCount}/>)



    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let postMessage = newPostElement.current?.value
        props.addPost(postMessage!)
    }



    return <div>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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