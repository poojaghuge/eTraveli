import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import Header from "../../../common/components/Header";

describe("Test Header", () => {
  it("test if matches the DOM Snapshot", () => {
    const domTree = renderer.create(<Header />).toJSON();
    expect(domTree).toMatchSnapshot();
  });

    it("test if selected prop is not passed default div should render", () => {
    const {getByText} = render(<Header />);
    const element = getByText('Movie App');
    expect(element).toBeInTheDocument();
  });

});
