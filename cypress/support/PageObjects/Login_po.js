class Login_po{
    Enterurl(){
        cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home");
    }
    Login(){
        cy.contains('My Account').click();
        cy.contains('Login').click();
        cy.get('[id="input-email"]').type('aggstvghujftyshijn@gmail.com');
        cy.get('[id="input-password"]').type('@sim2506#*');
        cy.get('[value="Login"]').click();
    }
}
export default Login_po;