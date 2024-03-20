import userData from '../userData.js';

const getCurrentSongIndex = () => {
	/*
	If your object is the same object of the ones you are using within the array, you should be able to get the index of the Object in the same way you do as if it was a string.

	findIndex() ??????
	*/

	return userData?.songs.indexOf(userData?.currentSong);
};

export default getCurrentSongIndex;
