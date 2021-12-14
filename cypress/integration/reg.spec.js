describe('registration test', () => {

  it('register with empty fields', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with only email and password', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register without email', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register without password', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register without password confirmation', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register without first name', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register without last name', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with all-space first and last name', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('   ');
    cy.get('#last-name').type('   ');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with all-space password', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('        ');
    cy.get('#password-confirmation').type('        ');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with password no digits', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('pekadragovic');
    cy.get('#password-confirmation').type('pekadragovic');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with password only digits', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic@gmail.com');
    cy.get('#password').type('12345678');
    cy.get('#password-confirmation').type('12345678');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with password less then 8 characters', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic1@gmail.com');
    cy.get('#password').type('123456');
    cy.get('#password-confirmation').type('123456');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with one character in name and last name', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('P');
    cy.get('#last-name').type('D');
    cy.get('#email').type('pekadragovic2@gmail.com');
    cy.get('#password').type('12345678');
    cy.get('#password-confirmation').type('12345678');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with already taken email', () => {
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

  it('register - no terms checked', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic3@gmail.com');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    // cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });

  it('register with all valid data', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('a[href="/register"]').click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');

    cy.get('#first-name').type('Petar');
    cy.get('#last-name').type('Dragovic');
    cy.get('#email').type('pekadragovic1@icloud.com');
    cy.get('#password').type('peka2808');
    cy.get('#password-confirmation').type('peka2808');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
  });
});
