const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY ='UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'



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
    newMessageBody: string
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




export type ActionsType = ReturnType <typeof addPostCreator> | ReturnType <typeof updateNewPostTextCreator>
    | ReturnType <typeof updateNewMassageBodyCreator> | ReturnType <typeof sendMessageCreator >



export let addPostCreator = (newPostText: string) => ({type:ADD_POST} as const)
export let updateNewPostTextCreator = (text:string) => ({type:UPDATE_NEW_POST_TEXT, newText: text} as const)
export let updateNewMassageBodyCreator = (body:string) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body} as const )
export let sendMessageCreator = () => ({type:SEND_MESSAGE} as const)

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
            ],
            newMessageBody: " "
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: store.state.profilePage.newPostText,
                likesCount: 0
            };
            store.state.profilePage.posts.push(newPost)
            store.state.profilePage.newPostText = ''
            store.onChange()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
                store.state.profilePage.newPostText = action.newText;
                store.onChange();
            } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            store.state.dialogsPage.newMessageBody = action.body;
            store.onChange();
        } else if (action.type === SEND_MESSAGE) {
            let body = store.state.dialogsPage.newMessageBody;
            store.state.dialogsPage.newMessageBody = ''
            store.state.dialogsPage.messages.push({id: 8, message: body},)
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
