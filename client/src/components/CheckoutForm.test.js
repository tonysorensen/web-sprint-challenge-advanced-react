import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
const {getByText} = render(<CheckoutForm/>)

getByText(/checkout form/i)
//getByText(/checkout fork/i) fails
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
  
    fireEvent.change(firstName, { target: { value: "Jeremiah" } });
    fireEvent.change(lastName, { target: { value: "Johnson" } });
    fireEvent.change(address, { target: { value: "Up in the mountains" } });
    fireEvent.change(city, { target: { value: "Denver" } });
    fireEvent.change(state, { target: { value: "Co" } });
    fireEvent.change(zip, { target: { value: "80219" } });
    expect(firstName.value).toBe("Jeremiah");
    expect(lastName.value).toBe("Johnson");
    expect(address.value).toBe("Up in the mountains");
    expect(city.value).toBe("Denver");
    expect(state.value).toBe("Co");
    expect(zip.value).toBe("80219");
    fireEvent.click(checkout);
    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
    //  failing test below
    //expect(screen.getByTestId("successMessage")).not.toBeInTheDocument();
});