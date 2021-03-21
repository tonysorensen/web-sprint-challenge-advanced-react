import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
const {getByText} = render(<CheckoutForm/>)

getByText(/checkout form/i)
//getByText(/checkout fork/i) fails
});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm/>)

    const checkout = screen.getByText("Checkout")
    fireEvent.click(checkout)

});
