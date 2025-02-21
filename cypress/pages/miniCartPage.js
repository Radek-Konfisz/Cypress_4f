class miniCartPage{
    elements={
        divMiniCart : () => cy.get('div.miniCart-root_open-mIU'),
        spanMessage : () => cy.get('div.miniCart-toastContainer-VVU').find('span'),
        linkCartPage : () => cy.get('a[href="/checkout-cart.html"')
    }

    clickCartPageLink () {
        this.elements.linkCartPage().click()
    }

}
export default miniCartPage;