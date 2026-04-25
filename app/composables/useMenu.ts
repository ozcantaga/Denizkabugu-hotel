export const useMenu = () => {
  const menuData: any = {
    "Kahvaltı": {
      translationKey: "breakfast",
      image: "/images/breakfast/breakfast.jpeg",
      icon: 'sunny',
      subs: {
        "classic": {
          image: "/images/breakfast/breakfast-v1.jpeg",
          position: 'center',
          items: [
            { id: 'k1', name: "breakfast.serpme_name", ingredients: "breakfast.serpme_desc", price: 1000, tag: "popular", icon: "flatware" },
            { id: 'k2', name: "breakfast.plain_omlet_name", ingredients: "breakfast.plain_omlet_desc", price: 350, icon: "egg" },
            { id: 'k3', name: "breakfast.herb_omlet_name", ingredients: "breakfast.herb_omlet_desc", price: 450, icon: "egg" },
            { id: 'k4', name: "breakfast.potato_omlet_name", ingredients: "breakfast.potato_omlet_desc", price: 450, icon: "egg" },
            { id: 'k5', name: "breakfast.menemen_name", ingredients: "breakfast.menemen_desc", price: 450, icon: "egg" }
          ]
        }
      }
    },
    "Hızlı Lezzetler": {
      translationKey: "snacks",
      image: "/images/snacks/snack-v1.jpg",
      icon: 'fastfood',
      subs: {
        "hots": {
          image: "/images/snacks/snack-v1.jpg",
          position: 'center',
          items: [
            { id: 's1', name: "snacks.mini_burger_name", ingredients: "snacks.mini_burger_desc", price:580, tag: "signature", icon: "Fastfood" },
            { id: 's2', name: "snacks.taco_name", ingredients: "snacks.taco_desc", price: 480, tag: "new", icon: "taco" },
            { id: 's3', name: "snacks.mozzarella_name", ingredients: "snacks.mozzarella_desc", price: 420, icon: "bakery_dining" },
            { id: 's4', name: "snacks.calamari_name", ingredients: "snacks.calamari_desc", price: 480, icon: "set_meal" },
            { id: 's5', name: "snacks.yogurt_fries_name", ingredients: "snacks.yogurt_fries_desc", price: 380, icon: "flatware" },
            { id: 's6', name: "snacks.jalapeno_bites_name", ingredients: "snacks.jalapeno_bites_desc", price: 420, icon: "lens" }
          ]
        }
      }
    },
    "Ana Yemekler": {
      translationKey: "main_courses",
      image: "/images/main/manti.webp",
      icon: 'skillet',
      subs: {
        "grill_burger": {
          image: "/images/main/manti.webp",
          position: 'center',
          items: [
            { id: 'm1', name: "main.anne_kofte_name", ingredients: "main.anne_kofte_desc", price: 850, tag: "signature",  icon: 'outdoor_grill' },
            { id: 'm2', name: "main.manti_name", ingredients: "main.manti_desc", price: 700,  icon: 'skillet' },
            { id: 'm3', name: "main.denizkabugu_burger_name", ingredients: "main.denizkabugu_burger_desc", price: 850, tag: "popular", icon: 'lunch_dining' }
          ]
        },
        "pastas": {
          image: "/images/main/pastas.webp",
          position: 'center',
          items: [
            { id: 'm4', name: "main.lemon_pasta_name", ingredients: "main.lemon_pasta_desc", price: 650, tag: "new", icon: 'dinner_dining' },
            { id: 'm5', name: "main.bolonez_name", ingredients: "main.bolonez_desc", price: 700,  icon: 'dinner_dining' },
            { id: 'm6', name: "main.arrabiata_name", ingredients: "main.arrabiata_desc", price: 600, icon: 'dinner_dining' }
          ]
        },
        "pizzas": {
          image: "/images/main/pizzas/pizza.webp",
          position: 'center',
          items: [
            { id: 'm7', name: "main.denizkabugu_pizza_name", ingredients: "main.denizkabugu_pizza_desc", price: 700, tag: "signature", icon: 'local_pizza' },
            { id: 'm8', name: "main.akdeniz_pizza_name", ingredients: "main.akdeniz_pizza_desc", price: 750,  icon: 'local_pizza' }
          ]
        }
      }
    },
    "Soft Drinks": {
      translationKey: "soft_drinks",
      image: "/images/softs/soft.webp",
      icon: 'local_bar',
      subs: {
        "cold_beverages": {
          image: "/images/softs/soft.webp",
          position: 'center',
          items: [
            { id: 'sd1', name: "soft.water_k", cl: "33 cl", price: 65, icon: 'water_drops' },
             { id: 'sd2', name: "soft.water_b", cl: "33 cl", price: 100, icon: 'water_drops' },
            { id: 'sd3', name: "soft.soda", cl: "20 cl", price: 85, icon: 'bubble_chart' },
            { id: 'sd4', name: "soft.cola", cl: "33 cl", price: 150, icon: 'water_medium' },
            { id: 'sd5', name: "soft.ice_tea", cl: "33 cl", price: 150, icon: 'glass_cup' },
            { id: 'sd6', name: "beverages.lemonade", cl: "30 cl", price: 260, tag: "popular", icon: 'water_drop' },
            { id: 'sd7', name: "beverages.tahiti_iced_tea", ingredients: "beverages.tahiti_desc", cl: "30 cl", price: 240, tag: "signature", icon: 'local_bar' },
            { id: 'sd8', name: "beverages.refresh_iced_tea", ingredients: "beverages.refresh_desc", cl: "30 cl", price: 240, icon: 'local_bar' }
          ]
        },
        "hot_beverages": {
          image: "/images/softs/coffe.webp",
          position: 'center',
          items: [
            { id: 'h1', name: "hot.turkish_coffee", price: 150, icon: 'coffee' },
            { id: 'h2', name: "hot.mastic_coffee", price: 150, icon: 'coffee' },
            { id: 'h3', name: "hot.filter_coffee", price: 180, icon: 'coffee_maker' },
            { id: 'h4', name: "hot.espresso", price: 200, icon: 'bolt' },
            { id: 'h5', name: "hot.americano", price: 200, icon: 'local_cafe' },
            { id: 'h6', name: "hot.latte", price: 200, icon: 'emoji_food_beverage' }
          ]
        }
      }
    },
    "Alkol": {
      translationKey: "alcohol",
      image: "/images/beers/beer.webp",
      icon: 'liquor',
      subs: {
        "beers": {
          image: "/images/beers/beer.webp",
          position: 'center',
          items: [
            { id: 'al1', name: "alcohol.carlsberg", cl: "33 cl", price: 280, icon: 'sports_bar' },
            { id: 'al2', name: "alcohol.tuborg", cl: "50 cl", price: 280, icon: 'sports_bar' },
            { id: 'al3', name: "alcohol.miller", cl: "33 cl", price: 300, icon: 'sports_bar' }
          ]
        },
        "wines": {
          image: "/images/wine/wine.webp",
          position: 'center',
          items: [
            { id: 'w1', name: "alcohol.red", cl: "18 cl / 75 cl", price: 390, bottlePrice: 1560, icon: "wine_bar" },
            { id: 'w3', name: "alcohol.white", cl: "18 cl / 75 cl", price: 390, bottlePrice: 1560, icon: "wine_bar" },
            { id: 'w5', name: "alcohol.ros", cl: "18 cl / 75 cl", price: 390, bottlePrice: 1560, icon: "wine_bar" }
          ]
        },
        "spirits": {
          image: "/images/visky/visky.webp",
          position: 'center',
          items: [
            { id: 'sp1', name: "alcohol.whisky_gin", cl: "4 cl / 70 cl", price: 700, bottlePrice: 6500, icon: "glass_cup" },
            { id: 'sp2', name: "alcohol.raki_70", cl: "4 cl", price: 350, bottlePrice: 3000, icon: "liquor" },
            
          ]
        }
      }
    }
  };

  const currentMainCat = useState<string>('currentMainCat', () => "Kahvaltı");
  const currentSubCat = useState<string>('currentSubCat', () => "classic");

  return { menuData, currentMainCat, currentSubCat };
}
