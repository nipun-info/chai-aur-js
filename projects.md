# Projects related to DOM

## project link
[Click here](https://github.com/nipun-info/chai-aur-js/)

#Solution code

## project 1
```javascipt
  console.log("Nipun")
// Color Scheme Switcher
const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})
```
