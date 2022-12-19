interface jscode {
    page: object
}
const useRoute = {
    route(to: string): void{
        const app = document.querySelector("#app");
        const links = document.querySelectorAll('[route="link"]');
         fetch((to === "pages//.html" || to === "pages/.html" )?"pages/main.html":to,{
            credentials: "include"
        }).then(req => req.text()).then(res => {
            app!.innerHTML = res;
            console.log(app);
            links.forEach(e => {
                e.classList.remove("route-active")
            })
            if( to != ".html" ) {  
                document.querySelector(`[href="#${to.replace(".html", "").replace("pages/","")}"]`)?.classList.add("route-active")
            }
        })
    },
    locationHashChanged(): void {
        useRoute.route("pages/"+location.hash.toString().replace("#", "") + ".html" );
    }
}

useRoute.locationHashChanged()



export default useRoute;
