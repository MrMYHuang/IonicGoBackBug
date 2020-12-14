import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, withIonLifeCycle, IonTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { arrowBack } from 'ionicons/icons';

const famousJuans = [
  { title: '般若波羅蜜多心經', url: '/catalog/juan/T0251/1' },
  { title: '金剛般若波羅蜜經', url: '/catalog/juan/T0235/1' },
  { title: '佛說阿彌陀經', url: '/catalog/juan/T0366/1' },
  { title: '藥師琉璃光如來本願功德經', url: '/catalog/juan/T0450/1' },
  { title: '佛說觀彌勒菩薩上生兜率天經', url: '/catalog/juan/T0452/1' },
  { title: '地藏菩薩本願經', url: '/catalog/juan/T0412/1' },
  { title: '妙法蓮華經觀世音菩薩普門品經', url: '/catalog/juan/T0262/7' },
  { title: '大佛頂如來密因修證了義諸菩薩萬行首楞嚴經卷第一', url: '/catalog/juan/T0945/1' },
  { title: '佛說法滅盡經', url: '/catalog/juan/T0396/1' },
];

interface PageProps extends RouteComponentProps<{
  tab: string;
  type: string;
  path: string;
}> { }

interface State {
  topCatalogsType: number;
}

class _CatalogPage extends React.Component<PageProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      topCatalogsType: 0,
    };
  }

  ionViewWillEnter() {
    console.log(`${this.props.match.url} will enter.`);
    let topCatalogsType = -1;
    switch (this.props.match.url) {
      case '/catalog': topCatalogsType = 0; break;
      case '/catalog/volumes': topCatalogsType = 1; break;
      case '/catalog/famous': topCatalogsType = 2; break;
      default: topCatalogsType = -1; break;
    }
    this.setState({ topCatalogsType: topCatalogsType });
  }


  get isTopCatalog() {
    return ['/catalog'].reduce((prev, curr) => prev || curr === this.props.match.url, false);
  }

  getRows() {
    return <IonItem button={true} onClick={async event => {
      event.preventDefault();
      this.props.history.push('/catalog/famous');
    }}>
      <IonLabel className='ion-text-wrap uiFont'>
        First List Item
      </IonLabel>
    </IonItem>
  }

  getFamousJuanRows() {
    let rows = Array<object>();
    famousJuans.forEach(({ title, url }, i) => {
      rows.push(
        <IonItem key={`famousJuanItem_` + i} button={true} onClick={async event => {
          this.props.history.push(url);
        }}>
          <div tabIndex={0}></div>{/* Workaround for macOS Safari 14 bug. */}
          <IonLabel className='ion-text-wrap uiFont' key={`famousItemLabel_` + i}>
            {title}
          </IonLabel>
        </IonItem>
      );
    });
    return rows;
  }

  render() {

    let list = <IonList>
      {this.state.topCatalogsType === 2 ? this.getFamousJuanRows() : this.getRows()}
    </IonList>

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButton hidden={this.isTopCatalog} fill="clear" slot='start' onClick={e => {
              this.props.history.goBack();
            }}>
              <IonIcon icon={arrowBack} slot='icon-only' />
            </IonButton>
            
            <IonTitle style={{ fontSize: 'var(--ui-font-size)' }}>Catalog</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {list}
        </IonContent>
      </IonPage>
    );
  }
};

const CatalogPage = withIonLifeCycle(_CatalogPage);

export default CatalogPage;
