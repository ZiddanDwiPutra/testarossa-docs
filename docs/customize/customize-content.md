---
sidebar_position: 1
---

# Customize Content

You can change the content in *custom-content.js*

```js
const getContent = (componentName, importPath) => {
    return `Your Custom Content Here`
} 

module.exports = { 
    getContent    
}
```

if you want clear custom content just change and set return undefined in getContent Method

```js
const getContent = (componentName, importPath) => {
    return undefined
} 

module.exports = { 
    getContent    
}
```

*Need to run *npm run build* if you has been set in environment variable*

*docs ([build and put in environment](/docs/general/build-and-put-env))*