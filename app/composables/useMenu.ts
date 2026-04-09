// app/composables/useMenu.ts
export const useMenu = () => {
  const menuData: any = {
    "Kahvaltı": {
      translationKey: "breakfast",
      image: "/images/breakfast/breakfast-v1.jpg",
      icon: 'Coffee',
      subs: {
        "classic": [
          { id: 'k1', name: "breakfast.serpme_name", ingredients: "breakfast.serpme_desc", price: 1000, tag: "popular", icon: "Utensils" },
          { id: 'k2', name: "breakfast.omlet_name", ingredients: "breakfast.omlet_desc", price: 450, icon: "Egg" },
          { id: 'k3', name: "breakfast.menemen_name", ingredients: "breakfast.menemen_desc", price: 500, icon: "Flame" }
        ]
      }
    },
    "Hızlı Lezzetler": {
      translationKey: "snacks",
      image: "/images/snacks/snack-v1.jpg",
      icon: 'Pizza',
      subs: {
        "hots": [
          { id: 's1', name: "snacks.burger_name", ingredients: "snacks.burger_desc", price: 550, tag: "popular", icon: "Beef" },
          { id: 's2', name: "snacks.manti_name", ingredients: "snacks.manti_desc", price: 480, icon: "ChefHat" },
          { id: 's3', name: "snacks.mini_burger_name", ingredients: "snacks.mini_burger_desc", price: 600, tag: "signature", icon: "CircleDot" },
          { id: 's4', name: "snacks.taco_name", ingredients: "snacks.taco_desc", price: 520, tag: "new", icon: "ChefHat" }
        ],
        "salads": [
          { id: 'sl1', name: "salads.greek_name", ingredients: "salads.greek_desc", price: 380, tag: "popular", icon: "Leaf" },
          { id: 'sl2', name: "salads.coban_name", ingredients: "salads.coban_desc", price: 320, icon: "Leaf" },
          { id: 'sl3', name: "salads.special_name", ingredients: "salads.special_desc", price: 460, tag: "signature", icon: "ChefHat" }
        ]
      }
    },
    "Ana Yemekler": {
      translationKey: "main_courses",
      image: "/images/main/main-v1.jpg",
      icon: 'Utensils',
      subs: {
        "pastas": [
          { id: 'm1', name: "main.bolonez_name", availability: 'after_17', ingredients: "main.bolonez_desc", price: 580, icon: 'Soup' },
          { id: 'm5', name: "main.arrabiata_name",availability: 'after_17', ingredients: "main.arrabiata_desc", price: 540, icon: 'Soup' },
          { id: 'm6', name: "main.pesto_name",availability: 'after_17', ingredients: "main.pesto_desc", price: 560, icon: 'Soup' }
        ],
        "grill_burger": [
          { id: 'm3', name: "main.kofte_name", ingredients: "main.kofte_desc", price: 650, tag: "signature", availability: 'after_17', icon: 'Beef' },
          { id: 'm4', name: "main.chef_burger_name", ingredients: "main.chef_burger_desc", price: 600, availability: 'after_17', icon: 'Pizza' }
        ],
        "sides": [
          { id: 'm7', name: "main.fries_name",availability: 'after_17', ingredients: "main.fries_desc", price: 280, icon: 'Beef' }
        ]
      }
    },
    "Soft Drinks": {
      translationKey: "soft_drinks",
      image: "/images/soft-drinks/soft.jpg",
      icon: 'GlassWater',
      subs: {
        "cold_beverages": [
          { id: 'sd1', name: "soft.water", price: 65, icon: 'Droplets' },
          { id: 'sd2', name: "soft.soda", price: 85, icon: 'Sparkles' },
          { id: 'sd3', name: "soft.cola", price: 150, icon: 'GlassWater' },
          { id: 'sd4', name: "soft.ice_tea", price: 150, icon: 'IceTea' }
        ],
        "hot_beverages": [
  { id: 'h1', name: "hot.turkish_coffee", price: 150, icon: 'Coffee' },
  { id: 'h2', name: "hot.mastic_coffee", price: 150, icon: 'Coffee' },
  { id: 'h3', name: "hot.filter_coffee", price: 200, icon: 'Coffee' },
  { id: 'h4', name: "hot.espresso", price: 200, icon: 'Bean' },
  { id: 'h5', name: "hot.americano", price: 200, icon: 'Coffee' },
  { id: 'h6', name: "hot.latte", price: 200, icon: 'CupSoda' }
]
      }
    },
    "Alkol": {
      translationKey: "alcohol",
      image: "/images/cocktail/cocktail.jpg",
      icon: 'Martini',
      subs: {
        "beers": [
          { id: 'al1', name: "alcohol.carlsberg", price: 280, icon: 'Beer' },
          { id: 'al2', name: "alcohol.miller", price: 300, icon: 'Beer' },
          { id: 'al3', name: "alcohol.corona", price: 380, icon: 'Beer' }
        ],
        "whiskey": [
          { id: 'v1', name: "alcohol.jack_daniels", ingredients: "alcohol.jd_desc", price: 450, bottlePrice: 4200, icon: 'CupSoda' },
          { id: 'v2', name: "alcohol.chivas", ingredients: "alcohol.chivas_desc", price: 550, bottlePrice: 5000, tag: "popular", icon: 'CupSoda' },
          { id: 'v3', name: "alcohol.jameson", ingredients: "alcohol.jameson_desc", price: 400, bottlePrice: 3800, icon: 'CupSoda' }
        ],
        "raki": [
          { id: 'r1', name: "alcohol.raki_70", ingredients: "alcohol.raki_std_desc", price: 3200, tag: "popular", icon: 'GlassWater' },
          { id: 'r2', name: "alcohol.raki_35", price: 1850, icon: 'GlassWater' },
          { id: 'r3', name: "alcohol.raki_gobek", ingredients: "alcohol.raki_prem_desc", price: 3800, tag: "signature", icon: 'GlassWater' }
        ]
      }
    }
  };

  // State yönetimi (Sadece aktif kategoriler kaldı)
  const currentMainCat = useState<string>('currentMainCat', () => "Kahvaltı");
  const currentSubCat = useState<string>('currentSubCat', () => "classic");

  return { 
    menuData, 
    currentMainCat, 
    currentSubCat
  };
}