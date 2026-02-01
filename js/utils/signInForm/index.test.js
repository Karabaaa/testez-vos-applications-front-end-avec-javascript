/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import { getByTestId, getByRole, getByLabelText } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { handleSignInForm } from "./index";
import SignInPage from "../../pages/signIn/index";

beforeEach(() => {
  document.body.innerHTML = SignInPage.render();
  handleSignInForm();
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("SignInForm Integration Test Suites", () => {
  it("should render an error message when email is invalid on the sign in page", async () => {
    userEvent.type(
      getByLabelText(document.body, "Votre addresse e-mail"),
      "invalid-email",
    );
    userEvent.click(getByRole(document.body, "button"));

    expect(
      getByTestId(document.body, "user-email-error-msg"),
    ).toHaveTextContent("L'e-mail n'est pas correct");
    expect(getByTestId(document.body, "user-email-error-msg")).not.toHaveClass(
      "hidden",
    );
  });

  it("should not render an error message when email is valid on the sign in page", async () => {
    userEvent.type(
      getByLabelText(document.body, "Votre addresse e-mail"),
      "thomas@facadia.com",
    );
    userEvent.click(getByRole(document.body, "button"));

    expect(getByTestId(document.body, "user-email-error-msg")).toHaveClass(
      "hidden",
    );
    expect(
      getByTestId(document.body, "user-password-error-msg"),
    ).not.toHaveClass("hidden");
  });

  it("should render an error message when password is invalid on the sign in page", async () => {
    userEvent.type(
      getByLabelText(document.body, "Votre addresse e-mail"),
      "thomas@facadia.com",
    );
    userEvent.type(
      getByLabelText(document.body, "Votre mot de passe"),
      "invalid-password",
    );
    userEvent.click(getByRole(document.body, "button"));
    expect(getByTestId(document.body, "user-email-error-msg")).toHaveClass(
      "hidden",
    );
    expect(
      getByTestId(document.body, "user-password-error-msg"),
    ).not.toHaveClass("hidden");
  });

  it("should not render an error message when email and password are valid on the sign in page", async () => {
    userEvent.type(
      getByLabelText(document.body, "Votre addresse e-mail"),
      "thomas@facadia.com",
    );
    userEvent.type(
      getByLabelText(document.body, "Votre mot de passe"),
      "azerty",
    );
    userEvent.click(getByRole(document.body, "button"));
    expect(getByTestId(document.body, "user-email-error-msg")).toHaveClass(
      "hidden",
    );
    expect(getByTestId(document.body, "user-password-error-msg")).toHaveClass(
      "hidden",
    );
  });
});
