export default () => {
    const viewSignUp = `

    <form id="signUp">
      <label for="title">Sign Up</label> <br>
      <input type="text" placeholder="nickname" id="nickname"> <br>  
      <input type="text" placeholder="email" id="email"> <br>
      <input type="password" placeholder="password" id="password"> <br>
    </form> 

    <input type="submit" id="saveData" name="submit" value="Continue" /> <br>
      `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewSignUp;

    return divElement;
}