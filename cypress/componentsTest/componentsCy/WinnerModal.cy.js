/* eslint-disable no-undef */
import React from "react";
import { WinnerModal } from "../../../src/components/WinnerModal";
import { TURNS } from "../../../src/constants";

describe("<WinnerModal />", () => {
  it("renders", () => {
    cy.mount(<WinnerModal winner={TURNS.X} resetGame={() => {}} />);
    cy.get("resetGame").find("button").contains("Empezar de nuevo").click();
  });
});
