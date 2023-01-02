const cart = {
  start() {
    console.log("cart loaded")
  },
  getElement(e: string){
    return <HTMLElement>document.querySelector(`.${e}`);
  },
  methods: {
    buy(e: string) {
      cart.getElement(e)?.classList.add('active-modal')
    },
    closeModal(e: string) {
      cart.getElement(e)?.classList.remove('active-modal')
    },
    deleteCount() {
      console.log('deleted');
    },
    addCount(e: string) {
      console.log('add');
    }
  },
};

export default cart;


// // types
// interface ProductItem {
//   products: [
//       {
//           id: number;
//           title: string;
//           description: string;
//           price: number;
//           discountPercentage: number;
//           rating: number;
//           stock: number;
//           brand: string;
//           category: string;
//           thumbnail: string;
//           images: string[];
//       }
//   ];
//   total: number;
//   skip: number;
//   limit: number;
// }[]
// export type {ProductItem}