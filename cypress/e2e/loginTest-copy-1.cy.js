describe("Login Test", () => {
  it("should log in successfully", () => {
    cy.visit("https://consulting-wizard-production.up.railway.app/login");
    cy.get('input[name="email"]').type("hamza@app.com");
    cy.get('input[name="password"]').type("123456");
    cy.get('button[type="button"]').click();

    cy.url().should("include", "/");
  });

  it("should show error message for incorrect password", () => {
    cy.visit("https://consulting-wizard-production.up.railway.app/login");
    cy.get('input[name="email"]').type("admin@app.com");
    cy.get('input[name="password"]').type("12345");
    cy.get('button[type="button"]').click();
  });

  it("should show error message for incorrect email", () => {
    cy.visit("https://consulting-wizard-production.up.railway.app/login");
    cy.get('input[name="email"]').type("admin@123.com");
    cy.get('input[name="password"]').type("123456");
    cy.get('button[type="button"]').click();
  });
});
