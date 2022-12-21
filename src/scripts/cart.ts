const app = <HTMLElement>document.querySelector('#app')!;
const cart = {
    popUp(){
        app.addEventListener('click', (e:Event) => {
            const popUpModal = <HTMLElement>app.children[3]
            const HtmlElem = <HTMLElement>e.target
            if (HtmlElem.className === 'buy') {
                popUpModal.classList.add('active-modal')
            }
            if (HtmlElem.className === 'overlay') {
                popUpModal.classList.remove('active-modal')
            }
        })
    }
}
cart.popUp()



export default cart