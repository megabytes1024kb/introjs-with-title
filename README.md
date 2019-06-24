# Intro.js Dialog With Heading Text and Style

> Better introductions for websites and features with a step-by-step guide for your projects.

# Where to get 
You can obtain your local copy of Intro.js from:

**1)** You can get from original github repository, using ```git clone https://github.com/usablica/intro.js.git```

**2)** You can simpley download zip or clone the current github repository


## Newly Added feature

**1)** `data-title` attribute added for the Dialog Header Title(Heading Text)

## How to use
Intro.js can be added to your site in three simple steps:

**1)** Include `intro.js` and `introjs.css` in your page.

**2)** Add `data-intro`, `data-title` and `data-step` to your HTML elements. To add hints you should use `data-hint` attribute.

For example:

```html
<a href='http://google.com/' data-intro='Hello step one!'></a>
````

See all attributes [here](https://introjs.com/docs/intro/attributes/).

**3)** Call this JavaScript function:
```javascript
introJs().start();
````
