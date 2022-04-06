# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned more about maniputating DOM elements through loops, classes working with functions as well as gaining more experience with Flex and root variables in CSS 

The first iteration of the code individually set a variable for each id and then individually had a listening event attached within which all of the other required elements were included.  

round 1
/ two.addEventListener('click', () => {
//     let selectValue = 'two';
//     ratingNumber = 2;
//     // ratingArray = ratingArray.filter(e => e !== 'two');
//     // one.classList.remove('selected');
//     // two.classList.add('selected');
//     // three.classList.remove('selected');
//     // four.classList.remove('selected');
//     // five.classList.remove('selected');
//     return ratingNumber;
// });

round 2
five.addEventListener('click', () => {
    ratingNumber = 5;
    styleBtn(five);
    return ratingNumber;
});

round 3
This is the finished product you see on githib.

I am proud that the JS is scalable to manually add more buttons in the future.  


### Continued development

I will continue getting more experience with loops, functions and DOM manipulation.  I hope to refactor the code to utilize objects at some point.  

### Useful resources
Reviewing other completed projects on github, MDN and experimenting.

## Author

- Website - [Charlie Warner](https://www.your-site.com)
- Frontend Mentor - [@charleswarner](https://www.frontendmentor.io/profile/charleswarner)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
