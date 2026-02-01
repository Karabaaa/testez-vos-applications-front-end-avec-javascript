/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import { router } from "./index.js";

describe("Router Integration Test Suites", () => {
  it("should render the SignIn page on default route", async () => {
    document.body.innerHTML = '<div id="root"></div>';
    await router();
    expect(getByTestId(document.body, "sign-in-form-title")).toHaveTextContent(
      "Veuillez vous connecter",
    );
  });
  it("should render the Home Sensors page", async () => {
    document.body.innerHTML = '<div id="root"></div>';
    document.location = "/#/home";
    await router();
    expect(getByTestId(document.body, "home-sensors-title")).toHaveTextContent(
      "Vos capteurs",
    );
  });
  it("should render the Facade Details Sensors page", async () => {
    document.body.innerHTML = '<div id="root"></div>';
    document.location = "/#/facade-details";
    await router();
    expect(getByTestId(document.body, "sensor-detail-title")).toHaveTextContent(
      "Détails du capteur",
    );
  });
  it("should render the Add Sensor page", async () => {
    document.body.innerHTML = '<div id="root"></div>';
    document.location = "/#/add-sensor";
    await router();
    expect(getByTestId(document.body, "add-sensor-title")).toHaveTextContent(
      "Ajout d'un nouveau capteur",
    );
  });
});
