document.getElementById("dugme").addEventListener('click', function validacija(){
                var x = document.forms["form"]["name"].value;
                if (x == "") {
                    alert("Niste uneli ime i prezime!");
                    return;
                }
                input = document.forms["form"]["email"].value;
                atpos = input.indexOf("@");
                dotpos = input.lastIndexOf(".");
                if (input == "" || atpos < 1 || dotpos - atpos < 2) {
                    alert("Niste uneli odgovarujuci email!");
                    return;
                }
                x = document.forms["form"]["poruka"].value;
                if (x == "") {
                    alert("Niste uneli poruku!");
                    return;
                }


                var modal = document.getElementById("modal");

    var dugme = document.getElementById("dugme");

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
            
})