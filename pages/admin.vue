<template>
	<v-container>
		<v-row class="justify-center">
			<v-col cols="12" md="2" class="d-flex flex-column align-center align-md-start">
				<header-1 :class="{ 'ml-4': !isMobile }">Manage</header-1>
				<div class="mt-4 d-flex flex-column align-center align-md-start gap-3 manage-btns">
					<v-btn text width="180" :class="{ selected: isDashboard }" class="f-18 w-500" @click="setPage(Page.dashboard)">
						<v-icon class="mr-4" color="tertiary" left size="24">mdi-view-dashboard</v-icon>
						Dashboard
					</v-btn>
					<v-btn text width="180" :class="{ selected: isWorkSetup }" class="f-18 w-500" @click="setPage(Page.workSetup)">
						<v-icon class="mr-4" color="tertiary" left size="24">mdi-briefcase</v-icon>
						Work Setup
					</v-btn>
					<v-btn text width="180" :class="{ selected: isEmployees }" class="f-18 w-500" @click="setPage(Page.employees)">
						<v-icon class="mr-4" color="tertiary" left size="24">mdi-account-group </v-icon>
						Employees
					</v-btn>
					<v-btn text width="180" :class="{ selected: isRequests }" class="f-18 w-500" @click="setPage(Page.requests)">
						<v-icon class="mr-4" color="tertiary" left size="24">mdi-calendar-check</v-icon>
						Requests
					</v-btn>
				</div>
			</v-col>
			<v-col class="" cols="12" md="6" style="max-width: 853px">
				<dashboard v-if="isDashboard" />
				<work-setup v-else-if="isWorkSetup" />
				<employees v-else-if="isEmployees" />
				<leave-requests v-else-if="isRequests" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';

enum Page {
	dashboard,
	workSetup,
	employees,
	requests,
}

export default Vue.extend({
	layout: 'admin',
	data() {
		return {
			bool: true,
			selectedPage: Page.requests,
			Page,
		};
	},
	computed: {
		isDashboard(): boolean {
			return this.selectedPage == Page.dashboard;
		},
		isWorkSetup(): boolean {
			return this.selectedPage == Page.workSetup;
		},
		isEmployees(): boolean {
			return this.selectedPage == Page.employees;
		},
		isRequests(): boolean {
			return this.selectedPage == Page.requests;
		},
		isMobile(): boolean {
			const name = this.$vuetify.breakpoint.name;
			return name == 'xs' || name == 'sm';
		},
	},
	methods: {
		setPage(page: Page): void {
			this.selectedPage = page;
		},
	},
});
</script>

<style scoped lang="scss">
.manage-btns .v-btn::v-deep {
	justify-content: start;
}

.selected.v-btn {
	background: var(--v-background-base) !important;

	.v-icon {
		color: var(--v-primary-base) !important;
	}
}
</style>
