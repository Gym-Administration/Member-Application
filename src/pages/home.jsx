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
} from "@ionic/react";
import {
    BsChat,
    BsInfoCircle,
    BsClock,
    BsTable,
    BsNewspaper,
    BsPeople
} from "react-icons/bs";
import {useState} from "react"
import Profile from "../components/navbar/Profile";
import NavOptions from "../components/navbar/NavOptions";
import { Posts } from "../database"
import "../components/navbar/nav.css";
import FeedCard from "../components/newsfeed/feedCard";

const Home = () => {

    // map posts
    const feedContent = Posts.map((post, key) => {
        return(
            <FeedCard
                key={post.postId}
                postTime={post.postTime}
                postHeader={post.postHeader}
                postContent={post.postContent}
                postImage={post.postImage}
                postLikes={post.likes}
            />
        )
    })

    return (
        <IonPage>
            <IonMenu side="start" menuId="menu" contentId="menu">
                <IonHeader>
                    <IonToolbar>
                        <Profile
                            userName="Mopholosi"
                            avatar="https://atlantablackstar.com/wp-content/uploads/2016/06/Ali-1.jpg"
                        />
                    </IonToolbar>
                </IonHeader>
                <IonContent id="menu">
                    <NavOptions />
                </IonContent>
            </IonMenu>
            <IonHeader className="ion-border">
                <IonToolbar >
                    <IonRow>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            <IonMenuButton menu="menu" title="menu" />
                        </span>
                        <IonTitle>News Feed</IonTitle>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent>                
                {feedContent}
            </IonContent>
        </IonPage>
    );
};

export {Home};