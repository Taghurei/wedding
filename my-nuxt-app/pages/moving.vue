<template>
  <div class="moving">
    <div class="transport">
      <h1 class="transport__title">Faciliter vos déplacements</h1>

      <!-- Section 1 : Venir à Bernay / Beaumont-Le-Roger -->
      <div class="transport__section">
        <h3 class="transport__section-title">
          Venir sur les lieux de célebration
        </h3>
        <div class="transport__options">
          <div class="transport__option">
            <h4 class="transport__option-title">🚆 En train</h4>
            <ul>
              <li>
                <a
                  @click="
                    openInTab(
                      'https://www.sncf-connect.com/train/horaires/paris/beaumont-le-roger'
                    )
                  "
                  class="transport__link"
                  >Horaires pour Beaumont-Le-Roger</a
                >
              </li>
              <li>
                <a
                  @click="
                    openInTab(
                      'https://www.sncf-connect.com/train/trajet/paris/bernay'
                    )
                  "
                  class="transport__link"
                >
                  Horaires pour Bernay
                </a>
              </li>
            </ul>
          </div>
          <div class="transport__option">
            <h4 class="transport__option-title">🛻 En voiture</h4>
            <ul>
              <li>
                <a
                  @click="
                    openInTab(
                      'https://www.google.com/maps/dir/Paris/%C3%89glise+Saint-Nicolas+de+Beaumont-le-Roger,+Rue+Saint-Nicolas,+Beaumont-le-Roger/@48.9405276,1.230649,10z/data=!4m14!4m13!1m5!1m1!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!2m2!1d2.3513765!2d48.8575475!1m5!1m1!1s0x47e10b805235eee7:0x955e57ea2c5d62ff!2m2!1d0.7781741!2d49.0815969!3e0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
                    )
                  "
                  class="transport__link"
                  >Itinéraire vers Beaumont-Le-Roger</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 2 : Se déplacer pendant le week-end -->
      <div class="transport__section">
        <h3 class="transport__section-title">
          Se déplacer pendant le week-end
        </h3>
        <div class="transport__options">
          <div class="transport__option">
            <h3 class="transport__option-title">🚗 Privilégier le covoiturage</h3>
            <p class="transport__text">
              Si vous hésitez à venir en train pour des raisons techniques,
              sachez que nous ferons tout notre possible pour que vous puissiez prendre les places de libres dans les voitures disponibles.
            </p>
          </div>
          <div class="transport__option">
            <h3 class="transport__option-title">🚕 Taxis disponibles</h3>
            <ul>
              <li>
                Taxi de Beaumont-Le-Roger :
                <a href="tel:0232452428">02 32 45 24 28</a>
              </li>
              <li>
                Taxi de Bernay : <a href="tel:0232441427">02 32 44 14 27</a> /
                <a href="tel:0603061037">06 03 06 10 37</a>
              </li>
            </ul>
          </div>
          <div class="transport__option">
            <h3 class="transport__option-title">
              🚘 Voitures de location (depuis Evreux)
            </h3>
            <ul>
              <li>
                <a
                  @click="
                    openInTab(
                      'https://www.sixt.fr/betafunnel/#/nearbybranches?zen_pu_location=dff7b81f-2717-44d9-92fd-59032b7f62e2&zen_do_location=dff7b81f-2717-44d9-92fd-59032b7f62e2&zen_pu_title=%C3%89vreux%2C%20France&zen_do_title=%C3%89vreux%2C%20France&zen_pu_time=2025-07-19T12%3A30&zen_do_time=2025-07-20T14%3A30&zen_pu_branch_id=GOOGLE_PLACES%3AChIJxamCaEJH4UcRGH8BvhXlLwc&zen_do_branch_id=GOOGLE_PLACES%3AChIJxamCaEJH4UcRGH8BvhXlLwc&zen_offer_matrix_id=cbe45c44-e713-4c08-a973-206ef175ac6d&zen_vehicle_type=car&zen_pickup_country_code=&zen_resident_country_required=false&zen_from_nearby_branches=true'
                    )
                  "
                  class="transport__link"
                  >Louer une voiture chez Sixt</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="transport__section">
        <h3 class="transport__section-title">❓ Autres informations</h3>
        <div class="transport__options">
          <div class="transport__option">
            <h3 class="transport__option-title">🅿️ Parking</h3>
            <p class="transport__text">
            <span class="transport__text--title">Cérémonie religieuse: </span> La ville de Beaumont-le-Roger à différents
            parking qui sont tous situés a moins de 5mn à pied de l'église
            <p class="transport__text">
              <span class="transport__text--title">Cocktail/Diner: </span>  Un parking est disponible sur le lieu de réception
          </p>
            </p>
          </div>
          <div class="transport__option">
            <h3 class="transport__option-title">🚌 Navettes</h3>
            <p class="transport__text">
              Des navettes sont prévues le samedi soir à partir de 23h pour vous
            aider à rentrer chez vous
          </p>
          </div>
    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Moving",
  methods: {
    openInTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.moving {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d6a78422;
  .transport {
    max-width: 800px;
    padding: 20px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 32px;
    &__title {
      font-family: "Great Vibes", sans-serif;
      font-size: 32px;
      margin: unset;
      color: #333;
      text-align: center;
    }

    &__section {
      padding: 16px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 12px;
      &-title {
        display: flex;
        align-self: center;
      }

    }

    &__options {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__option {
      flex: 1;
      min-width: 250px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      &-title {
        font-size: 14px;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          margin: 12px 0;

          a {
            color: #0056b3;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

    }
    &__text {
      &--title {
        font-weight: 500;
        text-decoration: underline;
      }
    }
    &__link {
      color: #0056b3;
      text-decoration: none;
      transition: color 0.2s ease;
      cursor: pointer;

      &:hover {
        color: #003f7f;
        text-decoration: underline;
      }
    }
  }
}
</style>
