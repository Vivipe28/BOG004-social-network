export default () => {
    const viewButtonLogin = `
    <figure class="Logos">
     <img src="./View/Logo.png" alt="Logo"><br>
    <img src="./View/Nave.png" alt="Nave" width="300">
    </figure>

         <h1>Education is the future </h1> 
         
         <a href="#/signUp">Sign Up</a><br>        
         <a href="#/buttonLogin">continue With Google</a> <br>       
         <a href="#/buttonLogin">Sign In</a>         
    


    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewButtonLogin;

    return divElement;
}