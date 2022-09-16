Cypress._.times(10, () => {
  describe("Test Kiwi web site", () => {
    it("Visit kiwi.com/sk/ and accept cookies", () => {
      cy.visit("");
      cy.get('[data-test="CookiesPopup-Accept"]').click();
    });

    it("Check origin", () => {
      cy.get('[data-test="PlacePickerInputPlace"]').contains("Bratislava");
    });

    it("Add destination", () => {
      cy.get(
        '[data-test="PlacePickerInput-destination"] > [data-test="SearchField-input"]'
      ).type("Dublin");
      cy.get(
        '[data-test="PlacePickerRow-city"] > .Stack__StyledStack-sc-oaff2v-0'
      ).click();
    });

    it("Add person", () => {
      cy.get(
        '[data-test="PassengersField"] > .Popover__StyledPopoverChild-sc-1n31v1j-0 > .ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0 > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0'
      ).click();
      cy.get(
        '[data-test="PassengersRow-adults"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > .fqKJMj > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0 > .ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-8rx3cv-0 > .Icon__StyledIcon-sc-1det6wr-0'
      ).click();
      cy.get('[data-test="PassengersFieldFooter-done"]').click();
    });

    it("Check if Booking option is enabled", () => {
      cy.get(":checkbox").should("be.enabled");
    });

    it("Click search", () => {
      cy.get('[data-test="LandingSearchButton"]').click();
    });

    it("Sort by lowest price", () => {
      cy.get('[data-test="SortBy-price"]').click();
    });

    it("Continue to reservation, sign in", () => {
      cy.get(
        '[data-test="1e03125b4b7800008436f069_0-125b1e034b83000055bf6b52_0"] > .ResultCardstyled__ResultCardActions-sc-vsw8q3-5 > .Stack__StyledStack-sc-oaff2v-0 > [data-test="BookingButton"] > [role="none"] > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0'
      ).click({ animationDistanceThreshold: 20 });
      cy.get('[data-test="MagicLogin-SignInButton"]').click();
    });
  });
});
