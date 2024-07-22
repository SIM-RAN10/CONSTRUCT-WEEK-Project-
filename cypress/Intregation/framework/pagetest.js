import Login_po from "../../support/PageObjects/Login_po";
import Link_po from "../../support/PageObjects/Link_po";
import Search_po from "../../support/PageObjects/Search_po";
import Checkout_po from "../../support/PageObjects/Checkout";
import Myaccount from "../../support/PageObjects/Myaccount";



describe('', () => {

    const login_po = new Login_po;
    const link_po = new Link_po;
    const search_po = new Search_po;
    const checking = new Checkout_po;
    const myaccount = new Myaccount;
    

    it('', () => {

        login_po.Enterurl();
        login_po.Login();
        search_po.search();
        // addcart.add();
        link_po.linkclick('Add to Cart');
        cy.wait(3000);
        link_po.linkclick('Add to Cart');
        // cy.wait(2000)
        link_po.linkclick('Shopping Cart');
        cy.wait(2000);
        link_po.linkclick('Checkout');
        cy.wait(2000);
        checking.billingdetails();
        link_po.linkclick('my account');
        myaccount.AccountModify();
        

        
    });
});

