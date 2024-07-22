class Myaccount{

    AccountModify(){
        //click in my account dropdown
        cy.xpath('(//a[@title="My Account"]/span)[1]').click({force:true});
        //select the my account
        cy.contains('My Account').click();
        //Click on 'Address Book' option from Right Column options
        cy.contains('Address Book').click();
        //Click on 'Edit' button of an address in the displayed 'Address Book Entries' page 
        cy.contains('Edit').click();
        //Editing the fields
        cy.get('#input-firstname').type('Daisy');
        //Enter the last name
        cy.get('#input-lastname').type('Min');
        //Enter the address1
        cy.get('#input-address-1').type('Handa');
        //Enter the city
        cy.get('#input-city').type('Tokyo');
        //Enter the country
        cy.get('#input-country').select('Japan');
        //Enter the region
        cy.get('#input-zone').select('Aichi');
        //click on continue button
        cy.get('input[value="Continue"]').click();
        //Asserting the updated message
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('include.text','Your address has been successfully updated')
    }
}
export default Myaccount;