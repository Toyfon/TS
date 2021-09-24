import s from './Friends.module.css'
// @ts-ignore
import {Friend} from "./Friend/Friend";


 export const Friends = (props:any) => {

     let friendElement = props.friends.map((f: { name: string;}) => <Friend name={f.name}  />)

    return (
        <div>
        <h3 className={s.title}>Friends</h3>
        <div className={s.fr}>
            {friendElement}
        </div>
        </div>
    )
}

