/* eslint-disable no-undef */
import React from "react";
import App from "../src/App";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);
    cy.get(".board").find("button").contains("Reset del juego").click();
  });
});
