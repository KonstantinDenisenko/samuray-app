import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div>
                    <img className={style.imgProfileInfo} alt="someInformation" src='https://upload.wikimedia.org/wikipedia/commons/3/39/NYC_Top_of_the_Rock_Pano.jpg'/>
                </div>
            </div>
            <div>
                <div className={style.descriptionBlock}>ava + description</div>
            </div>
        </div>
    )
};

export default ProfileInfo;