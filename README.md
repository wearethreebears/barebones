# Barebones

Barebones (WIP) is a fully customisable component library for Vue 3 and Nuxt 3, configurable through local config. Local config allows for custom props that can be mapped to component parts (elements). Currently Barebones uses Tailwind classes for example purposes but could use plain CSS or any CSS library. Local config files can be seen in `src/local`. Barebones uses aliases to work both in development within this package and within other applications.

To get a simple understanding of how these files work, see Text or Grid. For more complex components with multiple component parts see Tabs or Modal.
The fastest way to see the components in action is to run the following commands is to clone this package and within the root run the following commands:

```
    yarn && yarn dev
```

Within this package you can also try the scaffolding tool to create your own components:

```
    yarn component:build ComponentName  
```

And remove it with:
```
    yarn component:destroy ComponentName  
```

---

If you'd like to add it to a Nuxt 3 or Vue 3 project there are some extra steps:

```
   yarn add @wearethreebears/barebones
```

Setting up the following aliases locally:

```
    '@barebones-local': './barebones', // This folder can be called what you like but it must be the name of your local config folder
    '@barebones': './node_modules/@wearethreebears/barebones/src',
```

And adding the local config from the package to match your `@barebones-local` alias.

If you're using Nuxt you can update your buildModules for auto component imports:

```
buildModules: ['@wearethreebears/barebones/nuxt'],
```

---

Currently no tests are written for this component library and the documentation is a work in progress and there will likely be breaking changes in future versions.

===NOTE: HelloWorld homepage is for display purposes only, excuse the <br />'s and <hr />s===