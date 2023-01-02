const cart = {
  start() {
    console.log("cart loaded")
  },
  methods: {
    buy(e: string) {
      const popUp = document.querySelector('.pop-up_buy');
      popUp?.classList.add('active-modal')
    },
    closeModal() {
      const popUp = document.querySelector('.pop-up_buy');
      popUp?.classList.remove('active-modal')
    },
    removeCount() {
      console.log('removed');
    },
    addCount() {
      console.log('added');
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