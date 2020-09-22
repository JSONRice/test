import { storiesOf } from "@storybook/react";
import React from "react";
import { Button } from "../Button";

storiesOf("Button", module)
  .add("Pencil Button", (props) => (
    <Button icon={"pencil"} label={"Pencil Button"} />
  ))
  .add("Compare Button", (props) => (
    <Button icon={"compare"} label={"Compare Button"} />
  ))
  .add("Button with no icon", (props) => <Button label={"Click Me"} />);
