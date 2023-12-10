import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { personCircle } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage id='main-content'> 
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
        <IonTitle id='titulo'>Minha Lista</IonTitle>
        <IonItem>
          <IonSelect className='btnOpcoes' aria-label="Últimos Adicionados" value="ultimos">
            <IonSelectOption id='opcoes' value="ultimos">Últimos Adicionados</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>
              <img src="series/casapapel.jpeg" alt="Money Heist" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Money Heist</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/Vincenzo_TV_series.jpg" alt="Vincenzo" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Vincenzo</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/91qChLy4T1L._AC_UF1000,1000_QL80_.jpg" alt="" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>The Originals</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/darkmaterials.jpeg" alt="His Dark Materials" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>His Dark Materials</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/100.jpeg" alt=" The 100" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>The 100</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/got.jpg" alt="Game of Thrones" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Game of Thrones</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/genv.jpeg" alt="Gen V" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Gen V</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img src="series/dark.jpeg" alt="Dark" />
            </IonCol>
            <IonCol>
              <p className='nomeSerie'>Dark</p>
            </IonCol>
            <IonCol>
              <img className='iconePlay' src="resources/PlayCircle.svg" alt="Teen Wolf" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
