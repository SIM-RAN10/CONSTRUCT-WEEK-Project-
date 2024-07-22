class Search_po{

    // Enterurl(){

    //     cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
    // }
    search(){
        // Enter any existing Product name into the Search text box field .
        cy.get('[placeholder="Search"]').type('Hp');
        cy.get('[class="btn btn-default btn-lg"]').click();
        
    }
}
export default Search_po;