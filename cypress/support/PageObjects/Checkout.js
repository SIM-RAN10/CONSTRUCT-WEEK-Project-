

class Checkout_po{

    
    billingdetails(){
        /*
        // enter the first name of personal details
        cy.get('#input-payment-firstname').type('simranop');
        // enter the last name
        cy.get('#input-payment-lastname').type('kimn');
        //enter the address1
        cy.get('#input-payment-address-1').type('Boudha');
        //enter the city
        cy.get('#input-payment-city').type('Hindra');
        //enter the postcode
        cy.get('#input-payment-postcode').type('4540126');
        //enter the Country
        cy.get('#input-payment-country').select('Rwanda');
        //enter the region
        cy.get('#input-payment-zone').select('Kibungo');
        */
        //click continue button of billing details
        cy.get('#button-payment-address').click();
        //click continue button of delivary details
        cy.get('#button-shipping-address').click();
        //click continue button of Delivary method
        cy.get('#button-shipping-method').click({force:true});
        //click on payment method terms and conditions
        cy.get('input[name="agree"]').check().should('be.checked');
        //Click on continue button
        cy.get('#button-payment-method').click();
        //click on confirm button
        cy.get('#button-confirm').click();
        //Asserting the confirm order message
        cy.xpath('//div[@id="content"]/h1').should('include.text','Your order has been placed!')


    
    }

}
export default Checkout_po;