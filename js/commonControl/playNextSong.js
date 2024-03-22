import userData from '../userData.js';
import playSong from './playSong.js';
import getCurrentSongIndex from '../handleControl/getCurrentSongIndex.js';

const playNextSong = () => {
	const currentSongIndex = getCurrentSongIndex();

	if (userData?.currentSong === null || currentSongIndex === userData.songs.length - 1) {
		playSong(userData?.songs[0].id);
	} else {
		const nextSong = userData?.songs[currentSongIndex + 1];
		playSong(nextSong.id);
	}
};

export default playNextSong;
