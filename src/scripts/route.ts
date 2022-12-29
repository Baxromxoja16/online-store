import useDom from "./useDom";


interface jscode {
    page: object
}
const useRoute = {
    firstLoad: 0,
    startPage(script: any){
        document.addEventListener('DOMSubtreeModified', (e) => {
            let url : string = (location.hash == '' || location.hash == '#/')?"pages/main.html":`pages/${location.hash.replace("#", '')}.html`
            document.querySelectorAll('[click]').forEach(e => {
                let elem : string | null = e.getAttribute('click') 
                e.addEventListener("click", ()=> {script[url.split('/')[1].split('.')[0]].methods[elem!.split("(")[0]](elem!.split("(")[1].split(")")[0])})
                e.removeAttribute("click")
            })
        })
    },
    route(to: string, script: any): void {
        let url : string = (to === "pages//.html" || to === "pages/.html" )?"pages/main.html":to;
        const app = document.querySelector("#app");
        const links = document.querySelectorAll('[route="link"]');
         fetch(url,{
            credentials: "include"
        }).then(req => req.text()).then(res => {
            app!.innerHTML = res;
            console.log(script)
            script[url.split('/')[1].split('.')[0]].start()

            document.querySelectorAll('[click]').forEach(e => {
                let elem : string | null = e.getAttribute('click') 
                e.addEventListener("click", ()=> {script[url.split('/')[1].split('.')[0]].methods[elem!.split("(")[0]](elem!.split("(")[1].split(")")[0])})
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
    }
}








export default useRoute;
