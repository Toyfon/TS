import s from './Dialogs.module.css'
// @ts-ignore
import {NavLink} from "react-router-dom";


type dialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: dialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}


export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Vova'},
        {id: 2, name: 'Tolya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Valya'},
        {id: 6, name: 'Sveta'},
        {id: 7, name: 'Tanya'}

    ]

    let messages = [
        {id: 1, message: 'HI'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]



    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}