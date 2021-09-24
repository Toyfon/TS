import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props:any) => {

    let postElement = props.posts.map((p: { message: string; likesCount: number; }) =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    return <div>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>message</textarea>
                </div>
                    <input className={s.btn} type="submit" value="Add"></input>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>

}

export default MyPosts