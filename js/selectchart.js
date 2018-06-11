

// $("#chart_div1").hide
$(".execute").on("click", function(){
    $("#panel2").show();})


$("#execute1").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[0].checked) {
            $("#chart1").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[1].checked) {

            $("#chart2").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[2].checked) {

            $("#chart3").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[3].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[4].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[0].checked && checkboxes[1].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }

        else if(checkboxes[0].checked && checkboxes[2].checked) {

            $("#chart8").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart7").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[0].checked && checkboxes[3].checked) {

            $("#chart9").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart7").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[0].checked && checkboxes[4].checked) {

            $("#chart10").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[1].checked && checkboxes[2].checked) {

            $("#chart11").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
    }

});







$("#execute2").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[5].checked) {
            $("#chart1").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[6].checked) {

            $("#chart2").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[7].checked) {

            $("#chart3").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[8].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[5].checked && checkboxes[6].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[5].checked && checkboxes[7].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();

            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[5].checked && checkboxes[8].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }

        else if(checkboxes[5].checked && checkboxes[6].checked && checkboxes[7].checked) {

            $("#chart8").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart7").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[5].checked && checkboxes[6].checked && checkboxes[7].checked && checkboxes[8].checked) {

            $("#chart9").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart7").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[6].checked && checkboxes[7].checked) {

            $("#chart10").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[6].checked && checkboxes[8].checked) {

            $("#chart11").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
    }

});









$("#execute3").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[9].checked) {
            $("#chart1").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[10].checked) {

            $("#chart2").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[11].checked) {

            $("#chart3").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[12].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[9].checked && checkboxes[10].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[9].checked && checkboxes[11].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();

            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[9].checked && checkboxes[12].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }

        else if(checkboxes[9].checked && checkboxes[10].checked && checkboxes[11].checked) {

            $("#chart8").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart7").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[9].checked && checkboxes[10].checked && checkboxes[11].checked && checkboxes[12].checked) {

            $("#chart9").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart7").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[10].checked && checkboxes[11].checked) {

            $("#chart10").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[10].checked && checkboxes[12].checked) {

            $("#chart11").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[10].checked && checkboxes[11].checked && checkboxes[12].checked) {

            $("#chart12").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
        else if(checkboxes[11].checked && checkboxes[12].checked) {

            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart11").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
    }

});







$("#execute4").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[13].checked) {
            $("#chart1").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[14].checked) {

            $("#chart2").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[15].checked) {

            $("#chart3").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[13].checked && checkboxes[14].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[13].checked && checkboxes[15].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[14].checked && checkboxes[15].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();

            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[13].checked && checkboxes[14].checked && checkboxes[15].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        }
    }

});







$("#impfarm").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[13].checked) {
            $("#chart15").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart1").hide();
        } else if(checkboxes[14].checked) {

            $("#chart14").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart2").hide();
            $("#chart15").hide();
        } else if(checkboxes[15].checked) {

            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart3").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[0].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[1].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[2].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();

            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[3].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[4].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart7").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[5].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart7").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[6].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart7").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[7].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[8].checked) {

            $("#chart8").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart7").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[9].checked) {

            $("#chart9").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart7").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[10].checked) {

            $("#chart10").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[11].checked) {

            $("#chart11").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[12].checked) {

            $("#chart12").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart7").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[13].checked) {

            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart7").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }
        else {
            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart7").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }

    }

});


















$("#impdc").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[8].checked) {
            $("#chart15").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart1").hide();
        } else if(checkboxes[9].checked) {

            $("#chart14").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart2").hide();
            $("#chart15").hide();
        } else if(checkboxes[10].checked) {

            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart3").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[11].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[12].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[13].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();

            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[14].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[7].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart7").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[6].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart7").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[5].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart7").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[4].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[3].checked) {

            $("#chart8").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart7").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[2].checked) {

            $("#chart9").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart7").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[1].checked) {

            $("#chart10").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[0].checked) {

            $("#chart11").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[15].checked) {

            $("#chart12").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart7").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }
        else {
            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart7").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }

    }

});







$("#impenrgy").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[13].checked) {
            $("#chart15").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart1").hide();
        } else if(checkboxes[14].checked) {

            $("#chart14").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart2").hide();
            $("#chart15").hide();
        } else if(checkboxes[15].checked) {

            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart3").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[0].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[1].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[2].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();

            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[3].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[4].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart7").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[5].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart7").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[6].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart7").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[7].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[8].checked) {

            $("#chart8").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart7").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[9].checked) {

            $("#chart9").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart7").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[10].checked) {

            $("#chart10").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[11].checked) {

            $("#chart11").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[12].checked) {

            $("#chart12").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart7").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[13].checked) {

            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart7").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }
        else {
            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart7").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }

    }

});






















$("#impfp").on("click", function(){

    checkboxes = $(".form-check-input");

    for(let i=0;i<checkboxes.length;i++){

        if(checkboxes[0].checked) {
            $("#chart12").show();

            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart15").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart1").hide();
        } else if(checkboxes[2].checked) {

            $("#chart14").show();
            $("#chart1").hide();

            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart2").hide();
            $("#chart15").hide();
        } else if(checkboxes[1].checked) {

            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();

            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart3").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[3].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();

            $("#chart5").hide();
            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[4].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();

            $("#chart6").hide();
            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[6].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();

            $("#chart7").hide();
            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[5].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[7].checked) {

            $("#chart4").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart7").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();

        } else if(checkboxes[8].checked) {

            $("#chart5").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart7").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[10].checked) {

            $("#chart6").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart7").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[9].checked) {

            $("#chart7").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[11].checked) {

            $("#chart8").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart7").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[12].checked) {

            $("#chart9").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart7").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[14].checked) {

            $("#chart10").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart7").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[15].checked) {

            $("#chart11").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart7").hide();
            $("#chart12").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        } else if(checkboxes[13].checked) {

            $("#chart12").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart7").hide();
            $("#chart13").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }
        else {
            $("#chart13").show();
            $("#chart1").hide();
            $("#chart2").hide();
            $("#chart3").hide();
            $("#chart4").hide();
            $("#chart5").hide();
            $("#chart6").hide();

            $("#chart8").hide();
            $("#chart9").hide();
            $("#chart10").hide();
            $("#chart11").hide();
            $("#chart12").hide();
            $("#chart7").hide();
            $("#chart14").hide();
            $("#chart15").hide();
        }

    }

});






















$(".clear").on("click", function(){


    // Uncheck #x
    $( ".form-check-input" ).prop( "checked", false );

})






$(".execute").on("mouseover", function(){

    $(".execute").css("color", "red");

})

$(".execute").on("mouseout", function(){

    $(".execute").css("color", "black");

})


$(".clear").on("mouseover", function(){

    $(".clear").css("color", "red");

})

$(".clear").on("mouseout", function(){

    $(".clear").css("color", "black");

})