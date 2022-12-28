import useDom from "./useDom";


interface jscode {
    page: object
}
const useRoute = {
    route(to: string, script: any): void{
        let url : string = (to === "pages//.html" || to === "pages/.html" )?"pages/main.html":to;
        const app = document.querySelector("#app");
        const links = document.querySelectorAll('[route="link"]');
         fetch(url,{
            credentials: "include"
        }).then(req => req.text()).then(res => {
            app!.innerHTML = res;

            script[url.split('/')[1].split('.')[0]].start()
            console.log(script[url.split('/')[1].split('.')[0]])
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
    }
}





export default useRoute;
