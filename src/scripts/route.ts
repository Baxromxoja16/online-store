import useDom from "./useDom";

const useRoute = {
    firstLoad: 0,
    startPage(script: any){
        document.addEventListener('DOMSubtreeModified', (e) => {
            let url : string = (location.hash.split("?")[0] == '' || location.hash.split("?")[0] == '#/')?"pages/main.html":`pages/${location.hash.replace("#", '')}.html`
            document.querySelectorAll('[click]').forEach(e => {
                let elem : string | null = e.getAttribute('click') 
                try{
                    let methodsFunc = elem!.split("(")[0]
                    e.addEventListener("click", (event)=> {
                        script[url.split('/')[1].split('.')[0]].methods[methodsFunc](elem!.split("(")[1].split(")")[0], event.currentTarget)
                    })
                    e.removeAttribute("click")
                }catch(e){}
            })

            document.querySelectorAll('[change]').forEach(e => {
                let elem : string | null = e.getAttribute('change') 
                try{
                let methodsFunc = elem!.split("(")[0]
                e.addEventListener('input', (event) => {
                    script[url.split('/')[1].split('.')[0]].methods[methodsFunc](elem!.split("(")[1].split(")")[0], event.currentTarget)
                });
                e.removeAttribute("change")
                }catch(e){}
            })

        })
    },
    route(a: string, script: any): void {
        let to = a.split("?")[0] + ".html"
        to = to.replace(".html.html",".html")
        let url : string = (to === "pages//.html" || to === "pages/.html" )?"pages/main.html":to;
        const app = document.querySelector("#app");
        const links = document.querySelectorAll('[route="link"]');
         fetch(url,{
            credentials: "include"
        }).then(req => req.text()).then(res => {
            app!.innerHTML = res;   
            script[url.split('/')[1].split('.')[0]].start()
            document.querySelectorAll('[click]').forEach(e => {
                let elem : string | null = e.getAttribute('click') 

                e.addEventListener("click", ()=> { 
                script[url.split('/')[1].split('.')[0]].methods[elem!.split("(")[0]](elem!.split("(")[1].split(")")[0])
            })
                e.removeAttribute("click")
            })
            links.forEach(e => {
                e.classList.remove("route-active")
            })
            if( to != ".html" ) {
                document.querySelector(`[href="#${to.replace(".html", "").replace("pages/","")}"]`)?.classList.add("route-active")
            }
        })
    },
    locationHashChanged(script : object): void {
        useRoute.route("pages/"+location.hash.toString().replace("#", "") + ".html", script );
        if(this.firstLoad == 0){
            this.firstLoad = 1
            this.startPage(script)
        }
    },
    setQuery(val: string): void {
        let loc :string = location.href.replaceAll("%20", " ");
        if(!loc.includes(val)){
            if(loc.includes("?")){
                location.href += "&" + val
            }else{
                location.href += "?" + val
            }
        }
    },
    getQuery(filter: string): string[] {
        try{
        let loc : string = location.href.split("?")[1].replaceAll("%20", " ");
        let res : string[] = []
        loc.split(filter+ "=").forEach((e: string, index : number)=>{
            if(index > 0) res.push(e.split("&")[0].replace("=",""))
        })
        return res.filter(e=> e != "")
        }catch(e){
            return []
        }
    },
    removeQuery(val: string): void{
        let loc :string = location.href;
        if(loc.includes(val)){
                let rep = val + "=" +location.href.split(val+"=")[1].split("&")[0] 
                if(location.href.includes("&" + rep )){
                    location.href =  location.href.replace("&" + rep, "").replace(rep, "").replace("&&","&")
                }else{
                    location.href =  location.href.replace(rep + "&", "").replace(rep, "").replace("&&","&")
                }
                
                location.href = location.href.replace("?&","?")
        }
    }
}








export default useRoute;
