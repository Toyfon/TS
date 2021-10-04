import {stringify} from "querystring";
import {rerenderEntireTree} from "../render";

export type FriendType = {
    id: number
    name: string
    avatar: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type FriendsBarType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendsBar: FriendsBarType
    addPost: (postMessage: string) => void
}


export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'HI! My name is Vova', likesCount: 11},
            {id: 2, message: 'I\'m waiting for you', likesCount: 12},
            {id: 3, message: 'Good luck and have fun!', likesCount: 35},
            {id: 4, message: 'Hey you!', likesCount: 24}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vova'},
            {id: 2, name: 'Tolya'},
            {id: 3, name: 'Petya'},
            {id: 4, name: 'Kostya'},
            {id: 5, name: 'Valya'},
            {id: 6, name: 'Sveta'},
            {id: 7, name: 'Tanya'}

        ],
        messages: [
            {id: 1, message: 'HI'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Ho.w are you'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
            {id: 7, message: 'Здарова'},
        ]
    },
    friendsBar: {
        friends: [
            {
                id: 1,
                name: 'Tolya',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU'
            },
            {
                id: 2,
                name: 'Yura',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU'
            },
            {
                id: 3,
                name: 'Leha',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU'
            },
            {
                id: 4,
                name: 'Ruslan',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU'
            },
            {
                id: 5,
                name: 'Kostya',
                avatar: 'https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg'
            },
        ]
    },
    addPost(postMessage: string) {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        };
        state.profilePage.posts.push(newPost)
        rerenderEntireTree(state)
    }
}


export default state
