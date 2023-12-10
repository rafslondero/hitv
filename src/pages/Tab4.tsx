import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonSearchbar } from '@ionic/react';
import { personCircle, searchCircle } from 'ionicons/icons';
import './Tab4.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonHeader collapse="condense"></IonHeader>
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

      <IonSearchbar className='pesquisar' showClearButton="always" placeholder='Faça buscas por títulos'></IonSearchbar>

      <br></br>

      <Swiper className='swiper'
        spaceBetween={40}
        pagination={{ clickable: true }}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <button className='categorias'>Romance</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className='categorias'>Fantasia</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className='categorias'>Terror</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className='categorias'>Suspense</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className='categorias'>Mistério</button>
        </SwiperSlide>
        <SwiperSlide>
          <button className='categorias'>Ficção</button>
        </SwiperSlide>
      </Swiper>

      <p className='titulosSeries'>Ficção Científica</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img className='imganimacao' src="series/dark.jpeg" alt="Sweet Home" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/miroro.webp" alt="Supernatural" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao'  src="/series/thelastofus.jpeg" alt="The last of us" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/orphan.jpeg" alt="Cidade Invísivel" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/sweet.png" alt="The Originals" />
        </SwiperSlide>
      </Swiper>

      <p className='titulosSeries'>Romance</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img className='imganimacao' src="series/alquimia2.webp" alt="Alquimia das almas" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/never.webp" alt="Never Have I Ever" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/destined.webp" alt="Nosso destino" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/truebeauty.jpeg" alt="True Beauty" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/anne.webp" alt="Anne With an E" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/4268762.webp" alt="Bussines Proposal" />    
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/jardim.jpeg" alt="Jardim de meteóros" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/devoltaaos15.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="/series/gambito.jpg" alt="Gambito da Rainha" />
        </SwiperSlide>
      </Swiper>

      <p className='titulosSeries'>Fantasia</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img className='imganimacao' src="series/stranegr.jpeg" alt="Stranger Things" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/darkmaterials.jpeg" alt="Destined With You" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/rodatempo.webp" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/got.jpg" alt="The last of us" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/witcher.webp" alt="The last of us" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='imganimacao' src="/series/alquimia2.webp" alt="Alquimia das Almas" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/wandavision.webp" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/lucifer.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/100.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/cidadeinvi.jpeg" alt="Gambito da Rainha" />
        </SwiperSlide>
      </Swiper>

      <p className='titulosSeries'>Terror</p>

      <Swiper className='swiper'
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='primeiroslide'>
          <img className='imganimacao' src="series/American_Horror_Story_Season_4.jpg" alt="The last of us" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/haunting-of-hill-house-font.jpg" alt="Alquimia das Almas" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/supernatural.jpeg" alt="Stranger Things" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/sleep.webp" alt="Destined With You" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='imganimacao' src="series/thelastofus.jpeg" alt="Destined With You" />
        </SwiperSlide>
      </Swiper>

      </IonContent>
    </IonPage>

  );
};

export default Tab3;
function useState<T>(arg0: never[]): [any, any] {
  throw new Error('Function not implemented.');
}

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

