import { render, fireEvent } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import { MemoisedActionBar } from "../../Movie/ActionBar";

const handleChangeMock = jest.fn();
const handleSortMock = jest.fn();

describe("Test MemoisedActionBar", () => {
  it("test if matches the DOM Snapshot", () => {
    const domTree = renderer
      .create(
        <MemoisedActionBar
          handleChange={handleChangeMock}
          handleSort={handleSortMock}
        />
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  it("test if selected prop is passed then should render search & sort by", () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoisedActionBar
        handleChange={handleChangeMock}
        handleSort={handleSortMock}
      />
    );
    const search = getByPlaceholderText("Type to search...");
    const sortBy = getByText("Sort by...");
    expect(search).toBeInTheDocument();
    expect(sortBy).toBeInTheDocument();
  });
});
