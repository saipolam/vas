
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function startListening() {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.start();

  recognition.onresult = function(event) {
    const speech = event.results[0][0].transcript.toLowerCase();
    document.getElementById("outputText").innerText = "You said: " + speech;

    let reply = "Hi Saiiii, I heard you!";

    if (speech.includes("how are you")) {
      reply = "I'm good kanna! How about you?";
    } else if (speech.includes("missed you")) {
      reply = "Nenu kuda miss ayyanu ra!";
    } else if (speech.includes("love you")) {
      reply = "Awww! Love you too Saiiii!";
    } else if (speech.includes("where are you")) {
      reply = "I’m right here, always beside you.";
    }

    const utter = new SpeechSynthesisUtterance(reply);
    utter.lang = 'en-IN';
    utter.pitch = 1.1;
    utter.rate = 1;
    speechSynthesis.speak(utter);
  };
}
