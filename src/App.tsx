import React from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookmark, library } from 'ionicons/icons';
import CatalogPage from './pages/CatalogPage';

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

/* Theme variables */
import './theme/variables.css';
import BookmarkPage from './pages/BookmarkPage';

export var serviceWorkCallbacks = {
  onSuccess: function (registration: ServiceWorkerRegistration) { },
  onUpdate: function (registration: ServiceWorkerRegistration) { },
};

interface Props {
}

interface PageProps extends RouteComponentProps<{
  tab: string;
  path: string;
}> { }

interface AppOrigProps extends Props, RouteComponentProps<{
  tab: string;
  path: string;
}> { }

interface State {
}

class _App extends React.Component<PageProps, State> {
  render() {
    return (
      <AppOrig {...this.props} />
    );
  }
}

class AppOrig extends React.Component<AppOrigProps, State> {
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet animated={false}>
              <Route path="/:tab(catalog)/:type(catalog|volumes|famous)?/:path?" render={(props: any) => <CatalogPage {...props} />} exact={true} />
              <Route path="/:tab(bookmarks)" render={(props: any) => <BookmarkPage {...props} />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="bookmarks" href="/bookmarks">
                <IonIcon icon={bookmark} />
              </IonTabButton>
              <IonTabButton tab="catalog" href="/catalog">
                <IonIcon icon={library} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
}

const App = withRouter(_App);

export default App;
