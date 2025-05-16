import gravitationalBeep from "../assets/audios/gravitational_beep.mp3";

export const loadBeep = () => {
  const audio = new Audio(gravitationalBeep);
  // audio.play(); // demais nbavegadores termina aqui a função.

  // alternativa para Safari 😱
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch((error) => console.log("Erro ao tocar áudio", error));
  };
};
