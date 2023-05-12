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
                        'At Diesel Laptops, I had the opportunity to work for a leading provider of diagnostic solutions for commercial and industrial vehicles. As a developer, my main task was to build modules and fix bugs in various Vue js/Quasar frontend applications and Laravel, collaborating with multiple backend developers along the way.'
                },
                {
                    id: 2,
                    details:
                        'One of my most challenging yet rewarding projects at Diesel Laptops was the development of the Health Module. This module was responsible for collecting and displaying scans from vehicles in a user-friendly manner. I was tasked with ensuring that the scans were accurately collected and displayed, requiring a high level of technical expertise and attention to detail.',
                },
                     {
                    id: 3,
                    details:
                        'Through my work at Diesel Laptops, I developed strong problem-solving and collaboration skills. I learned how to work effectively in a team and communicate technical concepts to both technical and non-technical stakeholders. I also gained a deeper understanding of the commercial and industrial vehicle diagnostic industry and the importance of innovation and customer service.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience at Diesel Laptops was a valuable one that helped me grow both personally and professionally. The technical and collaborative skills that I developed during my time there will undoubtedly serve me well in future roles.',
                },
               
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
	
	},
    {
        id: 2,
		project_id: 2,
		projectImages: [
            {
                id: 1,
                title: 'Diesel Parts',
                img: require('@/assets/images/diesel-parts-1.png'),
            },
            {
                id: 2,
                title: 'Diesel Parts',
                img: require('@/assets/images/diesel-parts-2.png'),
            },
            {
                id: 3,
                title: 'Diesel Parts',
                img: require('@/assets/images/diesel-parts-3.png'),
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
                    details: 'https://parts.dieselstaging.com/',
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
                        'At Diesel Laptops, I had the opportunity to work for a leading provider of diagnostic solutions for commercial and industrial vehicles. As a developer, my main task was to build modules and fix bugs in various Vue js/Quasar frontend applications Laravel , collaborating with multiple backend developers along the way.'
                },
                {
                    id: 2,
                    details:
                        'One of my most challenging yet rewarding projects at Diesel Laptops was the development of the Health Module. This module was responsible for collecting and displaying scans from vehicles in a user-friendly manner. I was tasked with ensuring that the scans were accurately collected and displayed, requiring a high level of technical expertise and attention to detail.',
                },
                     {
                    id: 3,
                    details:
                        'Through my work at Diesel Laptops, I developed strong problem-solving and collaboration skills. I learned how to work effectively in a team and communicate technical concepts to both technical and non-technical stakeholders. I also gained a deeper understanding of the commercial and industrial vehicle diagnostic industry and the importance of innovation and customer service.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience at Diesel Laptops was a valuable one that helped me grow both personally and professionally. The technical and collaborative skills that I developed during my time there will undoubtedly serve me well in future roles.',
                },
               
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
	
	},
    {
        id: 3,
		project_id: 3,
		projectImages: [
            {
                id: 1,
                title: 'Open Bazar',
                img: require('@/assets/images/open-bazar-1.png'),
            },
            {
                id: 2,
                title: 'Open Bazar',
                img: require('@/assets/images/open-bazar-2.png'),
            },
            {
                id: 3,
                title: 'Open Bazar',
                img: require('@/assets/images/open-bazar-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'Open Bazar',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel / Vue js',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://openbazar.nl/',
                },
               
            ],
            projectCredentialsTitle:'Project Credentials',
            projectCredentialsInfo: [
                {
                    id: 1,
                    title: 'Link',
                    details: 'https://openbazar.nl/',
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
                        'Api Development',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'During my time at Open Bazar, I had the opportunity to work for an innovative online marketplace that is transforming the way people buy and sell goods and services. As a developer, my primary role was to develop and maintain the platforms backend infrastructure, ensuring that it was fast, reliable, and scalable.'
                },
                {
                    id: 2,
                    details:
                        'In addition to developing the platforms infrastructure, I was also responsible for collaborating with frontend developers to ensure that the platform was user-friendly and aesthetically pleasing. This required strong communication and collaboration skills, as well as a deep understanding of frontend technologies such as HTML, CSS, and Vue js and Laravel Backend.',
                },
                     {
                    id: 3,
                    details:
                        'Through my work at Open Bazar, I gained valuable experience in developing and maintaining large-scale web applications, as well as the importance of innovation and user experience in online marketplaces. I also developed strong problem-solving, analytical, and collaboration skills, which will undoubtedly serve me well in future roles.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience at Open Bazar was a valuable one that helped me grow both personally and professionally. The technical and collaborative skills that I developed during my time there will undoubtedly serve me well in future roles in the tech industry.',
                },
               
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
	
	},
    {
        id: 4,
		project_id: 4,
		projectImages: [
            {
                id: 1,
                title: 'ASPCA',
                img: require('@/assets/images/aspca-1.png'),
            },
            {
                id: 2,
                title: 'ASPCA',
                img: require('@/assets/images/aspca-2.png'),
            },
            {
                id: 3,
                title: 'ASPCA',
                img: require('@/assets/images/aspca-3.png'),
            },
        ],
        projectInfo: {
            clientHeading: 'About Client',
            companyInfos: [
                {
                    id: 1,
                    title: 'Name',
                    details: 'ASPCA',
                },
                {
                    id: 2,
                    title: 'Services',
                    details: 'Laravel / Vue js',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://www.aspca.org/',
                },
               
            ],
            projectCredentialsTitle:'Project Credentials',
            projectCredentialsInfo: [
                {
                    id: 1,
                    title: 'Link',
                    details: 'http://35.162.29.30/admin/login',
                },
                {
                    id: 2,
                    title: 'Email',
                    details: 'muhammad.abdullah@ikonicsolution.com',
                },
                {
                    id: 3,
                    title: 'Password',
                    details: 'doobert',
                }
                
                
            ],
            
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develope this Project from scratch.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Bootstrap',
                        'Jquery',
                        'AWS',
                        'Api Development',
                        'Laravel Framework',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'As a Laravel developer, I had the opportunity to work on an exciting project from scratch. The project was a web application that aimed to solve a specific problem for a client in the healthcare industry. My role in the project was to lead the backend development effort and work closely with the frontend developers to deliver a high-quality, scalable, and secure application.'
                },
                {
                    id: 2,
                    details:
                        'As one of the developers who worked on the project from scratch, I was responsible for building the core functionalities of the application, designing and implementing the database schema, and developing the APIs that the frontend would consume. This required deep technical knowledge of the Laravel framework, as well as other technologies such as MySQL, REST APIs, and AWS services.',
                },
                     {
                    id: 3,
                    details:
                        'One of my most significant achievements in the project was leading the development of a custom search algorithm that was designed to improve the applications search capabilities. This required a deep understanding of search algorithms, data structures, and database management, as well as strong analytical and problem-solving skills.',
                },
                {
                    id: 4,
                    details:
                        'Overall, my experience working on this project from scratch was a valuable one that helped me grow both personally and professionally. The technical and project management skills that I developed during my time as a Laravel developer will undoubtedly serve me well in future roles in the tech industry.',
                },
               
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
	
	},
];

export default projectsData;
