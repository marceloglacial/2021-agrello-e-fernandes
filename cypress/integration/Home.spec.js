describe('Home', () => {
  it('Should render the homepage', () => {
    cy.visit('/');
  });

  // Header

  it('Should render the header', () => {
    cy.get('.page-header').should('exist');
  });

  it('Should not show site title', () => {
    cy.get('h1').should('have.class', 'hidden');
  });

  it('Should render the logo', () => {
    cy.get('.page-header img').should('exist');
  });

  // Hero

  it('Should render hero', () => {
    cy.get('.hero').should('exist');
  });

  it('Should render hero content', () => {
    cy.get('.hero__content').should('exist');
  });

  it('Should render hero header', () => {
    cy.get('.hero__header').should('exist');
  });

  it('Should render hero title', () => {
    cy.get('.hero__header h1').should('exist');
  });

  it('Should render hero video', () => {
    cy.get('.hero__video').should('exist');
    cy.get('.hero__video video').should('exist');
  });

  // Servicos

  it('Should render servicos', () => {
    cy.get('#servicos').should('exist');
  });

  it('Should render servicos container', () => {
    cy.get('#servicos .container').should('exist');
  });

  it('Should render servicos title', () => {
    cy.get('#servicos .container h2').should('exist');
  });

  it('Should render servicos content', () => {
    cy.get('#servicos .container .grid').should('exist');
  });

  // Quem Somos

  it('Should render quem somos', () => {
    cy.get('#quemsomos').should('exist');
  });

  it('Should render quem somos container', () => {
    cy.get('#quemsomos .container').should('exist');
  });

  it('Should render quem somos title', () => {
    cy.get('#quemsomos .container h2').should('exist');
  });

  it('Should render quem somos content', () => {
    cy.get('#quemsomos .container .grid').should('exist');
  });

  // Contato

  it('Should render contato', () => {
    cy.get('#contato').should('exist');
  });

  it('Should render contato container', () => {
    cy.get('#contato .container').should('exist');
  });

  it('Should render contato title', () => {
    cy.get('#contato .container h2').should('exist');
  });

  it('Should render contato form', () => {
    cy.get('#contato .container form').should('exist');
  });

  it('Should render contato map', () => {
    cy.get('#contato .container iframe').should('exist');
  });

  // Footer

  it('Should render footer', () => {
    cy.get('.footer').should('exist');
  });

  it('Should render footer container', () => {
    cy.get('.footer .container').should('exist');
  });

  it('Should render footer logo', () => {
    cy.get('.footer__logo').should('exist');
  });

  it('Should render footer address', () => {
    cy.get('.footer__address').should('exist');
  });

  it('Should render footer social', () => {
    cy.get('.footer__social').should('exist');
  });

  it('Should render footer menu', () => {
    cy.get('.footer__menu').should('exist');
  });

  it('Should render footer quick links', () => {
    cy.get('.footer__quicklinks').should('exist');
  });
});
