import {
    IonText,
    IonSegmentButton,
    IonAvatar
} from "@ionic/react";

const TrainerRow = ({avatar , key, firstName, handleSelect}) => {
    return(
        <IonSegmentButton onClick={handleSelect}>
            <IonAvatar key={key}>
                <img src={avatar} />
            </IonAvatar>
            <IonText color="">{firstName}</IonText>
        </IonSegmentButton>
    );
}

export {TrainerRow};