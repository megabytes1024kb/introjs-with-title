# Intro.js Dialog With Heading Text and Style

> Better introductions for websites and features with a step-by-step guide for your projects.

# Where to get 
You can obtain your local copy of Intro.js from:

**1)** You can get from original github repository, using ```git clone https://github.com/usablica/intro.js.git```

**2)** You can simply download zip or clone the current github repository, using ```git clone https://github.com/megabytes1024kb/introjs-with-title.git```


## Newly Added feature

**1)** `data-title` attribute added for the Dialog Header Title(Heading Text)
<p align="center"><img src="https://github.com/megabytes1024kb/introjs-with-title/blob/master/introjs-header-title/intro-with-title.png"></p>



## How to use
Intro.js can be added to your site in three simple steps:

**1)** Include `intro.js` and `introjs.css` in your page.

**2)** Add `data-intro`, `data-title` and `data-step` to your HTML elements. To add hints you should use `data-hint` attribute.

The below code shows the use of introJs in Java Script
```javascript
	  //initialize instance
      var introj = introJs();

	  //set Steps config in the form of Array
	  introj.setOptions({
	    steps: [
	      {
	        element: '#step1',
	        intro: "This is a tooltip!",
	        title: 'Step 1'
	      },
	      {
	        element: '#step2',
	        intro: "Ok, wasn't that fun?",
	        position: 'right',
	        title: 'Step 2'

	      },
	      {
	        element: '#step3',
	        intro: 'More features, more fun.',
	        position: 'left',
	        title: 'Step 3'
	      },
	      {
	        element: '#step4',
	        intro: 'Another step.',
	        position: 'auto',
	        title: 'Step 4'
	      },
	      {
	        element: '#step5',
	        intro: 'Get it, use it.',
	        position: 'left',
	        title: 'Step 5'
	      },
	    ]
	  });

	  // Run the intro - appear dialog with details.
	  introj.start();
````


For example:

```html
<a href='http://google.com/' data-intro='Hello step one!' data-title='Google'></a>
````

See all attributes [here](https://introjs.com/docs/intro/attributes/).

> Newly added attribute is ```data-title``` - use to show heading of the introjs dialog box

**3)** Call this JavaScript function:
```javascript
introJs().start();
````

There are two example given in this repository
*1* With basic ```data-title``` attribute
*2* With java script array, using ```setOptions()``` function which called by script

## Documentation

Please visit [Documentation](http://introjs.com/docs).


## Author
**Manoj Bawane**

- [Twitter](https://twitter.com/manojbawane03)
- [Github](https://github.com/megabytes1024kb)

## Original Authors

**Afshin Mehrabani**

- [Twitter](https://twitter.com/afshinmeh)
- [Github](https://github.com/afshinm)
- [Personal page](http://afshinm.name/)

**Benjamin J DeLong**

- [Twitter](https://twitter.com/bozdoz)
- [Github](https://github.com/bozdoz)
- [Personal page](https://bozdoz.com/)
