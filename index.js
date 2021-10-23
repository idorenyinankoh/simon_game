// $(".style").click(function() {
//     var clList = this.classList;
//     clList.add("highlighted");
//     setTimeout(function() {
//         console.log('insideremove');
//         clList.remove("highlighted");
//     }, 200);
// });
// setTimeout(function() {
//     console.log('insideremove');
//     clList.remove("highlighted");
// }, 200);


function highlightBox() {
    var allBoxes = document.querySelectorAll(".style").length;
    var n = Math.floor(Math.random() * allBoxes);
    document.querySelectorAll(".style")[n].classList.add("highlighted");


    // setTimeout(function() {
    //     document.querySelectorAll(".style")[n].classList.remove("highlighted");
    // }, 1000);
    // doing++;

}
var cond = false;
var ft = 'hello';
var clList = '';

function hi() {
    for (let i = 0; i < document.querySelectorAll(".style").length; i++) {

        document.querySelectorAll(".style")[i].addEventListener("click", function() {
            clList = this.classList;
            clList.remove("highlighted");
            cond = true;
            console.log(ft);
            fate();
        });
    }

    fate();
}


function fate() {
    setTimeout(function() {
        if (cond === false) {
            console.log("game over")
        } else if (cond === true) {
            clList.remove("highlighted");
            highlightBox();
            // i = 0;
        }
    }, 3000);
}

highlightBox();
hi();