import {
    IonList,
    IonItem,
    IonLabel,
} from "@ionic/react";
import {
    BsChat,
    BsInfoCircle,
    BsClock,
    BsTable,
    BsNewspaper,
    BsPeople
} from "react-icons/bs";
import "./nav.css"

const NavOptions = () => {
    return (
        <>
            <IonList className="ion-padding">
                <IonItem lines="none">
                    <BsTable className="nav-icons" />
                    <IonLabel>Gym Log</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <BsClock className="nav-icons" />
                    <IonLabel >Log History</IonLabel>
                </IonItem >
                <IonItem lines="none">
                    <BsNewspaper className="nav-icons" />
                    <IonLabel>News Feed</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <BsPeople className="nav-icons" />
                    <IonLabel>Trainers</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <BsChat className="nav-icons" />
                    <IonLabel>Support</IonLabel>
                </IonItem>
                <IonItem lines="none">
                    <BsInfoCircle className="nav-icons" />
                    <IonLabel>About</IonLabel>
                </IonItem>
            </IonList>
        </>
    );
}

export default NavOptions;