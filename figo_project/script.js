const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  btn.textContent = '🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁🚁';
  document.getElementById("pisica").src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzE2YjE0MzVlNWRmMGQ2MTBiMjExYzkwZWMzNWYwYjhkNzA4MGVmZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/f4UO4FOmSX3m0DgLT2/giphy.gif";

});

//sunet figo
const audio = new Audio("https://us-tuna-sounds-files.voicemod.net/7b650266-dfec-42f5-b08c-5feae41ef092-1659920498108.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

audio.addEventListener("ended", function(){
  alert("Vrei sa joci din nou?");
  window.location.reload()
});





// https://us-tuna-sounds-files.voicemod.net/530537b1-41ba-42e0-a8d5-3069a8679a4e-1669093508178.mp3
// https://orangefreesounds.com/wp-content/uploads/2023/04/Cat-voice-sound.mp3?_=1
// https://us-tuna-sounds-files.voicemod.net/7b650266-dfec-42f5-b08c-5feae41ef092-1659920498108.mp3
