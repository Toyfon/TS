import src from "*.jpg";

// @ts-ignore
let state = {
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
            {id: 3, message: 'How are you'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ]
    },

    siteBar: {
        friends: [
            {id: 1, name: 'Tolya'},
            {id: 2, name: 'Yura'},
            {id: 3, name: 'Leha'},
        ]
    }
}


export default state