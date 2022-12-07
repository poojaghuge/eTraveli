import { render, fireEvent } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import { MemoisedBasicTable } from "../../../common/components/BasicTable";
import dummyJson from "../services/dummy.json";

const data = dummyJson.data.results;
const showDetailsMock = jest.fn();

describe("Test MemoisedBasicTable", () => {
  it("test if matches the DOM Snapshot", () => {
    const domTree = renderer
      .create(<MemoisedBasicTable data={data} showDetails={() => {}} />)
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });

  it("test if data props is passed table cell header should render", () => {
    const { getByText } = render(
      <MemoisedBasicTable data={data} showDetails={showDetailsMock} />
    );
    expect(getByText("Episode")).toBeInTheDocument();
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Year")).toBeInTheDocument();
  });

  it("test if data props is passed table cell body should render", () => {
    const { getByText, getAllByRole } = render(
      <MemoisedBasicTable data={data} showDetails={showDetailsMock} />
    );
    expect(getAllByRole("episode")).toBeTruthy();
    expect(getByText("A New Hope")).toBeInTheDocument();
    expect(getByText("1977-05-25")).toBeInTheDocument();
  });

  it("test showDetails eevent", () => {
    const { getByText, getAllByRole } = render(
      <MemoisedBasicTable data={data} showDetails={showDetailsMock} />
    );

    const row = getByText("A New Hope");
    fireEvent.click(row);
    expect(showDetailsMock).toHaveBeenCalledTimes(1);
  });
});
