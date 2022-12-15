
interface windowObject {
    newURL: string,
}
const useRoute = {
    route(to: string){
        const app = document.querySelector("#app");
         fetch(to,{
            credentials: "include"
        }).then(req => req.text()).then(res => {
            app!.innerHTML = res;
        })
    },
    locationHashChanged() {
        useRoute.route(location.hash.toString().replace("#", "") );
    }
}

useRoute.locationHashChanged()

export default useRoute;
