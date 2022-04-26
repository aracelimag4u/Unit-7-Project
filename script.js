$("button").click(function() {
    let color = $(".questionOne").val();
    let howOld = $(".age").val();
    let name = $(".questionTwo").val();
    let answer = (140 - 135) * howOld;

    $(".fortune-display").append(name + " your hair is " + color + " and you are " + howOld + " years old. You will dye your hair " + answer + " times in the next 50 years!");



});