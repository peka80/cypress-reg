describe('registration test', () => {

  it('login without email address', () => {
    cy.visit('https://gallery-app.vivifyideas.com/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
  });
});