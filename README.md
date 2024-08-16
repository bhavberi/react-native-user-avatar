# React Native User Avatar

[![npm version](https://img.shields.io/npm/v/@bhavberi/react-native-user-avatar.svg?style=flat-square)](https://www.npmjs.com/package/@bhavberi/react-native-user-avatar)
[![npm downloads](https://img.shields.io/npm/dm/@bhavberi/react-native-user-avatar.svg?style=flat-square)](https://www.npmjs.com/package/@bhavberi/react-native-user-avatar)
[![Build Status](https://travis-ci.org/bhavberi/react-native-user-avatar.svg?branch=master)](https://travis-ci.org/bhavberi/react-native-user-avatar)

![Coverage lines](./badges/badge-lines.svg)
![Coverage functions](./badges/badge-functions.svg)
![Coverage branches](./badges/badge-branches.svg)
![Coverage statements](./badges/badge-statements.svg)

A bare-bones user avatar display with support for falling back to using the user's initials on a colored background as the avatar.
Based on the great library for React: https://github.com/wbinnssmith/react-user-avatar, and ported to React Native.

|                            iOS Screenshot                            |                              Android Screenshot                              |
| :------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| <img src="./screenshots/ios.png" title="iOS Screenshot" width="250"> | <img src="./screenshots/android.png" title="Android Screenshot" width="250"> |

## Installation

`npm install --save @bhavberi/react-native-user-avatar` or `yarn add @bhavberi/react-native-user-avatar`

## Usage

The fallback avatar's color may be set by passing in the `bgColor` prop, or you can customize the range of colors
used by passing in an array of `bgColors`. The component uses a simple calculation to consistently use the same
color for the same user's name every time.

### UserAvatar Component

```jsx
import UserAvatar from '@bhavberi/react-native-user-avatar';

const App: () => React$Node = () => {
  return (
    <>
    ...
    <View>
      <UserAvatar size={100} name="Bhav Beri" />
      <UserAvatar size={100} name="Bhav Beri" src="https://dummyimage.com/100x100/000/fff" />
      <UserAvatar size={50} name="Bhav Beri" bgColors={['#ccc', '#fafafa', '#ccaabb']}/>
      <UserAvatar size={50} name="Bhav Beri" />
      <UserAvatar size={50} name="Bhav Beri" bgColor="#000" />
    </View>
    ...
```

### UserAvatar Props

| Attribute              | Type            | Default Value | Description                                                                       |
| ---------------------- | --------------- | ------------- | --------------------------------------------------------------------------------- |
| `name`                 | string          | `'Bhav Beri'` | name used for generating initials                                                 |
| `src`                  | string          | `undefined`   | source image on the internet to display                                           |
| `bgColor`              | string          | `undefined`   | custom background color for the initials                                          |
| `bgColors`             | array           | see index.js  | custom array of background colors to choose from                                  |
| `textColor`            | string          | `'#fff'`      | custom text color for the initials font                                           |
| `size`                 | number          | `32`          | custom size that defines both the avatar and the initials font size               |
| `imageStyle`           | object          | `undefined`   | custom image styling to append to the `Image` component displays the source image |
| `textStyle`            | object          | `undefined`   | custom text styling to append to the `Text` component that displays initials      |
| `style`                | object          | `undefined`   | custom style to append to the `UserAvatar` component container                    |
| `borderRadius`         | number          | `size * 0.5`  | custom border radius for the component                                            |
| `component`            | React.Component | `undefined`   | custom component to display instead of initials or source image                   |
| `ignoreImageTypeCheck` | boolean         | `false`       | ignore image type check in `content-type` header when `src` is provided.          |

## Contributing

Contributions are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md) if you like to contribute to this library.

## Credits

[@wbinnssmith](https://github.com/wbinnssmith/) for creating [https://github.com/wbinnssmith/react-user-avatar](react-user-avatar)

This is a fork from https://github.com/avishayil/react-native-user-avatar with some improvements.

## License

MIT
