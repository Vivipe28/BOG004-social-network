export const PATHS = {
  title: {
    path: '/',
    template: `
    <h1>PAPYRUS</h1> 
    `
  },

  signUp: {
    path: '/signUp',
    template: `
    <form id="login">
      <label for="title">Sign Up</label> <br>
      <input type="text" placeholder="nickname" id="nickname"> <br>  
      <input type="text" placeholder="email" id="email"> <br>
      <input type="password" placeholder="password" id="password"> <br>

     
      <input type="submit" id="saveData" name="submit" value="Continue" /> <br>
    </form> 
    `,
  },

  continueWithGoogle: {
    path: '/continueWithGoogle',
    template: ``,
  },

  signIn: {
    path: '/signIn',
    template: `
    <form id="loginSignIn">
      <label for="title">Sign In</label> <br>
      <input type="text" placeholder="nicknameOrEmail" id="nicknameOrEmail"> <br>  
      <input type="password" placeholder="password" id="password"> <br>

     
      <input type="submit" id="saveData" name="submit" value="Continue" /> <br>
    </form>  
    `,
  }

}