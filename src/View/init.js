export default () => {
    const viewInit = `
    <figure class="logo">
         <img src="./View/Logo.png">
    </figure>     
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewInit;

    return divElement;
}