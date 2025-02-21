// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  Cypress.Commands.add('openWindow', (url, features) => {
    const w = Cypress.config('viewportWidth')
    const h = Cypress.config('viewportHeight')
    if (!features) {
      features = `width=${w}, height=${h}`
    }
    console.log('openWindow %s "%s"', url, features)
  
    return new Promise(resolve => {
      if (window.top.MyAltWindow && window.top.MyAltWindow.close) {
        console.log('window exists already')
        window.top.MyAltWindow.close()
      }
      window.top.MyAltWindow  = window.top.open(url, 'MyAltWindow ', features)
  
      setTimeout(() => {
        cy.state('document', window.top.MyAltWindow.document)
        cy.state('window', window.top.MyAltWindow)
        resolve()
      }, 1000)
    })
  })