import useDom from "./useDom";

interface prs {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
}[]
interface product {
    products: prs[] ;
  }
  interface ine {
    title : string, 
    images : string[]
}



const mainScript = { 
    list: [{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}], 
    start(){
        this.getProducts();
    },
    getProducts(){
            fetch('https://dummyjson.com/products?limit=30',{
            }).then(req => req.json()).then(res => {
                this.list = res.products;
                this.setList(res.products)
            })   
    },
    setList(list : prs[]){
        list.forEach( val  => {
            const e = val as ine;
            let card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('click', `show(${e.title})`)
            card.innerHTML = ` <img src="${e.images[0]}" alt="">
            <p class="title">${e.title}</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum!</p>`
            document.querySelector(".grid")!.appendChild(card);
        });
    },
    methods: {
        sort(val : string, elem : HTMLElement ){
            document.querySelector(".active-category")?.classList.remove('active-category')
            elem.classList.add("active-category")
            document.querySelector(".grid")!.innerHTML =  ""
            let list  = mainScript.list;
            list = list.filter(e => (val == 'all')? e.category != '':e.category === val);
            mainScript.setList(list)
        },
        show(e:string){
            location.href = "#"
        }
    }
}

export default mainScript