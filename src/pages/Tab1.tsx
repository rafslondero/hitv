import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
import './Tab1.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';

const Tab1: React.FC = () => {
  const [nomesDasCategorias, setNomesDasCategorias] = useState<string[]>([]);
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=pt";

  const headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc3MzJhOTU3NzY5ZTQ3MzYyMmM5YWVmNTYwMjkyMyIsInN1YiI6IjY1NzBmNmI1ODU4Njc4MDEwYmY2YmZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GMgxb7t7oFSoKCX_ZwRaDvfrYBOCoUQqL9wT6G8-DQo"
  };

  const handleAPICall = async () => {
    try {
      const response = await axios.get(url, { headers });
      const nomesDasCategorias = [];
      const genres = response.data.genres;

      for (let i = 0; i < genres.length; i++) {
        nomesDasCategorias.push(genres[i].name);
      }

      setNomesDasCategorias(nomesDasCategorias);

      console.log(nomesDasCategorias);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Chama a função ao montar o componente
    handleAPICall();
  }, []); // O segundo parâmetro vazio faz com que o useEffect seja executado apenas uma vez, equivalente ao componentDidMount em classes


  return (
  <>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar color="white">
          <IonTitle id='menu-titulo'>Generos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        {nomesDasCategorias.length > 0 && (
          nomesDasCategorias.map((categoria, index) => (
            <IonItem key={index} className='itensMenu'>
              <IonLabel>{categoria}</IonLabel>
            </IonItem>
          ))
        )}
        </IonList>
      </IonContent>
    </IonMenu>

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
      <Swiper className='swiperPrincipal'
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img src="series/stranegr.jpeg" alt="Stranger Things Principal" />
          <button className='btnAssitir'>Assitir</button>
        </SwiperSlide>
        <SwiperSlide className='segundoslide'>
          <img src="series/alquimia2.webp" alt="Alquimia das Almas" />
          <button className='btnAssitir'>Assitir</button>
        </SwiperSlide>
        <SwiperSlide className='terceiroslide'>
          <img src="series/destined.webp" alt="Nosso Destino" />
          <button className='btnAssitir'>Assitir</button>
        </SwiperSlide>
        <SwiperSlide className='terceiroslide'>
          <img src="series/pretty-little-liars.jpeg" alt="Nosso Destino" />
          <button className='btnAssitir'>Assitir</button>
        </SwiperSlide>
      </Swiper>

      <p className='titulosSeries'>Assitindo</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img className='imganimacao' src="/series/thelastofus.jpeg" alt="The last of us" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="/series/alquimia2.webp" alt="Alquimia das Almas" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/stranegr.jpeg" alt="Stranger Things" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="/series/destined.webp" alt="Destined With You" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="/series/gambito.jpg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/darkmaterials.jpeg" alt="His Dark Materials" />
        </SwiperSlide>
      
      </Swiper>

      <p className='titulosSeries'>Adicionados Recentemente</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img className='imganimacao' src="series/loki.jpeg" alt="Cidade Invisível" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/got.jpg" alt="True Beauty" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/100.jpeg" alt="De volta aos 15" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/4268762.webp" alt="Tomorrow" />
        </SwiperSlide>  
        <SwiperSlide>
          <img className='imganimacao' src="series/rodatempo.webp" alt="Alquimia das Almas" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/darkmaterials.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/destined.webp" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="/series/gambito.jpg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/jardim.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
      </Swiper>

      <p className='titulosSeries'>Top 10 Brasil</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <div className='quadrado-no-canto'>
            <img src="series/cobra.jpg" alt="Cobra Kai" />
            <div className='quadrado-pequeno'>1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/casapapel.jpeg" alt="money Heist" /> 
            <div className='quadrado-pequeno'>2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/Teen_Wolf.webp" alt="" />
            <div className='quadrado-pequeno'>3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/lucifer.jpeg" alt="licifer" />
            <div className='quadrado-pequeno'>4</div>
          </div>
        </SwiperSlide>  
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/tomorrow.jpeg" alt="Tomorrow" />
            <div className='quadrado-pequeno'>5</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/4268762.webp" alt="pretendente Surpresa" />
            <div className='quadrado-pequeno'>6</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/American_Horror_Story_Season_4.jpg" alt="AHS" />
            <div className='quadrado-pequeno'>7</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/dark.jpeg" alt="Dark" />
            <div className='quadrado-pequeno'>8</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/alquimia2.webp" alt="Alquimia das almas" />
            <div className='quadrado-pequeno'>9</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='quadrado-no-canto'>
            <img src="series/100.jpeg" alt="The 100" />
            <div className='quadrado-pequeno'>10</div>
          </div>
        </SwiperSlide>
      </Swiper>

      <p className='titulosSeries'>Series Teen</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img className='imganimacao' src="series/genv.jpeg" alt="Cidade Invisível" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/gossipgirl.webp" alt="True Beauty" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/never.webp" alt="De volta aos 15" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/pretty-little-liars.jpeg" alt="Tomorrow" />
        </SwiperSlide>  
        <SwiperSlide>
          <img className='imganimacao' src="series/Teen_Wolf.webp" alt="Alquimia das Almas" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/cobra.jpg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/devoltaaos15.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/darkmaterials.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/anne.webp" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/truebeauty.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
      </Swiper>

      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab1;
