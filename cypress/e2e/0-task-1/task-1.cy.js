Cypress._.times(5, () => {
  describe("Test Kiwi web site", () => {
    it("Visit kiwi.com and accept cookies", () => {
      cy.once("uncaught:exception", () => false);
      cy.visit("");
      cy.get(
        '[data-test="ModalCloseButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0 > .ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-8rx3cv-0 > .Icon__StyledIcon-sc-1det6wr-0'
      ).click({ multiple: true });
    });

    it("Check origin", () => {
      cy.get('[data-test="PlacePickerInputPlace"]').contains("Bratislava");
    });

    it("Add destination", () => {
      cy.get(
        '[data-test="PlacePickerInput-destination"] > [data-test="SearchField-input"]'
      ).type("Dublin");
      cy.wait(3000);
      cy.get(
        '[data-test="PlacePickerRow-city"] > .Stack__StyledStack-sc-oaff2v-0'
      ).click({ multiple: true });
    });

    it("Add person", () => {
      cy.get(
        '[data-test="PassengersField"] > .Popover__StyledPopoverChild-sc-1n31v1j-0 > .ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0 > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0'
      ).click({ multiple: true });
      cy.get(
        '[data-test="PassengersRow-adults"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-er9xml-0 > .dWfonn > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0 > .ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-8rx3cv-0 > .Icon__StyledIcon-sc-1det6wr-0'
      ).click({ multiple: true });
      cy.get('[data-test="PassengersFieldFooter-done"]').click({
        multiple: true,
      });
    });

    //changed checkbox to uncheck - redirecting to Booking
    it("Checkbox", () => {
      cy.get(":checkbox")
        .as("checkbox")
        .invoke("is", ":checked")
        .then((checked) => {
          if (checked) {
            cy.get("@checkbox").should("be.checked").uncheck({ force: true });
          } else {
            cy.get("@checkbox").uncheck({ force: true });
          }
        });
    });

    it("Click search", () => {
      cy.once("uncaught:exception", () => false);
      cy.get('[data-test="LandingSearchButton"]').click({
        multiple: true,
        force: true,
      });
    });

    it("Sort by lowest price", () => {
      cy.once("uncaught:exception", () => false);
      cy.get('[data-test="SortBy-price"]').click({ multiple: true });
    });

    it("Check if its sorted from lowest price", () => {
      cy.get(
        '[data-test="1e03125b4b6a000021691044_0-125b1e034b7c000065296264_0"] > .ResultCardstyled__ResultCardActions-sc-vsw8q3-5',
        {
          timeout: 5000,
        }
      ).then(($prices) => {
        const innerText = (el) => el.innerText;
        const firstWord = (text) => text.split(" ")[0];
        const justDigits = (str) => str.replace(/[^0-9.]/g, "");
        const prices = Cypress._.map($prices, (el) =>
          parseFloat(justDigits(firstWord(innerText(el))))
        );
        // confirm the "prices" array is already sorted
        const sorted = Cypress._.sortBy(prices);
        expect(sorted).to.deep.equal(prices);
        return prices;
      });
    });

    it("Continue to reservation, sign in", () => {
      cy.get(
        '[data-test="1e03125b4b6a000021691044_0-125b1e034b780000fdd66b0d_0"] > .ResultCardstyled__ResultCardActions-sc-vsw8q3-5 > .Stack__StyledStack-sc-oaff2v-0 > [data-test="BookingButton"] > [role="none"] > .ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0'
      ).click({ animationDistanceThreshold: 20 }, { multiple: true });
      cy.get('[data-test="MagicLogin-SignInButton"]').click({ multiple: true });
      cy.get(
        '[data-test="ModalCloseButton"] > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1r81o9a-0 > .ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-8rx3cv-0 > .Icon__StyledIcon-sc-1det6wr-0'
      ).click({ multiple: true });
    });
  });
});
