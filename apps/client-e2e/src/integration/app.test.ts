describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('Show header', () => {
    cy.get('h1').contains('Yaic').should('exist');
  });
});
