class productPage{
    elements={
        buttonLSize : () => cy.get('button[title="L"]'),
        formAddToCart : () => cy.get('form.productFullDetail-mainForm-EW7')
    }

    clickLSizeButton(){
        this.elements.buttonLSize().click()
    }

    submitAddToCartForm(){
        this.elements.formAddToCart().submit()
    }

}
export default productPage;