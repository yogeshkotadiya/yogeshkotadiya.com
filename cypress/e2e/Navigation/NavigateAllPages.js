describe(`Navigate to all Pages`, () => {
  beforeEach(() => {
    cy.visit(`/`);
  });
  it(`should navigate to Blog page `, () => {
    cy.get(`#header`)
      .contains(`Blog`)
      .click({ force: true })
      .url()
      .should(`include`, `/blog`);
  });
  it(`should navigate to Projects page `, () => {
    cy.get(`#header`)
      .contains(`Projects`)
      .click({ force: true })
      .url()
      .should(`include`, `/projects`);
  });
  it(`should navigate to About page `, () => {
    cy.get(`#header`)
      .contains(`About`)
      .click({ force: true })
      .url()
      .should(`include`, `/about`);
  });
  it(`should navigate to 404 page `, () => {
    cy.visit(`/404`)
      .getByText(/404/g)
      .url()
      .should(`include`, `/404`);
  });
});
