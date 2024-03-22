import userData from '../userData.js';
import { audio, playButton } from './common.js';

const pauseSong = () => {
	userData.songCurrentTime = audio.currentTime;
	playButton.classList.remove('playing');

	audio.pause();
};

export default pauseSong;
