import React from "react";
import {
  getByTestId,
  getByText,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  getByText(/checkout form/i);
  // failing test below
  //   getByText("checkout form");
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const checkout = screen.getByText("Checkout");

  const firstName = screen.getByText(/first name/i).querySelector("input");
  const lastName = screen.getByText(/last name/i).querySelector("input");
  const address = screen.getByText(/address/i).querySelector("input");
  const city = screen.getByText(/city/i).querySelector("input");
  const state = screen.getByText(/state/i).querySelector("input");
  const zip = screen.getByText(/zip/i).querySelector("input");

  fireEvent.change(firstName, { target: { value: "Tony" } });
  fireEvent.change(lastName, { target: { value: "Sorensen" } });
  fireEvent.change(address, { target: { value: "1910 E. Montana Ave." } });
  fireEvent.change(city, { target: { value: "Coeur d'Alene" } });
  fireEvent.change(state, { target: { value: "Id" } });
  fireEvent.change(zip, { target: { value: "83814" } });
  expect(firstName.value).toBe("Tony");
  expect(lastName.value).toBe("Sorensen");
  expect(address.value).toBe("1910 E. Montana Ave.");
  expect(city.value).toBe("Coeur d'Alene");
  expect(state.value).toBe("Id");
  expect(zip.value).toBe("83814");
  fireEvent.click(checkout);
  expect(screen.getByTestId("successMessage")).toBeInTheDocument();
  //   failing test below
  //   expect(screen.getByTestId("successMessage")).not.toBeInTheDocument();
});
