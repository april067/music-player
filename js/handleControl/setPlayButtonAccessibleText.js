import userData from '../userData.js';

const playButton = document.getElementById('play');

const setPlayButtonAccessibleText = () => {
	const song = userData?.currentSong || userData?.songs[0];

	playButton.setAttribute('aria-label', song?.title ? `Play ${song.title}` : 'Play');
};

export default setPlayButtonAccessibleText;
