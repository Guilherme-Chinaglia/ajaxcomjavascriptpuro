
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {


    // $.ajax({
    //     method: "GET",
    //     url: "lista.php"
    //     // data: { name: "John", location: "Boston" }
    // })
    //     .done(function (msg) {
    //         alert("Data Saved: " + msg);
    //     });

    //SHORTHAND = MAIS ABREVIADO

    // $.get("lista.php", function (data) {
    //     alert("Data Loaded: " + data);
    // });


    //SHORTHAND = Enviando dados   

    // $.get("lista.php", { name: "John", time: "2pm" })
    //     .done(function (data) {
    //         alert("Data Loaded: " + data);
    //     });




    //EXEMPLO UTILIZANDO JAVASCRIPT PURO


    // var ajax = new XMLHttpRequest();

    // ajax.open("GET", "lista.php"); //POST

    // ajax.responseType = "json";

    // // ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    // ajax.send(); //"nome=guilherme&idade=32" (Exemplo com POST)

    // ajax.addEventListener("readystatechange", function () {


    //     if (ajax.readyState === 4 && ajax.status === 200) {

    //         console.log(ajax);

    //         console.log(ajax.response);

    //         var resposta = ajax.response;
    //         var lista = document.querySelector(".list");

    //         for (var i = 0; i < resposta.length; i++) {


    //             lista.innerHTML += "<li>" + resposta[i] + "</li>";
    //         }
    //     }

    // });


    //EXEMPLO UTILIZANDO O JQUERY

    $.get("lista.php", function (data) {

        var resultado = JSON.parse(data);

        console.log(resultado);

        for (var i = 0; i < resultado.length; i++) {

            $(".list").append("<li>" + resultado[i] + "</li>");
        }
    });

})


// ajax.onreadystatechange = function () {

// }
