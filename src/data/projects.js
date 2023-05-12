// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Diesel Repair',
		category: 'Laravel / Vue js',
		img: require('@/assets/images/diesel-repair-1.png'),
	},
	{
		id: 2,
		title: 'Diesel Parts',
		category: 'Laravel / Vue js',
		img: require('@/assets/images/diesel-parts-1.png'),
	},
	{
		id: 3,
		title: 'Open Bazar',
		category: 'Laravel / Vue js',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'ASPCA',
		category: 'Laravel',
		img: require('@/assets/images/ui-project-2.jpg'),
	},

];

export default projects;
