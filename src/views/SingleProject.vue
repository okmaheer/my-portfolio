<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="project" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectData.projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>
<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';
import projectsData from '../data/projects-data'
export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			project: {},
			projectData: {},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	computed: {
		projectInfo() {
			console.log(this.projectData.projectInfo);
			return this.projectData.projectInfo;
		}
	},
	async beforeMount() {
		feather.replace();
		let Projectid = this.$route.params.projectId;
		this.project = projects.find((project) => {
			if (project.id == Projectid) {
				return project
			}
		})
		this.projectData = projectsData.find((data) => {
			if (data.project_id == Projectid) {
				return data
			}
		})

		console.log("here")
	},
	updated() {
		feather.replace();

	},
	methods: {},
};
</script>

<style scoped></style>
