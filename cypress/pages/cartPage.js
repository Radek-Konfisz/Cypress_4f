class cartPage{
    elements={
        spanGrandTotal : () => cy.get('div[class*="summary-grandTotal"]').find('span[class="summary-amount-dfs"]').find('span').first(),

        buttonCouponAccordion : () => cy.get('button[class*="accordion-title_container"]'),
        inputCouponCode : () => cy.get('input[class*="couponCode-input"]'),
        formCouponCode : () => cy.get('form[class*="couponCode-entryForm"'),
        buttonPlusQuantity : () => cy.get('button[class*="quantity-plus"]'),
        buttonConfirmQuantity : () => cy.get('button[class*="quantity-confirm"]')
    }

    clickCouponAccordionButton(){
        this.elements.buttonCouponAccordion().click()
    }

    typeCouponCode(code){
        this.elements.inputCouponCode().type(code)
    }

    submitCouponCodeForm(){
        this.elements.formCouponCode().submit()
    }

    clickPlusQuantityButton(){
        this.elements.buttonPlusQuantity().click()
    }

    clickConfirmQuantityButton(){
        this.elements.buttonConfirmQuantity().click()
    }

}
export default cartPage;