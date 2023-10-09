import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, 
  IonRouterOutlet, 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonLabel, 
  IonIcon, 
  IonHeader,
  IonToolbar,
  IonTitle,
  setupIonicReact 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { triangle, ellipse, square } from 'ionicons/icons'; 
import HomePage from './modules/HomePage';
import LibraryPage  from './modules/Library';
import RadioPage from './modules/Radio';
import SearchPage  from './modules/Search';
import { of } from 'rxjs';
import { isPlatform } from '@ionic/react';

import { delay } from 'rxjs/operators';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { SplashScreen } from '@capacitor/splash-screen';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const platform = isPlatform("android") ? "android" : isPlatform("ios") ? "ios" : "desktop";

  useEffect(() => {
    document.body.classList.add(platform);

    SplashScreen.hide({
        fadeOutDuration: 0
    });

    let splashTimer = of(true).pipe(delay(2000)).subscribe(() => {
      const splash = document.getElementById('splash');
      splash?.addEventListener('animationend', () => {
        splash.style.display = 'none';
      });
      document.body.classList.add("app-ready");
    });

    return () => {
      document.body.classList.remove(platform);
      splashTimer.unsubscribe();
      document.body.classList.remove("app-ready");
    }
}, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Ionic App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/tab1">
              <LibraryPage />
            </Route>
            <Route exact path="/tab2">
              <RadioPage />
            </Route>
            <Route exact path="/tab3">
              <SearchPage  />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Library</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Radio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={square} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
