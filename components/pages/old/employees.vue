<template>
	<div>
		<div class="d-flex align-center width-100 header-section">
			<header-1 class="primary--text">Employees</header-1>
			<v-spacer />
			<v-btn v-if="!employee" height="34" :width="isMobile ? 140 : 170" color="primary" @click="createEmployee">Add Employee</v-btn>
			<v-btn v-else height="34" :width="isMobile ? 140 : 170" color="error" @click="cancel">Cancel</v-btn>
		</div>
		<div class="d-flex flex-column gap-4">
			<div class="mt-2 f-12 w-500 subtext--text" style="max-width: 340px">Add, update or remove employees. and some other info that I am unsure I want to add here.</div>
			<div class="d-flex flex-wrap justify-space-between gap-row-5">
				<employee-edit-card v-show="employee" v-model="employee" />
				<employee-card v-for="i in 12" :key="i + Math.random()" @edit="editEmployee" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Employee } from '@/models/employee';
import { isMobile } from '@/utils/screen';

export default Vue.extend({
	data() {
		return {
			employee: undefined as Employee | undefined,
		};
	},
	computed: {
		isMobile(): boolean {
			return isMobile(this.$vuetify);
		},
	},
	methods: {
		cancel(): void {
			this.employee = undefined;
		},
		createEmployee(): void {
			this.employee = new Employee();
		},
		editEmployee(): void {
			this.employee = new Employee();
			this.employee.name = 'Peter John Meyer';
			this.employee.role = 'Backend Developer';
			this.employee.email = 'sam@sam.co.za';
			this.employee.profileUrl = 'https://cdn.vuetifyjs.com/images/lists/2.jpg';
			this.employee.isManager = true;
		},
	},
});
</script>

<style scoped lang="scss">
::v-deep {
	.header-section .v-btn {
		font-size: 18px !important;
		letter-spacing: 0px !important;
		font-weight: 500 !important;
	}
}
</style>
