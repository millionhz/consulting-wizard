describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('https://consulting-wizard-production.up.railway.app/login') // replace with the URL of your login page
    cy.get('input[name="email"]').type('hamza@app.com') // replace with your email input field name
    cy.get('input[name="password"]').type('123456') // replace with your password input field name
    cy.get('button[type="button"]').click() // replace with your login button selector

    cy.url().should('include', '/') // replace with the URL of your dashboard page
  })

  it('should show error message for incorrect password', () => {
    cy.visit('https://consulting-wizard-production.up.railway.app/login')
    cy.get('input[name="email"]').type('admin@app.com')
    cy.get('input[name="password"]').type('12345')
    cy.get('button[type="button"]').click()
    
  })


  it('should show error message for incorrect email', () => {
    cy.visit('https://consulting-wizard-production.up.railway.app/login')
    cy.get('input[name="email"]').type('admin@123.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('button[type="button"]').click()
  })

})
