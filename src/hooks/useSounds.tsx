import { useAudioPlayer } from 'react-use-audio-player';
const boingSound = "https://s3.amazonaws.com/cdn.avatartion.com/boing.mp3";
const clickSound =
  "https://s3.amazonaws.com/cdn.avatartion.com/click_sound.mp3";
const pauseSound = "https://s3.amazonaws.com/cdn.avatartion.com/pause.mp3";

type UseSoundsType = {
  soundEnabled: boolean;
};
export const useSounds = ({ soundEnabled }: UseSoundsType) => {
  const { load } = useAudioPlayer();
  const playBoingSound = () =>{
    load(boingSound,{autoplay:false, loop:false, initialVolume:soundEnabled? 0.25:0});
  } 
  const playClickSound = () => {
    load(clickSound,{autoplay:false, loop:false, initialVolume:soundEnabled? 1:0});
  } 
  const playPauseSound = () => {
    load(pauseSound,{autoplay:false, loop:false, initialVolume:1});
  } 

  return {
    playClickSound,
    playBoingSound,
    playPauseSound,
  };
};
