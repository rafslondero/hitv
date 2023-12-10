import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { personCircle } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='header'>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <img id='iconeH' src="/resources/hitv 2.svg" alt="hitv icon" />
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" className='person' icon={personCircle} ></IonIcon>
            </IonButton>
          </IonButtons>  
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

      <IonTitle id='titulo'>Downloads</IonTitle>

        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>
              <img src="series/Teen_Wolf.webp" alt="Teen Wolf" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Teen Wolf</p>
              <p className='desc'>T1 - E20</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Play" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/cobra.jpg" alt="Cobra Kai" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Cobra Kai</p>
              <p className='desc'>T3 - E10</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Play" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/91qChLy4T1L._AC_UF1000,1000_QL80_.jpg" alt="the originals" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>The Originals</p>
              <p className='desc'>T4 - E08</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Play" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/bridgerton.webp" alt="bridgerton" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Bridgerton</p>
              <p className='desc'>T2 - E05</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Play" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/Vincenzo_TV_series.jpg" alt="Vincenzo" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Vincenzo</p>
              <p className='desc'>T1 - E20</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Play" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/gossipgirl.webp" alt="Gossip Girl" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Gossip Girl</p>
              <p className='desc'>T8 - E02</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Play" />
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
