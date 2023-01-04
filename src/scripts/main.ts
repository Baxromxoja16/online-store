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
    description: any;
    price: any;
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
           if(this.list.length < 2){
           fetch('https://dummyjson.com/products?limit=100')
            .then(req => req.json()).then(res => {
                this.list = res.products;
                this.setList(res.products)
                this.setCategory(res.products)
                this.setBrands(res.products)
                let a : string[] = [];
                let a1 :  string[] = useRoute.getQuery("category");
                let a2 : string[] = useRoute.getQuery("brand");
                this.methods.sortStart("category", a.concat( a1 , a2)) 
            })   
            }else{
                this.setList(this.list)
                this.setCategory(this.list)
                this.setBrands(this.list)
                let a : string[] = [];
                let a1 :  string[] = useRoute.getQuery("category");
                let a2 : string[] = useRoute.getQuery("brand");
                this.methods.sortStart("category", a.concat( a1 , a2)) 
            }
    },
    setList(list : prs[]){
        let total = 0;
        list.forEach( val  => {
            const e = val as ine;
            let card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('click', `show(${e.title})`);
            card.innerHTML = ` <img src="${e.images[0]}" alt="">
            <p class="title">${e.title} </p>
            <p class="price">${e.price} $</p>
            <p class="description">${e.description}</p>`

            if(useRoute.getQuery("search")[0] == null){
                document.querySelector(".grid")!.appendChild(card);
            }else if(card.innerHTML.toLocaleLowerCase().includes(useRoute.getQuery("search")[0])){
                document.querySelector(".grid")!.appendChild(card);
            } 
            total++
        });
        document.querySelector("#found")!.innerHTML = total.toString()
    },
    setCategory(list: prs[]){
        this.category = this.category.filter(e=> e != "")
        list.forEach( val  => {
        if(!this.category.includes(val.category)){
            this.category.push(val.category)
            let card = document.createElement('li');
            card.classList.add("catergory-item");
            card.setAttribute("click", `sort(${val.category};category)`)
            card.setAttribute('tag', val.category);
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
            card.setAttribute('tag', val.brand);
            card.setAttribute("click", `sort(${val.brand};brand)`)
            card.innerHTML = `<input type="checkbox" id="smartphones">
            <label for="smartphones">${val.brand}</label>`
             document.querySelector(".brand-list")!.appendChild(card);
            
        }
        })
    },
    methods: {
        search(e: string, elem : HTMLElement ){
            useRoute.removeQuery("search");
            useRoute.setQuery("search=" + (<HTMLInputElement>elem)!.value)
            if((<HTMLInputElement>elem)!.value == "") useRoute.removeQuery("search")
        },
        change(e: string, elem : HTMLElement){
           document.querySelector("." + elem.getAttribute("to"))!.innerHTML = (<HTMLInputElement>elem)!.value
            useRoute.removeQuery(elem.id);
            useRoute.setQuery(elem.id + "=" + (<HTMLInputElement>elem)!.value)
        },
        sort(e : string, elem : HTMLElement){
            let val = e.split(";")[0];
            let sort : string = e.split(";")[1];
            useRoute.setQuery(sort + "=" + val)
            if(val == 'all') {
                location.href = location.href.split("?")[0].replaceAll("%20", " "); 
                document.querySelectorAll(".active-category").forEach(e=> e.classList.remove('active-category'))
            }
            
            if(elem.className.includes("active-category") && location.href.replaceAll("%20", " ").includes("?"+ sort + "=" + val)){
             location.href = location.href.replaceAll("%20", " ").replace(sort + "=" + val + "&","").replaceAll("%20", " ").replace("?"+sort + "=" + val ,"")
            }

            if(elem.className.includes("active-category")) {
                location.href = location.href.replace("&"+sort + "=" + val.replaceAll(" ", "%20"),"")
                elem.classList.remove("active-category")
            }
        },
        sortStart(sort : string, val : string[]){
            document.querySelector(".grid")!.innerHTML =  ""
            let list  = mainScript.list;
            if(location.href.includes("category=")) list = list.filter((e: {[brand : string]: any}) : boolean => {
              return  val.includes(e[sort])
            });

            if(location.href.includes("brand=")) list = list.filter((e: {[brand : string]: any}) : boolean => {
                return  val.includes(e["brand"])
            })

            if(location.href.includes("Pricefrom=")) list = list.filter((e: {[brand : string]: any}) : boolean => {
                return  parseInt(e["price"])  >= parseInt(useRoute.getQuery("Pricefrom")[0])
            })

            if(location.href.includes("Priceto=")) list = list.filter((e: {[brand : string]: any}) : boolean => {
                return  parseInt(e["price"])  <= parseInt(useRoute.getQuery("Priceto")[0])
            })
            
            mainScript.setList(list);

            val.forEach(e=>{
               document.querySelector('[tag="'+e+'"]')?.classList.add("active-category")
            })
        },
        show(e:string){
           useRoute.getQuery("rand")
        }
    }
}

export default mainScript