import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType ={
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile = (props:ProfilePropsType) => {

    return (

        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    )
}


export default Profile