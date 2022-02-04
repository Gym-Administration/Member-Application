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
    IonChip,
    IonMenuButton,
    IonRow,
    IonCol,
    IonFooter,
    IonBackButton
} from "@ionic/react";

const LogHistory = () => {
    return (
        <IonApp>
            <IonPage>
                <IonHeader className="ion-border">
                    <IonToolbar >
                        <IonRow>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <IonBackButton  />
                            </span>
                            <IonTitle>History</IonTitle>
                        </IonRow>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                </IonContent>
            </IonPage>
    </IonApp>
    );
}

export {LogHistory};