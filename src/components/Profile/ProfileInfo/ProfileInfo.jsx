import React from 'react';
import style from './ProfileInfo.module.css';
import duenJonson from './../../../../src/assets/images/DuenJohnson.jpg'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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

                            <div>
                                <span>My status - </span>
                                <span style={{display: 'inline-block'}}>
                                    {props.status === ""
                                    ? <ProfileStatusWithHooks status="Click here to write status..." updateStatus={props.updateStatus}/>
                                    : <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>}
                                </span>
                            </div>
                          </div>}
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;