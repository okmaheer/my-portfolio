// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projectsData = [
	{
        id: 1,
		project_id: 1,
		projectImages: [
            {
                id: 1,
                title: 'Diesel Repair',
                img: require('@/assets/images/diesel-repair-1.png'),
            },
            {
                id: 2,
                title: 'Diesel Repair',
                img: require('@/assets/images/diesel-repair-2.png'),
            },
            {
                id: 3,
                title: 'Diesel Repair',
                img: require('@/assets/images/diesel-repair-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Diesel Laptops',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel / Vue js',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://www.diesellaptops.com/',
                },
                {
                    id: 4,
                    title: 'Phone',
                    details: '555 8888 888',
                },
            ],
            projectCredentialsTitle:'Project Credentials',
            projectCredentialsInfo: [
                {
                    id: 1,
                    title: 'Link',
                    details: 'https://repair.dieselstaging.com',
                },
                {
                    id: 2,
                    title: 'Email',
                    details: 'aahmed@diesellaptops.com',
                },
                {
                    id: 3,
                    title: 'Password',
                    details: 'Diesel123!',
                },
                
            ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope new modules and solve logical problems in the project.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Vue.js',
                        'Quasar Framework',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'My Task was to Build modules and  bug Fixing in Different Front of Diesel Laptops. I worked on 4 Different Vue js/Quasar Frontend and 4 to 5 different Backend Developers. My main Challenge was to Develop new Module Called Health Module which is responsible for collecting Scan coming from vehicles and showing it appropriately on Vue js Front end',
                },
                // {
                //     id: 2,
                //     details:
                //         'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
                // },
               
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Twitter',
                    icon: 'twitter',
                    url: 'https://twitter.com/',
                },
                {
                    id: 2,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 3,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 4,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 5,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
	
	}
	
];

export default projectsData;
