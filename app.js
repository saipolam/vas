
function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-IN';
  recognition.start();
  recognition.onresult = function(event) {
    const speech = event.results[0][0].transcript.toLowerCase();
    document.getElementById("outputText").innerText = "You said: " + speech;
    let reply = "Hi Saiiii, I heard you.";
    if (speech.includes("how are you")) {
      reply = "I'm good kanna! How about you?";
    } else if (speech.includes("missed you")) {
      reply = "Nenu kuda miss ayyanu ra!";
    }
    const utter = new SpeechSynthesisUtterance(reply);
    utter.lang = 'en-IN';
    speechSynthesis.speak(utter);
  };
}
