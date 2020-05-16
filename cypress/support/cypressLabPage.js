class CypressLabPage {
  enterEmail(email) {
    cy.get('[aria-label="email"]').type(email);
    cy.get('[aria-label="email"]').should("have.value", email);
  }

  enterName(name) {
    // cy.get('[aria-label="What is your name?"]').type("Sean");
    cy.contains("What is your name?")
      .parents("[role='listitem']")
      .find("input")
      .type(name);
    cy.get('[aria-label="What is your name?"]').should("have.value", name);
  }

  enterOtherPushUp(pushUp) {
    cy.get(".appsMaterialWizToggleRadiogroupElContainer")
      .find('[aria-label="Other:"]')
      .click();
    cy.get(".freebirdFormviewerViewItemsRadioOtherInputElement")
      .find('[aria-label="Other response"]')
      .type(pushUp);

    cy.get(".freebirdFormviewerViewItemsRadioOtherInputElement")
      .find('[aria-label="Other response"]')
      .should("have.value", "6");
  }

  enterFavGamesAsComputerGames() {
    cy.get('[aria-label="computer games"]').should("not.be.checked");
    cy.get('[aria-label="computer games"]').click();
    cy.get('[aria-label="computer games"]').should(
      "have.attr",
      "aria-checked",
      "true"
    );
  }

  enterFavGamesAsMobileGames() {
    cy.get('[aria-label="mobile games"]').should("not.be.checked");
    cy.get('[aria-label="mobile games"]').click();
    cy.get('[aria-label="mobile games"]').should(
      "have.attr",
      "aria-checked",
      "true"
    );
  }
  enterFavGamesAsVideoConsoleGames() {
    cy.get('[aria-label="video console games"]').should("not.be.checked");
    cy.get('[aria-label="video console games"]').click();
    cy.get('[aria-label="video console games"]').should(
      "have.attr",
      "aria-checked",
      "true"
    );
  }

  selectMaleGender() {
    cy.contains("Gender")
      .parents(".freebirdFormviewerViewNumberedItemContainer")
      .contains("Choose")
      .click();

    cy.get(".exportSelectPopup").contains("Male").click();

    cy.get(".isSelected").should("have.attr", "data-value", "Male");
    cy.get(".isSelected").should("have.attr", "aria-selected", "true");
  }
  select3() {
    cy.get('[aria-label="Do you love to code?"]')
      .find('[aria-label="3"]')
      .click();

    cy.get('[aria-label="Do you love to code?"]')
      .find('[aria-label="3"]')
      .should("have.attr", "aria-checked", "true");
  }

  selectYes() {
    cy.contains("Did you enjoy this quiz?")
      .parents(".freebirdFormviewerViewItemsItemItem")
      .find('[aria-label="Yes"]')
      .click();

    cy.contains("Did you enjoy this quiz?")
      .parents(".freebirdFormviewerViewItemsItemItem")
      .find('[aria-label="Yes"]')
      .should("have.attr", "aria-checked", "true");
  }

  submitForm() {
    cy.contains("Submit").click();
  }
}

export default new CypressLabPage();
