import React from 'react';
import Header from './Header';
import Card from './components/Card';

const Home: React.FC = () => {
  const cardsData = [
    {
      title: 'Lo Splendore del Teatro di Eraclea Minoa',
      description: 'Scopri il teatro: testimonianza della cultura greca in Sicilia',
      imageUrl: 'https://livingagrigento.it/e/pp/be/upload/img/0ZogS_Eraclea_Minoa_teatro_precedente_struttura_protettiva.jpg',
      date: '2022-10-10',
    },
    {
      title: 'Il Quartiere Ellenistico di Eraclea Minoa',
      description: 'Scopri l\'affascinante quartiere ellenistico di Eraclea Minoa',
      imageUrl: 'https://projetcefel.eu/wp-content/uploads/2022/04/sito_eraclea_02.jpg',
      date: '2022-11-15',
    },
    {
      title: 'Maschere Antiche: Volti del Teatro Greco',
      description: 'Esplora le affascinanti maschere teatrali dell\'antica Eraclea Minoa',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/1c/19/29/archaeological-museum.jpg',
      date: '2022-11-15',
    },
    {
      title: 'Vasi Greci di Eraclea Minoa: Arte Antica Svelata',
      description: 'Esplora l\'eleganza e la storia dei vasi greci antichi',
      imageUrl: 'https://www.balarm.it/cache/8/6/b/f/e/86bfea9ce1cb202f65de836ecc13c9affb1a4ff6-eraclea-minoa-antiquarium-jpg-59395-1678294410.jpeg',
      date: '2022-11-15',
    },
    {
      title: 'Eraclea Minoa, la scogliera e le spiagge di Capo Bianco',
      description: 'Scogliera bianca e panorami mozzafiato sulla costa agrigentina',
      imageUrl: 'https://ripost.it/wp-content/uploads/2017/07/Capo-Bianco-sentiero.jpg',
      date: '2022-11-15',
    },
    {
      title: 'Riserva naturale della foce del fiume Platani',
      description: 'Esplora la bellezza unica della riserva con flora e fauna ricca',
      imageUrl: 'https://www.cattolicaeracleaonline.it/wp-content/uploads/2018/07/foce-750x410.jpg',
      date: '2022-11-15',
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center gap-4 p-3 bg-stone-900">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
