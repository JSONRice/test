import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  test("Renders without crashing", () => {
    const tree = <Button label={"Submit"} onClickCallback={() => {}} />;
    const renderedTree = render(tree);

    expect(renderedTree).toBeTruthy();
  });
});


