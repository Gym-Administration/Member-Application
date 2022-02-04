import {
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItemSliding,
    IonItem,
    IonLabel,
    IonItemOption,
    IonItemOptions,
    IonContent,
    IonButton,
    IonListHeader,
    IonPage,
    IonMenu,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonChip,
    IonMenuButton,
    IonRow,
    IonCol,
    IonGrid,
    IonFooter,
    IonBackButton,
    IonSegment,
    IonAvatar,
    IonText,
    IonModal
} from "@ionic/react";
import {
    BsWhatsapp,
    BsTelephone,
    BsInstagram
} from "react-icons/bs";
import { useState } from "react";

const TrainerProfileCard = ({avatar , firstName , lastName , category , bio ,whatsapp , email , instagram}) => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false)
    }

    return (  
        <IonCard>
            <img src={avatar} />
            <IonCardHeader>
                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
                <IonRow>
                    <IonCardSubtitle>{category}</IonCardSubtitle>
                </IonRow>
            </IonCardHeader>
            <IonCardContent>
                <IonText>{bio}</IonText>
                <IonList lines="inset">
                {instagram !== "" &&
                    <IonItem>
                        <BsInstagram />
                        <IonLabel className="ion-margin">{instagram}</IonLabel>
                    </IonItem>}
                {whatsapp !== "" &&
                    <IonItem>
                        <BsWhatsapp />
                        <IonLabel className="ion-margin">{whatsapp}</IonLabel>
                    </IonItem>}
                {email !== "" &&
                    <IonItem>
                        <BsTelephone />
                        <IonLabel className="ion-margin">{email}</IonLabel>
                    </IonItem> }
            </IonList>
            </IonCardContent>
        </IonCard>
    );
}

export {TrainerProfileCard};