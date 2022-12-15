
interface windowObject {
    newURL: string,
}
const useRoute = {
    route(to: string): void{
        const app = document.querySelector("#app");
        const links = document.querySelectorAll('[route="link"]');
         fetch((to === "/.html" || to === ".html" )?"main.html":to,{
            credentials: "include"
        }).then(req => req.text()).then(res => {
            app!.innerHTML = res;
            links.forEach(e => {
                e.classList.remove("route-active")
            })
            if( to != ".html" ) {
                document.querySelector(`[href="#${to.replace(".html", "")}"]`)?.classList.add("route-active")
            }
        })
    },
    locationHashChanged(): void {
        useRoute.route(location.hash.toString().replace("#", "") + ".html" );
    }
}

useRoute.locationHashChanged()

export default useRoute;
