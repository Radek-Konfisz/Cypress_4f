import loginPage from "../pages/loginPage"
import basePage from "../pages/basePage"
import productPage from "../pages/productPage"
import miniCartPage from "../pages/miniCartPage"
import cartPage from "../pages/cartPage"

describe('Zadania rekrutacyjne', () => {
  const bp = new basePage()
  const lp = new loginPage()
  const pp = new productPage()
  const mcp = new miniCartPage()
  const cp = new cartPage()


  it('Logowanie z użyciem poprawnych danych', () => {    
    cy.openWindow('/customer/account/login')

    bp.acceptAllCookies()
    lp.typeEmail(Cypress.env("email"))
    lp.typePassword(Cypress.env("password"))
    lp.submitLoginForm()

    lp.elements.myAccountDashboard().should('be.visible')
  })

  it('Dodanie produktu do koszyka', () => {
    cy.openWindow(Cypress.env("product_under_200_PLN_url"))

    bp.acceptAllCookies()
    pp.clickLSizeButton()
    pp.submitAddToCartForm()
    mcp.elements.divMiniCart().should("be.visible")
    mcp.elements.spanMessage().should('have.text','Dodano do koszyka')
  })

  it('Dodanie dodatkowego produktu z poziomu koszyka', () => {
    cy.openWindow(Cypress.env("product_over_200_PLN_url"))

    bp.acceptAllCookies()
    pp.clickLSizeButton()
    pp.submitAddToCartForm()
    mcp.clickCartPageLink()
    cp.elements.spanGrandTotal().invoke('text').as('valueBefore')
    cy.get('@valueBefore').then((valueBefore) => {
      if(parseInt(valueBefore) >= 200){
        cp.clickCouponAccordionButton()
        cp.typeCouponCode(Cypress.env("coupon_code"))
        cp.submitCouponCodeForm()
      } else {
        cp.clickPlusQuantityButton()
        cp.clickConfirmQuantityButton()
      }
      cp.elements.spanGrandTotal().invoke('text').should('not.equal',valueBefore)
    })
  })
})