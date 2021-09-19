import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://img5.goodfon.ru/wallpaper/nbig/6/c2/osen-nebo-listia-colorful-iaponiia-japan-red-klen-gora-fud-2.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + desсription
            </div>
        </div>
    )
}

export default ProfileInfo