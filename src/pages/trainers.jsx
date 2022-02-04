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
    IonBackButton,
    IonSegment
} from "@ionic/react";
import {FitnessTrainers} from "../database";
import { TrainerRow } from "../components/trainers/trainerRow";
import React, { Component } from "react";
import "../components/trainers/trainers.css";
import { TrainerProfileCard } from "../components/trainers/trainerProfileCard";

class Trainers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trainers : [],
            currentTrainer : {
                firstName: "",
                lastName: "",
                avatar: "",
                category: "",
                bio: "",
                rating: "",
                whatsapp :"",
                email : "",
                instagram : "",
                selected : ""
            }
        }
    }

    // store trainer data onMount
    componentDidMount() {
        this.setState({ 
            trainers : this.state.trainers.concat(FitnessTrainers)
        })  
        console.log(this.state.trainers)
    } 

   render() {
        // state stored in variables
        let trainers = this.state.trainers;
        let currentUser = this.state.currentTrainer;

        // handle selected profile
        const handleSelect = (trainer , uid) => {
            
        }

        // display all trainer profiles
        const displayTrainers = trainers.map((trainer, key) => {
            let uid = trainer.uid
            return (
                <>
                    <TrainerRow
                        key={trainer.uid} 
                        avatar={trainer.avatar}
                        firstName={trainer.firstName}
                        handleSelect={() => handleSelect(trainer , uid)}
                    />
                </>
            )
        });

        // display selected user
        const displayCurrentTrainer = trainers.filter(trainer => { 
            if (trainer.selected) {return trainer}
        }).map((trainer) => {
            return(
                <TrainerProfileCard 
                    avatar={trainer.avatar}
                    firstName={trainer.firstName}
                    lastName={trainer.lastName}
                    category={trainer.category}
                    bio={trainer.bio}
                    whatsapp={trainer.whatsapp}
                    email={trainer.email}
                    instagram={trainer.instagram}
                />
            )
        });

        return (
            <IonApp>
                <IonPage>
                    <IonHeader className="ion-border">
                        <IonToolbar>
                            <IonRow>
                                <IonTitle>Trainers</IonTitle>
                            </IonRow>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonSegment scrollable>
                            {displayTrainers}
                        </IonSegment>   
                        {displayCurrentTrainer}
                         
                    </IonContent>
                </IonPage>
            </IonApp>
        );
   }
}

export {Trainers};