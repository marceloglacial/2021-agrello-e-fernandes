describe('Home', () => {
  it('Should render the homepage', () => {
    cy.visit('/');
  });

  it('Should render the header', () => {
    cy.get('.page-header').should('exist');
  });

  it('Should not show site title', () => {
    cy.get('h1').should('have.class', 'hidden');
  });

  it('Should render the logo', () => {
    cy.get('.page-header img').should('exist');
  });

  it('Should render all hero elements', () => {
    cy.get('.hero').should('exist');
    cy.get('.hero__content').should('exist');
    cy.get('.hero__header').should('exist');
    cy.get('.hero__header h1').should('exist');
    cy.get('.hero__video').should('exist');
    cy.get('.hero__video video').should('exist');
  });

  it('Should render servicos', () => {
    cy.get('#servicos').should('exist');
    cy.get('#servicos .container').should('exist');
    cy.get('#servicos .container h2').should('exist');
    cy.get('#servicos .container .grid').should('exist');
  });

  it('Should render quem somos', () => {
    cy.get('#quemsomos').should('exist');
    cy.get('#quemsomos .container').should('exist');
    cy.get('#quemsomos .container h2').should('exist');
    cy.get('#quemsomos .container .grid').should('exist');
  });

  it('Should render contato', () => {
    cy.get('#contato').should('exist');
    cy.get('#contato .container').should('exist');
    cy.get('#contato .container h2').should('exist');
    cy.get('#contato .container form').should('exist');
    cy.get('#contato .container iframe').should('exist');
  });

  it('Should render footer', () => {
    cy.get('.footer').should('exist');
    cy.get('.footer .container').should('exist');
    cy.get('.footer__logo').should('exist');
    cy.get('.footer__address').should('exist');
    cy.get('.footer__social').should('exist');
    cy.get('.footer__menu').should('exist');
    cy.get('.footer__quicklinks').should('exist');
  });
});
