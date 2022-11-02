//1. querySelectorAll
//#ordered-dinos - parent id

let dinoList1 = document.querySelectorAll('#ordered-dinos li');

function olStrike(){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].addEventListener('click', function(){
            console.log(dinoList1[i].innerText);
            dinoList1[i].style.textDecoration = "line-through";
        })
    }
}

olStrike();

//unordered-dinos - parent div

let dinoList2 = document.querySelectorAll('#unordered-dinos');

//fade
function fadeEffect (){
for(let i = 0; i < dinoList2.length; i++){
    dinoList2[i].addEventListener('click', function(){
        console.log(dinoList2[i].innerText);
        dinoList2[i].style.opacity = '0';
    })
}
}
fadeEffect();
//#row

let rowImage = document.querySelectorAll('#row img')

function imgCollapse (){
for(let i = 0; i < rowImage.length; i++){
    rowImage[i].addEventListener('click', function(){
       console.log(rowImage[i].innerText);
       rowImage[i].style.width = "0";
    })
}
}
imgCollapse();

//4.
let meteor = document.querySelector('#destroy-all');

meteor.addEventListener('click', function(){
    console.log('Images disappear!');
    alert("Wipe out all of the dinosaurs!");
    
    //apply strikethrough
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].style.textDecoration = 'line-through';
    }

    //apply fade
    for(let i = 0; i < dinoList2.length; i++){
        dinoList2[i].style.opacity = '0';
    }

    //apply
    for(let i = 0; i < rowImage.length; i++){
        rowImage[i].style.width = '0px';
    }
   
});

