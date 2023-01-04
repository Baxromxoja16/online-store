import useDom from "./useDom";
import useRoute from './route';

interface prs {
        [string : string]: string | number | string[];
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
        
}
  interface ine {
    title : string, 
    images : string[]
}[]


const mainScript = { 
    category: [""],
    brand: [""],
    list: [{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}], 
    start(){
        this.getProducts();
        
    },
    getProducts(){
            fetch('https://dummyjson.com/products?limit=60')
            .then(req => req.json()).then(res => {
                this.list = res.products;
                this.setList(res.products)
                this.setCategory(res.products)
                this.setBrands(res.products)
                this.methods.sortStart("category", useRoute.getQuery("category")) 

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
    setCategory(list: prs[]){
        this.category = this.category.filter(e=> e != "")
        list.forEach( val  => {
        if(!this.category.includes(val.category)){
            this.category.push(val.category)
            let card = document.createElement('li');
            card.classList.add("catergory-item");   
            card.setAttribute("click", `sort(${val.category};category)`)
            card.innerHTML = `<input type="checkbox" id="smartphones">
            <label for="smartphones">${val.category}</label>`
            document.querySelector(".category-list")!.appendChild(card);
        }
        })
    },
    setBrands(list: prs[]){
        this.brand = this.brand.filter(e=> e != "")
        list.forEach( val  => {
        if(!this.brand.includes(val.brand)){
            this.brand.push(val.brand)
            let card = document.createElement('li');
            card.classList.add("catergory-item");   
            card.setAttribute("click", `sort(${val.brand};brand)`)
            card.innerHTML = `<input type="checkbox" id="smartphones">
            <label for="smartphones">${val.brand}</label>`
            document.querySelector(".brand-list")!.appendChild(card);
        }
        })
    },
    methods: {
        sort(e : string, elem : HTMLElement){
            let val = e.split(";")[0];
            let sort : string = e.split(";")[1];
            useRoute.setQuery(sort + "=" + val)
            if(val == 'all')document.querySelector(".active-category")?.classList.remove('active-category')
            // elem.classList.add("active-category")
            // document.querySelector(".grid")!.innerHTML =  ""
            // let list  = mainScript.list;
            // list = list.filter((e: {[brand : string]: string | number | string[];}) => (val == 'all')?true:e[sort] === val);
            // mainScript.setList(list);
            // let urlParams = new URLSearchParams(window.location.search);
            // let myParam = urlParams.get('myParam');

        },
        sortStart(sort : string, val : string[]){
           
            
            document.querySelector(".grid")!.innerHTML =  ""
            let list  = mainScript.list;
            list = list.filter((e: {[brand : string]: any}) : boolean => {
              return  val.includes(e[sort])
            });
            mainScript.setList(list);
            console.log(val)
        },
        show(e:string){
           console.log(useRoute.getQuery("rand"))
        }
    }
}

export default mainScript