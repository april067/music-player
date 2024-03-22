import userData from '../userData.js';
import { audio, playButton } from './common.js';
import highlightCurrentSong from '../handleControl/highlightCurrentSong.js';
import setPlayerDisplay from '../handleControl/setPlayerDisplay.js';
import setPlayButtonAccessibleText from '../handleControl/setPlayButtonAccessibleText.js';

const playSong = (id) => {
	const song = userData?.songs.find((song) => song.id === id);
	audio.src = song.src;
	audio.title = song.title;

	//Before playing the song, you need to make sure it starts from the beginning.
	if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
		audio.currentTime = 0;
	} else {
		audio.currentTime = userData?.songCurrentTime;
	}

	userData.currentSong = song;
	playButton.classList.add('playing');

	audio.play();
	highlightCurrentSong();
	setPlayerDisplay();
	setPlayButtonAccessibleText();
};

export default playSong;
