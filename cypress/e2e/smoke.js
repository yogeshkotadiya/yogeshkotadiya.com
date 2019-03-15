describe(`site`, () => {
  it(`works`, () => {
    cy.visit(`/`)
      .getByText(/blog/i)
      .click({ force: true });
  });
});
