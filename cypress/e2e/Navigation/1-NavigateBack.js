describe(`Should Navigate Back from Page`, () => {
  beforeEach(() => {
    cy.visit(`/`);
  });
  it(`Navigate back to Home Page`, () => {
    cy.find(`#header`)
      .contains(`Blog`)
      .click({ force: true });
    cy.go("back")
      .url()
      .should(`include`, `/`);
  });
});
