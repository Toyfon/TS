import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'HI! My name is Vova', likesCount: 11},
        {id: 2, message: 'I\'m waiting for you', likesCount: 12},
    ]

    let postElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return <div>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>

}

export default MyPosts