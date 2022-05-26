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
  prices: [[number, number, number], [number, number]];
}

export const iceCreams: IIceCream[] = [
  {
    title: "BELGIAN CHOCOLATE",
    id: 1,
    filters: ["Gelato"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/BelgianChocolate_1500x.png?v=1615891820",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "DARK CHOCOLATE SEA SALTED CARAMEL",
    id: 2,
    filters: ["Gelato"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/DarkChocSeaSaltedCaramel_1200x.png?v=1612875786",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },

  {
    title: "GREEN TEA MATCHA VEGAN AND SUGAR FREE",
    id: 3,
    filters: ["Vegan", "Sugar free"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Flavours-Greentea-vegan_1200x.png?v=1613555828",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "STRAWBERRY YOGURT SUGAR FREE",
    id: 4,
    filters: ["Frozen Yogurt", "Sugar free"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Strawberry_1200x.jpg?v=1607528593",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "COCONUT VEGAN AND SUGAR FREE",
    id: 5,
    filters: ["Vegan", "Sugar free"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Flavours-coconut-vegan_1200x.png?v=1613555646",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "DARK CHOCOLATE SORBET",
    id: 6,
    filters: ["Sorbet"],
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "MANGO SORBET",
    id: 7,
    filters: ["Sorbet"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Minus30-MangoGelatoScoopArtboard2copy_dcfb107b-27fa-4e10-b063-6d31f3a65a5a_1200x.jpg?v=1615558841",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "TIRAMISU",
    id: 8,
    filters: ["Gelato"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Tiramisu_1200x.jpg?v=1607528356",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "MINT CHOCOLATE CHIP",
    id: 9,
    filters: ["Sherbet"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/MintChocolateChip_1200x.png?v=1612875971",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
  {
    title: "BLOOD ORANGE",
    id: 10,
    filters: ["Sherbet"],
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1404/9984/products/Orange_1200x.jpg?v=1607527502",
    prices: [
      [100, 190, 270],
      [50, 20],
    ],
  },
];
