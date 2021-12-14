describe('registration test', () => {

  xit('register with valid data', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('peka@gmail.com');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });
});
