import React from "react";
import Apple from "./Apple";
import renderer from "react-test-renderer";

test("Apple", () => {
  const component = renderer.create(<Apple />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.alt).toBe("Apple");
});
