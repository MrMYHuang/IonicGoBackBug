import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, withIonLifeCycle } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
  dispatch: Function;
  fontSize: number;
}

interface State {
}

interface PageProps extends Props, RouteComponentProps<{
  tab: string;
  path: string;
}> { }

class _BookmarkPage extends React.Component<PageProps, State> {

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ fontSize: 'var(--ui-font-size)' }}>Bookmark</IonTitle>

          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button={true}>
              <IonLabel className='ion-text-wrap uiFont'>
                Bookmark
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  }
};


const BookmarkPage = withIonLifeCycle(_BookmarkPage);

export default BookmarkPage;
