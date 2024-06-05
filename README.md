# Barbie Dream Closet

![barbieERD](https://i.imgur.com/BvYY56Y.png)
> One barbie doll can have multiple outfits.


![wireframing](https://i.imgur.com/CpaSSA6.png)
> Wireframe
## User Stories:

As a Barbie enthusiast, I want to be able to browse, manage, and customize my virtual Barbie doll collection, including their outfits and accessories, so that I can curate and showcase my unique Barbie style.

* Opening the page,  I can view a dashboard displaying my Barbie doll collection.
* I can click on a Barbie doll to view more details, such as its description and associated outfits and accessories.
    * to view more descriptions, i click on a learn more button and the information i want appears 
* From the doll detail page, I can add new outfits and accessories to the Barbie doll's collection or remove existing ones. 
    * i can see all outfits and accessories on the side of the page
* I can edit the details of a Barbie doll, including its name, style, release year, and description.
* I can delete a Barbie doll from my collection, along with all its associated outfits and accessories, if desired.
* I can search for specific Barbie dolls by name, style, or release year to quickly locate them in my collection.
    * to singal out the barbie doll, it becomes highlighted 
* When adding a new outfit or accessory, I can specify its name, type, color, and description, ensuring accurate organization and categorization within my collection.

## Tasklist 

### Friday

* setup seed, model, db files
* start on controllers

### By Monday

* finish backend controllers and server.js
* pull barbie graphics  

### Monday + Tuesday 

* work on main page front end + functionality 

### Wednesday 

* work on barbie page + functionality 

### Thursday 

* tie up loose ends 


# Research
* [how to clone images on click](https://www.w3schools.com/jsref/met_node_clonenode.asp)
* used chatgpt to help me format my cloned variable 
> code given 

    const existingClones = document.querySelectorAll('.cloned-accessory');
    const leftOffset = existingClones.length * 100; // Adjust 100 as needed
    clone.style.left = `${leftOffset}px`; // Adjust px as needed

    // Add a class to identify cloned elements
    clone.classList.add('cloned-accessory');

    document.body.appendChild(clone);
