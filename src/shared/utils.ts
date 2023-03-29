export {
	getTopScore,
	updateTopScore
}

const getTopScore = () => {
	const topScore = localStorage.getItem('topScore');
	return topScore ? parseInt(topScore) : -1;
}

const updateTopScore = (score: number) => {
	const currentTopScore = getTopScore();
	if (score > currentTopScore) {
	  localStorage.setItem('topScore', score.toString());
	}
  }