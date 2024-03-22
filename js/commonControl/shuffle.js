import userData from '../userData.js';
import renderSongs from '../renderSongs.js';
import pauseSong from './pauseSong.js';
import setPlayerDisplay from '../handleControl/setPlayerDisplay.js';
import setPlayButtonAccessibleText from '../handleControl/setPlayButtonAccessibleText.js';

const shuffle = () => {
	userData?.songs.sort(() => Math.random() - 0.5);
	userData.currentSong = null;
	userData.songCurrentTime = 0;

	renderSongs(userData?.songs);
	pauseSong();
	setPlayerDisplay();
	setPlayButtonAccessibleText();
};

export default shuffle;
