describe("template spec", () => {
  it("redirects to /accounts after clicking button and checks button text", () => {
    cy.visit("/");

    // Buscar el elemento con el id 'cypress-title-home' que contiene el texto 'Your Financial Passport!'
    cy.get("#cypress-title-home").contains("Your Financial Passport!");

    // Buscar el elemento con el id 'cypress-description-home' que contiene el texto específico
    cy.get("#cypress-description-home").contains(
      "Would you like to have full control of your finances in one place? With Belvo it is possible! Our app allows you to connect all your bank accounts and credit cards in one easy-to-use platform. Get a complete view of your income, expenses and savings in real time. Goodbye to financial chaos, hello to peace of mind!"
    );

    cy.get("#cypress-btn-accounts").click(); // Utilizamos .click() para hacer clic en el enlace
    cy.url().should("include", "/accounts"); // Verificamos que la URL redirija a /accounts
  });
});

describe("template spec", () => {
  it("verifies the presence and text of the Belvo button", () => {
    cy.visit("/");

    // Verificar que el botón Belvo esté presente en el DOM
    cy.get("#cypress-btn-belvo").should("exist");

    // Esperar a que el botón Belvo esté completamente visible y cargado
    cy.get("#cypress-btn-belvo").should("be.visible");

    // Verificar que el botón tenga el texto "Belvo"
    cy.get("#cypress-btn-belvo").contains("Belvo");
  });
});

describe("template spec", () => {
  it("redirects to /", () => {
    cy.visit("/accounts");

    // Verificar que el botón 'Belvo' esté presente en el DOM y contenga el texto correcto
    cy.get("#cypress-btn-home-redirect").should("exist").and("be.visible");

    // Hacer clic en el botón 'Belvo'
    cy.get("#cypress-btn-home-redirect").click();

    // Verificar que la URL redirija a /accounts
    cy.url().should("include", "/");
  });
});
