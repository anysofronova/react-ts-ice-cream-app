interface IIceCream {
  title: string;
  id: number;
  filters: (
    | "Gelato"
    | "Sorbet"
    | "Sherbet"
    | "Frozen Yogurt"
    | "Sugar free"
    | "Vegan"
  )[];
  imgUrl?: string;
  iceCreamPrices: number[];
}

export const iceCreams: IIceCream[] = [
  {
    title: "BELGIAN CHOCOLATE",
    id: 1,
    filters: ["Gelato"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/BelgianChocolate_1500x.png?v=1615891820",
    iceCreamPrices: [1.25, 2.25, 3.15],
  },
  {
    title: "DARK CHOCOLATE SEA SALTED CARAMEL",
    id: 2,
    filters: ["Gelato"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/DarkChocSeaSaltedCaramel_1200x.png?v=1612875786",
    iceCreamPrices: [1.3, 2.5, 3.25],
  },
  {
    title: "GREEN TEA MATCHA VEGAN AND SUGAR FREE",
    id: 3,
    filters: ["Vegan", "Sugar free"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Flavours-Greentea-vegan_1200x.png?v=1613555828",
    iceCreamPrices: [1.46, 2.29, 3.25],
  },
  {
    title: "STRAWBERRY YOGURT SUGAR FREE",
    id: 4,
    filters: ["Frozen Yogurt", "Sugar free"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Strawberry_1200x.jpg?v=1607528593",
    iceCreamPrices: [1.26, 2.2, 3.15],
  },
  {
    title: "COCONUT VEGAN AND SUGAR FREE",
    id: 5,
    filters: ["Vegan", "Sugar free"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Flavours-coconut-vegan_1200x.png?v=1613555646",
    iceCreamPrices: [1.55, 2.75, 3.85],
  },
  {
    title: "DARK CHOCOLATE SORBET",
    id: 6,
    filters: ["Sorbet"],
    iceCreamPrices: [1.1, 2.05, 3],
  },
  {
    title: "MANGO SORBET",
    id: 7,
    filters: ["Sorbet"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Minus30-MangoGelatoScoopArtboard2copy_dcfb107b-27fa-4e10-b063-6d31f3a65a5a_1200x.jpg?v=1615558841",
    iceCreamPrices: [1.25, 2.25, 3.15],
  },
  {
    title: "TIRAMISU",
    id: 8,
    filters: ["Gelato"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Tiramisu_1200x.jpg?v=1607528356",
    iceCreamPrices: [1.65, 2.85, 3.95],
  },
  {
    title: "MINT CHOCOLATE CHIP",
    id: 9,
    filters: ["Sherbet"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/MintChocolateChip_1200x.png?v=1612875971",
    iceCreamPrices: [1.29, 2.29, 3.19],
  },
  {
    title: "BLOOD ORANGE",
    id: 10,
    filters: ["Sherbet"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Orange_1200x.jpg?v=1607527502",
    iceCreamPrices: [1.45, 2.15, 3.25],
  },
];
