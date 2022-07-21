// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Laravel Autoadmin blog',
		category: 'Web Application',
		img: require('@/assets/images/postsPags.png'),
	},
	{
		id: 5,
		title: 'GOlang APIrestfull',
		category: 'Backend Application',
		img: require('@/assets/images/GoRoutes.png'),
	},
	{
		id: 6,
		title: 'Vue App SPA',
		category: 'Web Application',
		img: require('@/assets/images/deleteMessage.png'),
	},
];

export default projects;
