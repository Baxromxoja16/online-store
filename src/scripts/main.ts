const mainScript = { 
    list: {"products":[{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}],"total":100,"skip":0,"limit":1}, 
    start(){
        console.log("started")
        this.getProducts();
    },
    getProducts(){
            fetch('https://dummyjson.com/products?limit=30',{
            }).then(req => req.json()).then(res => {
                this.list = res;
                this.setList()
            })   
    },
    setList(){
        this.list.products.forEach(e => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('click', `show('${e.title}')`)
            card.innerHTML = ` <img src="${e.images[0]}" alt="">
            <p class="title">${e.title}</p>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum!</p>`
            document.querySelector(".grid")!.appendChild(card);
        });
    },
    methods: {
        sort(e : string){
            console.log(e)
        },
        show(e:string){
            alert(e)
        }
    }
}

export default mainScript