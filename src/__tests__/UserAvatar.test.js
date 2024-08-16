/* eslint max-len: 0 */

import "react-native";
import { Image } from "react-native";
import React from "react";
import renderer from "react-test-renderer";

import UserAvatar from "../";

it("should render <UserAvatar /> without anything, default values", () => {
  const tree = renderer.create(<UserAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render <UserAvatar /> with name, without src, default values", () => {
  const tree = renderer.create(<UserAvatar name="Bhav Beri" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render <UserAvatar /> with name, with src", () => {
  jest.useFakeTimers();
  const tree = renderer
    .create(
      <UserAvatar
        name="Bhav Beri"
        src="https://dummyimage.com/100x100/000/fff"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render <UserAvatar /> with name, if src is not an image", () => {
  jest.useFakeTimers();
  const tree = renderer
    .create(
      <UserAvatar
        name="Bhav Beri"
        src="https://github.com/bhavberi/react-native-user-avatar/"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should warn because size is not number", () => {
  const tree = renderer
    .create(<UserAvatar name="Bhav Beri" size="100" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render <UserAvatar /> with name, with custom component", () => {
  const tree = renderer
    .create(
      <UserAvatar
        name="Bhav Beri"
        component={
          <Image
            source={require("./images/rn_logo.png")}
            style={{ width: 50, height: 50 }}
          />
        }
        size={100}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
