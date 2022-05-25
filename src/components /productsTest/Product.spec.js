import React from "react";
import Product from "../Product";
import { render, screen } from "@testing-library/react";

describe("<Product />", () => {
  it("should render these props", () => {
    render(<Product rating={4.5} title={"Iphone"} price={1200.0} />);
    expect(screen.getByText("Title: Iphone")).toBeInTheDocument();
    expect(screen.getByText("Rating: 4.5")).toBeInTheDocument();
    expect(screen.getByText("Price: $1200")).toBeInTheDocument();
  });
});
