const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const message =
    document.getElementById("message");


let yesSize = 18;

let noClicks = 0;


/* =====================================
   TEXT THAT CHANGES
===================================== */

const messages = [

    "Ayaw mo?",

    "Sure ka?",

    "Sure kana talaga?",

    "Ayaw pa e no",

    "Pabebe yarn",

    "Bubuhatin ka naman e",

    "Arte arte pa",

    "NO is running away! 🏃",

    "You can't catch NO! 🎮",

    "YES is getting HUGE! 🔥",

    "WARNING! YES LEVEL UP! ⚡",

    "FINAL BOSS: YES! 💥",

    "THE SCREEN IS ALMOST FULL! 🎮",

    "YOU HAVE ACTIVATED MEGA YES! 🔥"

];


/* =====================================
   NO BUTTON
===================================== */

noBtn.addEventListener(
    "click",
    function () {

        noClicks++;


        /* CHANGE TEXT */

        const index =
            Math.min(
                noClicks - 1,
                messages.length - 1
            );


        message.style.opacity = "0";


        setTimeout(
            function () {

                message.textContent =
                    messages[index];

                message.style.opacity =
                    "1";

            },
            150
        );


        /* =================================
           YES GETS BIGGER
        ================================= */

        yesSize += 15;


        yesBtn.style.fontSize =
            yesSize + "px";


        yesBtn.style.padding =
            `${yesSize}px ${yesSize * 2}px`;


        /* =================================
           NO GOES EVERYWHERE
        ================================= */

        noBtn.style.position =
            "fixed";


        const maxX =
            window.innerWidth -
            noBtn.offsetWidth -
            20;


        const maxY =
            window.innerHeight -
            noBtn.offsetHeight -
            20;


        const randomX =
            Math.random() * maxX;


        const randomY =
            Math.random() * maxY;


        noBtn.style.left =
            Math.max(
                10,
                randomX
            ) + "px";


        noBtn.style.top =
            Math.max(
                10,
                randomY
            ) + "px";


        /* =================================
           PAYAG NA KASI TAKES THE WHOLE SCREEN
        ================================= */

        if (yesSize >= 120) {

            yesBtn.style.position =
                "fixed";

            yesBtn.style.left =
                "0";

            yesBtn.style.top =
                "0";

            yesBtn.style.width =
                "100vw";

            yesBtn.style.height =
                "100vh";

            yesBtn.style.padding =
                "0";

            yesBtn.style.borderRadius =
                "0";

            yesBtn.style.fontSize =
                "80px";

            yesBtn.style.transform =
                "none";

            yesBtn.textContent =
                "PAYAG KANA KASI";


            noBtn.style.display =
                "none";


            message.style.display =
                "none";
        }

    }
);


/* =====================================
   TARA NA KASI BUTTON
===================================== */

yesBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            "second.html";

    }
);