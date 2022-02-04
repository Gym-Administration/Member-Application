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
    IonText,
    IonAvatar,
    IonCardSubtitle,
    IonCardTitle
} from "@ionic/react";
import {
    BsChat,
    BsInfoCircle,
    BsClock,
    BsTable,
    BsNewspaper,
    BsPeople,
    BsHeartFill,
    BsShare,
    BsLike
} from "react-icons/bs";
import "../newsfeed/newsFeed.css";

const FeedCard = ({ key, postTime, postHeader, postContent, postImage, postLikes }) => {

    // handle share button
    const handleShare = (e) => {
        e.preventDefault();

    }
    return (
        <IonList >
            <IonItem key={key} lines="none">
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>
                            {postTime} hours ago
                        </IonCardSubtitle>
                        <IonCardTitle>{postHeader}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>{postContent}</IonText>
                        {
                            postImage !== "" &&
                            <img
                                src={postImage}
                                alt="post image"
                                srcset=""
                            />
                        }
                        <IonRow>
                            {postLikes > 0
                                ? <IonButton color="danger"><BsHeartFill /></IonButton>
                                : (
                                    <IonButton
                                        color="light"
                                        onClick={() => handleShare}>
                                        <BsHeartFill />
                                    </IonButton>
                                )
                            }
                            <IonButton><BsShare /></IonButton>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </IonItem>
        </IonList>
    );
}

export default FeedCard;