import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../Redux/State";
import React from "react";


type ProfilePropsType ={
    profilePage: ProfilePageType
    dispatch: (action: ActionsType ) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (

        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    )
}


export default Profile