document.getElementById("funButton").addEventListener("click", function() {
    const messages = ["You're awesome! 🎉", "Keep coding! 🚀", "Hack the world! 💻", "Innovation starts with you! 💡"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
});
