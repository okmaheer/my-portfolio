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
				relatedProjects: projects,
			},
		};
	},
	computed: {
		projectInfo() {
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

	},
	watch: {
		'$route.params.projectId': function (newProjectId, ) {
			// do something when the projectId changes

			this.project = projects.find((project) => {
				if (project.id == newProjectId) {
					return project
				}
			})
			this.projectData = projectsData.find((data) => {
				if (data.project_id == newProjectId) {
					return data
				}
			})
		}
	},
	updated() {
		feather.replace();

	},
	methods: {},
};
</script>

<style scoped></style>
