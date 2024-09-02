---
sidebar_position: 2
---

# Customize Config

You can change the config file in *config.js*

```js
const Config = {
    'default': {
        endfix: 'Page.tsx',
        componentFileExt: '.tsx',
        testFileExt: '.test.tsx',
        targetFolder: 'src'
    }
}
```

if you want use testarossa for another stack framework like (Angular, Vue, etc).
change the configuration on default

```js
// vue example
const Config = {
    'default': {
        endfix: '.vue',
        componentFileExt: '.vue',
        testFileExt: '.spec.js',
        targetFolder: 'src'
    }
}
```

*adjust to the file extension on your project*