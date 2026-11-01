// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cada vez que pienso en ti, una sonrisa inevitable se dibuja en mi rostro.", time: 15 },
  { text: "Eres esa casualidad más bonita que la vida decidió poner en mi camino.", time: 18 },
  { text: "Desde el momento en que llegaste, todo tomó un color y un sentido diferente.", time: 28 },
  { text: "Me encanta la forma en que miras el mundo y cómo iluminas mis días grises.", time: 32 },
  { text: "No hay un solo instante en el que no agradezca tenerte a mi lado, mi amor.", time: 34 },
  { text: "Tu risa se ha convertido en mi sonido favorito de todas las mañanas.", time: 41 },
  { text: "Amo tus locuras, tus detalles, tus enojos tontos y tu hermosa ternura.", time: 47 },
  { text: "Eres mi refugio seguro, el lugar al que siempre quiero volver al final del día.", time: 54 },
  { text: "Contigo he aprendido que el amor verdadero se construye con pequeños momentos.", time: 59 },
  { text: "Me pierdo en tus ojos cada vez que tengo la suerte de mirarte de cerquita.", time: 67 },
  { text: "Gracias por tomar mi mano y caminar conmigo en esta hermosa aventura.", time: 72 },
  { text: "Eres la dueña de mis pensamientos más bonitos y de mis sueños más sinceros.", time: 78 },
  { text: "A tu lado el tiempo vuela, y cada segundo juntos sabe a poco tiempo.", time: 83 },
  { text: "Admiro tu fuerza, tu inteligencia y la bondad gigante que vive en tu corazón.", time: 91 },
  { text: "te amo tanto que no me imaginaria otro futuro donde no estuvieses tu.", time: 97 },
  { text: "por que tu eres ni eleccion, mi camino, mi deseo mas preciado.", time: 104 },
  { text: "haciendo esto, me acorde de la vez que me volví a enamorar de ti.", time: 108 },
  { text: "como aquella noche de septiembre, para ser exacto el 19 un numero,", time: 144 },
  { text: "que ahora considerare como mi numero de la suerte por finalmente,", time: 148 },
  { text: "tenerte, tenernos, amarte y amarnos siempre, ejemplo de mi amor...", time: 153 },
  { text: "pues lo estas viendo mi corazón, en que estaba? a si...", time: 158 },
  { text: "Quiero estar en tus risas, en tus abrazos", time: 164 },
  { text: "y también en tus días difíciles.", time: 169 },
  { text: "Te amo hoy más que ayer, pero ten la certeza de que menos que mañana.", time: 176 },
  { text: "Eres, sin lugar a dudas, lo mejor que me ha pasado en toda la vida.", time: 183 },
  { text: "Te amo con todo mi ser, hoy, mañana y siempre, mi niña hermosa.", time: 188 },
  { text: "rico chocolate", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);