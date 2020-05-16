import cypressLabPage from "../support/cypressLabPage";

describe("Cypress Selector", () => {
  it("should visit google form website website", () => {
    cy.visit("");
  });

  it("input email", () => {
    cypressLabPage.enterEmail("sean1981@gmail.com");
  });

  it("input name", () => {
    cypressLabPage.enterName("Sean");
  });

  it("To fill up can do 6 push up", () => {
    cypressLabPage.enterOtherPushUp(6);
  });

  it("To fill up computer, mobile and video console games as fav type of game", () => {
    cypressLabPage.enterFavGamesAsComputerGames();
    cypressLabPage.enterFavGamesAsMobileGames();
    cypressLabPage.enterFavGamesAsVideoConsoleGames();
  });

  it("To select gender Male", () => {
    cypressLabPage.selectMaleGender();
  });

  it("To select option 3 on love to code", () => {
    cypressLabPage.select3();
  });

  it("To select that I enjoy the quiz", () => {
    cypressLabPage.selectYes();
  });

  it("Submit form", () => {
    cypressLabPage.submitForm();
  });
});
