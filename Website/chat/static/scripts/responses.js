function getBotResponse(input) {
    var qestions = document.getElementById(chatbox)
    //rock paper scissors
    if (input == "1") {
        return "Our project is about ecotouresim in protected areas through Egypt, you can enjoy the varaity of the activites there.";
    } else if (input == "2") {
        return "You can choose any of the 30 protected areas available from north to south Egypt through Summer or Winter.";
    } else if (input == "3") {
        return "Our team is a group of ITI graduates, passionate about GIS, you can contact them through the team page available on the website.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}