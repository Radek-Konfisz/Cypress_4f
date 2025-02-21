class loginPage{
    elements={
        inputEmail : () => cy.get('input[name="email"]'),
        inputPassword : () => cy.get('input[name="password"]'),
        formLogin : () => cy.get('form.signIn-form-I67'),
        myAccountDashboard : () => cy.get('.myAccount-dashboardRoot-lm6')
    }
    
    typeEmail(email){
        this.elements.inputEmail().type(email)
    }

    typePassword(password){
        this.elements.inputPassword().type(password)
    }

    submitLoginForm(){
        this.elements.formLogin().submit()
    }
}
export default loginPage;