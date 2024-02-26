$(document).ready(function() {

    var isWitesMove = true;
    var firstTimer = 0;
    var secondTimer = 0;

    $("#start").click(function() {
        var time = parseInt($("#minutes")[0].value);
        firstTimer = time * 60 + 1;
        secondTimer = time * 60 + 1;
        timer1();
        $(".settings").addClass("hidden");
    })


    $(document).on("click", ".active", function(e) {
        isWitesMove = $(".main")[0].children[0].classList.contains("active");
        console.log(isWitesMove);
        e.stopPropagation();
        $(".player").toggleClass("active");
    });



    function timer1() {
        firstTimer--;
        if(firstTimer <= 0) {
            alert("Time is Up! Black lost the game!");
            return;
        }
        let minutes = parseInt(firstTimer / 60);
        let min_text = minutes < 10 ? "0" + minutes : minutes;
        let seconds = firstTimer % 60;
        let sec_text = seconds < 10 ? "0" + seconds : seconds;
        let text = min_text + ":" + sec_text;
        $("#timer1")[0].innerText = text;
        setTimeout(function() {
            if(isWitesMove) {
                timer2();
            }
            else {
                timer1();
            }
        }, 1000);
    }

    function timer2() {
        secondTimer--;
        if(secondTimer <= 0) {
            alert("Time is Up! White lost the game!");
            return;
        }
        let minutes = parseInt(secondTimer / 60);
        let min_text = minutes < 10 ? "0" + minutes : minutes;
        let seconds = secondTimer % 60;
        let sec_text = seconds < 10 ? "0" + seconds : seconds;
        let text = min_text + ":" + sec_text;
        $("#timer2")[0].innerText = text;
        setTimeout(function() {
            if(isWitesMove) {
                timer2();
            }
            else {
                timer1();
            }
        }, 1000);
    }
});