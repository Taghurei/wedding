<template>
  <div class="accommodations-container">
    <div :key="accomodation.key" v-for="accomodation in accomodations">
      <h1>{{ accomodation.title }}</h1>
      <div class="card-container">
        <div
          class="card"
          v-for="hotel in accomodation.hotels"
          :key="hotel.name"
        >
          <img
            v-if="hotel.photo"
            :src="hotel.photo"
            :alt="`Image of ${hotel.name}`"
            class="hotel-image"
          />
          <h4>{{ hotel.type }}</h4>
          <h2>{{ hotel.name }}</h2>

          <div class="card-details--text center">
            <a :href="hotel.website" target="_blank">Visiter le site web</a>
          </div>
          <div class="card-details--text">
            <span class="card--details--title">Adresse :</span>
            <a :href="getGoogleMapsLink(hotel.address)" target="_blank">
              {{ hotel.address }}
            </a>
          </div>


          <div class="card-details--text" v-if="hotel.phone">
            <span class="card--details--title">Téléphone :</span>
            <a :href="'tel:' + hotel.phone">{{ hotel.phone }}</a>
          </div>

          <div class="card-details--text" v-if="hotel.capacity">
            <span class="card--details--title">Capacité :</span>
            <span>{{ hotel.capacity }} personnes</span>
          </div>

          <div v-if="hotel.travelRailway" class="card-details--text">
            <span class="card--details--title">Distance de la gare :</span>
            <span>{{ hotel.travelRailway }}</span>
            <span v-if="hotel.railwayType === 'walking'">à pieds</span>
            <span v-else>en voiture</span>
          </div>

          <div v-if="hotel.travelRailway" class="card-details--text">
            <span class="card--details--title">Distance de Carsix :</span>
            <span>{{ hotel.travelChateau }} en voiture</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accommodations",
  data() {
    return {
      accomodations: [
        {
          key: 1,
          title: "Sélection d'hôtels",
          hotels: [
            {
              type: "Hôtel**",
              name: "Le Lion d'or",
              address: "48 Rue du Général de Gaulle 27300 Bernay",
              website: "https://www.hotel-liondor-bernay.com/",
              photo: "/hotels/liondor.png",
              phone: "02 32 43 12 06",
              note: "4/5",
              travelRailway: "5mn",
              railwayType: "walking",
              travelChateau: "12mn",
            },
            {
              type: "Hôtel***",
              name: "Le Moulin Fouret",
              address:
                "2 route du moulin fouret, 27300 Saint-Aubin-le-Vertueux",
              website: "https://www.lemoulinfouret.fr/",
              photo: "/hotels/moulin-fouret.png",
              travelRailway: "9mn",
              railwayType: "car",
              travelChateau: "16mn",
              phone: "07 81 68 42 07",
            },
            {
              type: "Hôtel***",
              name: "The Originals Bernay Acropole",
              address: "10 Rue Grande Malouve, 27300 Bernay",
              website: "https://www.hotel-acropole.com/",
              photo: "/hotels/acropole.png",
              note: "4,2/5",
              travelRailway: "7mn",
              railwayType: "car",
              travelChateau: "13mn",
              phone: "02 32 46 06 06",
            },
          ],
        },
        {
          key: 2,
          title: "Sélection de Maisons d'hôtes/Logements entiers",
          hotels: [
            {
              type: "Maison d'hôtes",
              name: "Maison du 18e ",
              address: "24 Hameau de Bigard, 27550 Nassandres",
              website:
                "https://www.booking.com/hotel/fr/maison-du-18e-avec-parc-arbore-a-45-min-de-la-mer-nassandres.en-gb.html",
              travelRailway: "18mn",
              railwayType: "car",
              travelChateau: "9mn",
              capacity: "6",
              photo: "/hotels/maison-du-18.png",
            },

            {
              type: "Maison d'hôtes",
              name: "La Chaumière Normandie",
              address: "16 Rue du Hautcourt, 27300 Carsix, France",
              website:
                "https://www.booking.com/hotel/fr/chaumiere-normandie.fr.html",
              travelRailway: "14mn",
              railwayType: "car",
              travelChateau: "4mn",
              capacity: "8",
              photo: "/hotels/chaumiere-normandie.png",
            },
            {
              type: "Maison d'hôtes",
              name: "La Chaumière",
              address: "10 Chemin du Montaigu, 27300 Saint-Léger-de-Rotes",
              website:
                "https://www.booking.com/hotel/fr/la-chaumiere-saint-leger-de-rotes.en-gb.html",

              travelRailway: "8mn",
              railwayType: "car",
              travelChateau: "7mn",
              capacity: "10",
              photo: "/hotels/chaumiere.png",
            },
            {
              type: "Maison d'hôtes",
              name: "Maison Clésanie",
              address: "5 Allée Maubuisson, 27470 Serquigny",
              website:
                "https://www.booking.com/hotel/fr/maison-clesanie.en-gb.html",
              travelRailway: "10mn",
              railwayType: "car",
              travelChateau: "10mn",
              capacity: "5",
              photo: "/hotels/clesanie.png",
            },
            {
              type: "Maison d'hôtes",
              name: "Une ambiance cosy",
              address: "4 Rue de la Forêt, 27550 Nassandres",
              website:
                "https://www.booking.com/hotel/fr/a-la-bon-eure.en-gb.html",
              travelRailway: "20mn",
              railwayType: "car",
              travelChateau: "9mn",
              capacity: "5",
              photo: "/hotels/ambiance-cosy.png",
            },

            {
              type: "Maison d'hôtes",
              name: "Modern Cosy",
              address: "34 Rue des Fontaines, 27300 Bernay",
              website: "https://www.booking.com/hotel/fr/modern-cosy.fr.html",
              travelRailway: "10mn",
              railwayType: "walking",
              travelChateau: "12mn",
              capacity: "4",
              photo: "/hotels/modern-cosy.png",
            },
            {
              type: "Maison d'hôtes",
              name: "Le petit Moulinsard",
              address: "28 Rue Bernard Gombert, 27300 Bernay",
              website:
                "https://www.booking.com/hotel/fr/quot-le-petit-moulinsard-quot.en-gb.html",
              travelRailway: "5mn",
              railwayType: "walking",
              travelChateau: "13mn",
              capacity: "3",
              photo: "/hotels/moulinsard.png",
            },
          ],
        },
        {
          key: 3,
          title: "Sélection de Chambres d'hôtes",
          hotels: [
            {
              type: "Chambres d'hôtes",
              name: "Le Manoir Des Chevaux Dorés",
              address: "35 Avenue de la Libération, 27110 Le Neubourg",
              website: "http://lemanoirdeschevauxdores.com/",
              photo: "/hotels/chevaux-dore.png",
              phone: "07 57 43 51 13",
              travelRailway: "30mn",
              railwayType: "car",
              travelChateau: "20mn",
              capacity: "18",
            },
            {
              type: "Chambre d'hôtes",
              name: "Maison 54",
              address: "54 Rue Leprévost de Beaumont, 27300 Bernay",
              website:
                "https://www.booking.com/hotel/fr/maison-54-bernay.fr.html",
              travelRailway: "4mn",
              railwayType: "car",
              travelChateau: "7mn",
              capacity: "2",
              photo: "/hotels/maison-54.png",
            },
            {
              type: "Chambres d'hôtes",
              name: "Le Clos des Lodges",
              address: "428, rue Saint Nicolas 27300 Bernay",
              website: "https://www.closdeslodges.fr/fr-FR/accueil",
              phone: "02 32 47 14 03",
              travelRailway: "10mn",
              railwayType: "walking",
              travelChateau: "15mn",
              capacity: "20",
              photo: "/hotels/clos-lodges.png",
            },
            {
              type: "Chambres d'hôtes",
              name: "Maison Léontine",
              address: "10 rue de la Sous-Préfecture 27300 Bernay",
              website: "https://maisonleontine.com",
              phone: "06 84 05 77 44",
              travelRailway: "7mn",
              railwayType: "walking",
              travelChateau: "12mn",
              capacity: "4",
              photo: "/hotels/leontine.png",
            },
            {
              type: "Chambre d'hôtes",
              name: "Cygne-Cycles",
              address: " 1 Chemin de Saint-Brice, 27550 Fontaine-la-Soret",
              website:
                "https://www.booking.com/hotel/fr/cygne-cycles-chambre-d-hotes.en-gb.html",
              travelRailway: "15mn",
              railwayType: "car",
              travelChateau: "5mn",
              capacity: "6",
              photo: "/hotels/cygne-cycle.png",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getGoogleMapsLink(address) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`;
    },
  },
};
</script>

<style scoped lang="scss">
.accommodations-container {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #d6a78422;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0px;
}

.card {
  border: 1px solid #ddd;
  background: white;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  @media (min-width: 800px) {
    width: 250px;
  }
  &--details {
    &--title {
      font-weight: 400;
      text-wrap: nowrap;
    }
  }
}

.card-details--text {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 300;
  flex-direction: row;
  align-items: flex-start;
  @media (min-width: 800px) {
    align-self: flex-start;
  }
  &.center {
    align-self: center;
  }
  a {
    color: #0056b3;
    text-decoration: none;
    font-size: 12px;
    font-weight: 300;
    text-align: left;
  }
}

.card p {
  margin: 0;
}

.card a {
  color: #0056b3;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}

.hotel-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
