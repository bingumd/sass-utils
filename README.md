# @bingumd/sass-utils

A comprehensive and flexible utility-first styling solution.

## Features

- Concise classnames
- Built with sass
- Responsive Design 
- Easy to customize
- Easy to extends
- Hover, Focus, & Other States

## Installation

##### Yarn

```sh
yarn add @bingumd/sass-utils
```

##### Npm

```sh
yarn install @bingumd/sass-utils
```

## :gear: Usage

```scss
// Config
@use '@bingumd/utils' with (
    $border-style-enable: false,
    $color-extend: (
        black: #000000,
        white: #ffffff,
        dark: (
            base: #222222,
            soft: #999999,
        ), 
    ),
    $color-variants: (
        'hover',
        'active'
    ),
    ...
);

// Build utils
@include utils.init();
```
