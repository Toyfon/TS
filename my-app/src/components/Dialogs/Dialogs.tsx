import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import state from "../../Redux/State";


export const Dialogs = (props:any) => {


    let dialogsElements = props.state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m: { message: string; }) => <Message message={m.message}/>)


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