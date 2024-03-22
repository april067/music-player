import userData from '../userData.js';
import playSong from './playSong.js';
import getCurrentSongIndex from '../handleControl/getCurrentSongIndex.js';

const playPreviousSong = () => {
	const currentSongIndex = getCurrentSongIndex();

	if (userData?.currentSong === null || currentSongIndex === 0) {
		playSong(userData?.songs[userData.songs.length - 1].id);
	} else {
		const previousSong = userData.songs[currentSongIndex - 1];
		playSong(previousSong.id);
	}
};

export default playPreviousSong;
