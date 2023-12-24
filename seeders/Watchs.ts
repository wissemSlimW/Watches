import { prisma } from "@/config/db"
import { IMAGES } from "@/constants/images";

const watchesList: {
  name: string;
  price: number;
  oldPrice?: number;
  isNew: boolean;
  onSale: boolean;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  inStock: boolean;
  onlineOnly: boolean;
}[] = [
    {
      name: "Noremous Maliduar Delerisque",
      price: 1099,
      isNew: true,
      onSale: false,
      stars: 0,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Metropolis Daciniado Darturien",
      price: 2009,
      isNew: true,
      onSale: false,
      stars: 3,
      inStock: true,
      onlineOnly: false,
    },
    {
      name: "Dulla Minterdum Diverra An Dacony Maliduet",
      price: 3809,
      oldPrice: 5087,
      isNew: false,
      onSale: false,
      stars: 4,
      inStock: false,
      onlineOnly: false,
    },
    {
      name: "Daciniado Metropolis Darturien",
      price: 545,
      oldPrice: 1087,
      isNew: true,
      onSale: true,
      stars: 5,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Cosmo De Milancelos Gempus",
      price: 499,
      isNew: true,
      onSale: true,
      stars: 5,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Cosmo De Milancelos Gempus",
      price: 499,
      isNew: true,
      onSale: true,
      stars: 5,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Maliduar A Delerisque Loremous",
      price: 205,
      oldPrice: 305,
      isNew: true,
      onSale: true,
      stars: 2,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Noremous Maliduar Delerisque",
      price: 401,
      oldPrice: 505,
      isNew: true,
      onSale: false,
      stars: 4,
      inStock: true,
      onlineOnly: false,
    },
    {
      name: "Gempus Milancelos De Cosmo",
      price: 707,
      oldPrice: 1033,
      isNew: false,
      onSale: true,
      stars: 2,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Gempus Dortis Cosmo Milan",
      price: 200,
      isNew: true,
      onSale: true,
      stars: 4,
      inStock: true,
      onlineOnly: false,
    },
    {
      name: "Gempus Cosmo De Milancelos Scelerisque Placerat",
      price: 1010,
      oldPrice: 2003,
      isNew: false,
      onSale: true,
      stars: 2,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Dulla Minterdum Diverra An Dacony Maliduet",
      price: 445,
      oldPrice: 598,
      isNew: false,
      onSale: true,
      stars: 4,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Dinterdum Pretium De Condimento",
      price: 303,
      oldPrice: 456,
      isNew: true,
      onSale: true,
      stars: 2,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Daciniado Metropolis Darturien",
      price: 2043,
      isNew: true,
      onSale: true,
      stars: 2,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Cosmo De Milancelos Gempus",
      price: 535,
      oldPrice: 987,
      isNew: false,
      onSale: false,
      stars: 4,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Ninterdum Pre De Condimento",
      price: 570,
      isNew: true,
      onSale: false,
      stars: 3,
      inStock: false,
      onlineOnly: true,
    },
    {
      name: "Nullam Commodo Merato Dano Cosmopolis",
      price: 700,
      isNew: true,
      onSale: true,
      stars: 1,
      inStock: true,
      onlineOnly: true,
    },
    {
      name: "Gempus Dorti Cosmo Milan",
      price: 1900,
      oldPrice: 2098,
      isNew: false,
      onSale: true,
      stars: 4,
      inStock: true,
      onlineOnly: true,
    },

  ];



export const watchesSeed = async () => {
  console.log('check watches')
  const watches = await prisma.watches.findMany()
  if (!watches.length) {
    console.log('started seeding watches')
    const brands = await prisma.brands.findMany()
    console.log(brands)
    const collections = await prisma.collections.findMany()
    const getRandomId = (collection: any[]) => collection[Math.floor(Math.random() * collection.length)].id
    await prisma.watches.createMany({ data: watchesList.map((n, i) => ({ ...n, brandId: getRandomId(brands), collectionId: getRandomId(collections), img: i })) })
    console.log('finished seeding watches')
  }
}
