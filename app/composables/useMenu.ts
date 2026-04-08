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
          { id: 'm1', name: "main.bolonez_name", ingredients: "main.bolonez_desc", price: 580, availability: 'before_17', icon: 'Soup' },
          { id: 'm5', name: "main.arrabiata_name", ingredients: "main.arrabiata_desc", price: 540, icon: 'Soup' },
          { id: 'm6', name: "main.pesto_name", ingredients: "main.pesto_desc", price: 560, icon: 'Soup' }
        ],
        "grill_burger": [
          { id: 'm3', name: "main.kofte_name", ingredients: "main.kofte_desc", price: 650, tag: "signature", availability: 'after_17', icon: 'Beef' },
          { id: 'm4', name: "main.chef_burger_name", ingredients: "main.chef_burger_desc", price: 600, availability: 'after_17', icon: 'Pizza' }
        ],
        "sides": [
          { id: 'm7', name: "main.fries_name", ingredients: "main.fries_desc", price: 280, icon: 'Beef' }
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

  const currentMainCat = useState<string>('currentMainCat', () => "Kahvaltı");
  const currentSubCat = useState<string>('currentSubCat', () => "classic");
  const itemCounts = useState<Record<string, number>>('itemCounts', () => ({}));
  const progressiveRate = 0.50;

  const updateCount = (id: string, amount: number) => {
    const current = itemCounts.value[id] || 1;
    if (current + amount >= 1) {
      itemCounts.value[id] = current + amount;
    }
  };

  const getProgressivePrice = (basePrice: number, count: number) => {
    if (count <= 1) return basePrice;
    const total = basePrice + (basePrice * progressiveRate * (count - 1));
    return Math.round(total);
  };

  return { 
    menuData, 
    currentMainCat, 
    currentSubCat, 
    itemCounts, 
    updateCount, 
    progressiveRate,
    getProgressivePrice 
  };
}