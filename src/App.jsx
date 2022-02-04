import {
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
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { GymLog } from "./pages/gymLog";
import {About } from "./pages/about"
import { LogHistory } from "./pages/logHistory";
import { Support } from "./pages/support"
import { Home } from "./pages/home"
import {Trainers} from "./pages/trainers"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/trainers" component={Trainers} />
                    <Route exact path="/gymlog" component={GymLog} />
                    <Route exact path="/loghistory" component={LogHistory} />
                    <Route exact path="/support" component={Support} />
                    <Route exact path="/about" component={About} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
