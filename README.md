# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

- Desktop Screenshot
![Desktop Screenshot Solution](./Solution-Screenshot(Desktop).png)



### Links

- Frontend Mentor Solution URL: [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/results-summary-component-solution-IChmlQT7o1)
- Live Site URL: [Live Hosted Website](https://mharvel13.github.io/Results-Summary-Component-Main/)
- Github Solution Repository URL: [Github Hosted Codes](https://github.com/Mharvel13/Results-Summary-Component-Main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

#### FETCHING DATA FROM A JSON FILE USING FETCH API IN JS

The Fetch method in Javascript was used to load data from the JSON file and display the data in the HTML of the project.
```js

let html_display = document.getElementById("json-display");

fetch("./data.json")
    .then((response) => response.json())

    .then((data) => {
        let json_data = data;

        json_data.forEach((result) => {
            const div = document.createElement("div");

            div.classList.add("individual-results");

            div.innerHTML = `
            <div class='result-name'>

                <img src=${result.icon} alt="image-icon"/>
                <p class="result-category">${result.category}</p>
            </div>
            <div>
                <p class="score">
                <span class="score-result">${result.score}</span> / 100
                </p>
            </div>
            `;

            html_display.appendChild(div);
        });
    });

```


### Useful resources

I found the following resources useful during the course of completing this task

- [How to Read a JSON File in JavaScript – Reading JSON in JS](https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/) - This article helped me learned and understand how to read a JSON file  data and the various methods you can use to acheive the task  

- [Display JSON Data in HTML Page](https://www.tutorialstonight.com/display-json-data-in-html-page) - This is an amazing article which helped me understood how to pass the data from the JSON file and display it in HTML output. 


## Author


- GitHub Profile - [Mharvel13](https://github.com/Mharvel13)
- Frontend Mentor - [Marvel Victor](https://www.frontendmentor.io/profile/Mharvel13)
- Twitter - [Marvel](https://twitter.com/Mharvel_O)


