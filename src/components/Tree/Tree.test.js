import React from "react";
import Tree from "./Tree";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { store } from "../../store";

test("Tree", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Tree />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
