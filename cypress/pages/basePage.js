class basePage{
    elements={
        buttonAllCookies : () => cy.get('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]')
    }
    acceptAllCookies(){
        this.elements.buttonAllCookies().click()
    }
}
export default basePage;