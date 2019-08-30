import React from 'react';
import style from './ProfileInfo.module.css';
import duenJonson from './../../../../src/assets/images/DuenJohnson.jpg'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <div>
                    <img className={style.imgProfileInfo} alt="someInformation" src='https://upload.wikimedia.org/wikipedia/commons/3/39/NYC_Top_of_the_Rock_Pano.jpg'/>
                </div>
            </div>
            <div className={style.avatarDescription}>
                <div className={style.descriptionBlock}>
                    {!props.profile
                        ?  ""
                        : <div>
                            <div>{props.profile.fullName}</div>
                            <img alt='UserPhoto' src={props.profile.photos.large ? props.profile.photos.large : duenJonson}/>
                            <ProfileStatus status={"Hello my friend!"}/>
                            <div>My status - {props.status}</div>
                          </div>}
                    <div>There may be Avatar + Description</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;