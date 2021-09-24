import s from './../Dialogs.module.css'
// @ts-ignore
import {NavLink} from "react-router-dom";


type dialogItemPropsType = {
    name: string
    id: number
}
 export const DialogItem = (props: dialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

