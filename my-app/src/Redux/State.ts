

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
    newPostText: string
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
}


export type StoreType = {
    state: RootStateType
    onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType  ) => void
}




export type ActionsType = ReturnType <typeof addPostActionCreator> | ReturnType <typeof updateNewPostTextActionCreator>



export let addPostActionCreator = (newPostText: string) => {
    return {
        type:"ADD-POST",
    } as const
}

export let updateNewPostTextActionCreator = (text:string) => {
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    } as const
}

export let store: StoreType = {

    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI! My name is Vova', likesCount: 11},
                {id: 2, message: 'I\'m waiting for you', likesCount: 12},
                {id: 3, message: 'Good luck and have fun!', likesCount: 35},
                {id: 4, message: 'Hey you!', likesCount: 24}
            ],
            newPostText: ' '
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
                    avatar: 'https://source.unsplash.com/weekly?user'
                },
                {
                    id: 2,
                    name: 'Yura',
                    avatar: 'https://source.unsplash.com/user/erondu/daily'
                },
                {
                    id: 3,
                    name: 'Leha',
                    avatar: 'https://source.unsplash.com/weekly?man'
                },
                {
                    id: 4,
                    name: 'Ruslan',
                    avatar: 'https://source.unsplash.com/weekly?man'
                },
                {
                    id: 5,
                    name: 'Kostya',
                    avatar: 'https://source.unsplash.com/weekly?man'
                },
            ]
        },
    },


    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: store.state.profilePage.newPostText,
                likesCount: 0
            };
            store.state.profilePage.posts.push(newPost)
            store.state.profilePage.newPostText = ''
            store.onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                store.state.profilePage.newPostText = action.newText;
                store.onChange();
            }

    },

    onChange() {
        console.log("State Changed")
    },

    subscribe(callback: () => void) {
        store.onChange = callback
    },

    getState() {
        return store.state
    }


}


export default store
