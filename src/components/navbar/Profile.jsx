import {
    IonRow,
    IonCol,
    IonText
} from "@ionic/react";
import "./nav.css"
import { ProfileImage } from "./ProfileImage";

const Profile = ({ avatar, userName }) => {
    return (
        <>
            <div className="profile-card" >
                <IonRow >
                   <ProfileImage avatar={avatar} />
                    <IonCol>
                        <div className="profile-details">
                            <p><strong>{userName}</strong><br /> <IonText color="medium">Edit profile</IonText></p>
                        </div>
                    </IonCol>
                </IonRow>
            </div>
        </>
    );
}

export default Profile