function typeMessage(text, elementId, speed = 30) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = "";

    let typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// NEXT SCREEN FUNCTION
function nextScreen(screenNumber) {
    // Get the music element
    let music = document.getElementById("bgMusic");

    // Play music only on Screen 2 if paused
    if(screenNumber === 2 && music.paused){
        music.play().then(() => console.log("Music is playing 🎶"))
             .catch(err => console.log("Music blocked:", err));
    }

    

    // Hide all screens
    let screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));

    // Show the next screen
    document.getElementById("screen" + screenNumber).classList.add("active");

    // Typing effect for Screen 2
    if(screenNumber === 2){
        typeMessage(`Happy Birthday to the woman who has completely stolen my heart. Every day with you feels like a blessing I never saw coming, and loving you has become the sweetest part of my life.

You make everything better: my days, my moods, my world. Your smile melts me, your voice calms me, and your love gives me a kind of happiness I can’t even put into words. I’m so grateful for you, for your heart, for your softness, and for the way you care in a way no one else ever has.

On your special day, I hope you feel wrapped in love not just from everyone around you, but especially from me. Because you are my everything. My girl. My peace. My favorite person to talk to, laugh with, dream with, and hold onto.

I pray this year brings you joy as beautiful as your soul and moments as unforgettable as the love you’ve given me. Thank you for being you, for choosing me, for loving me, and for making my heart feel at home.

Happy Birthday, my love.
I adore you more than you know. 🥰❤️ 😊`, "messageText", 30);
    } else {
        // Pause music if leaving Screen 2
        music.pause();
    }
}