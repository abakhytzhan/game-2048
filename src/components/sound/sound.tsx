import sound1 from "./sound1.mp3";
import sound2 from "./sound2.mp3";
import sound3 from "./sound3.mp3";

export const playSound = () => {
  const sound = new Audio(sound1);
  sound.play();
};

export const playSound2 = () => {
  const sound = new Audio(sound2);
  sound.play();
};

export const playSound3 = () => {
  const sound = new Audio(sound3);
  sound.play();
};
