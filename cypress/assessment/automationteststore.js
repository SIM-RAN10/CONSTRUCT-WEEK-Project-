describe('Automationteststore Suite', () => {
    it('Test1', () => {

        cy.visit('https://automationteststore.com/');
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-120x120.jpg"])[2]').click({force:true});
        
    });
    it('Test2', () => {
        
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=68_70');

        cy.contains('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie').click();
  
    });
    it('Test3', () => {

        cy.visit('https://automationteststore.com/index.php?rt=product/product&path=68_70&product_id=121');
        cy.get('[name="option[350]"]').select('775').should('have.value','775');
        cy.get('[name="option[351]"]').select('777').should('have.value','777');
        // cy.get('[id="product_quantity"]').select('1').should('have.value','1');
        cy.get('a[class="cart"]').click();
        
    });
    it('test4', () => {

        cy.visit('https://automationteststore.com/index.php?rt=checkout/cart');
        cy.get('cart_checkout1').click();
        
        
    });
    it.only('test5', () => {

        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.get('[value="guest"]').click();
        
    });

});