<template>
	<v-card :height="isMobile ? 130 : 100" width="400" elevation="4" class="d-flex align-start align-md-center">
		<v-avatar size="80">
			<v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
		</v-avatar>

		<template v-if="isMobile">
			<div class="d-flex flex-column height-100 width-100 justify-space-between rounded-sm ml-5 pb-1">
				<div>
					<div class="text--text f-18 w-600 lh-20">Peter John Meyer</div>
					<div class="subtext--text f-12 w-600">Backend Developer</div>
				</div>

				<div class="d-flex gap-4">
					<div class="d-flex align-center gap-1">
						<v-icon color="tertiary" size="20">mdi-airplane</v-icon>
						<div class="subtext--text f-12 w-700">23</div>
					</div>
					<div class="d-flex align-center gap-1">
						<v-icon color="tertiary" size="20">mdi-emoticon-sick</v-icon>
						<div class="subtext--text f-12 w-700">23</div>
					</div>
				</div>
				<div class="actions d-flex justify-end align-center gap-2 rounded-sm">
					<icon-btn color="error">mdi-trash-can</icon-btn>
					<icon-btn color="info" @click="$emit('edit')">mdi-pencil</icon-btn>
				</div>
			</div>
		</template>
		<template v-else>
			<div class="d-flex flex-column rounded-sm ml-5 pb-1">
				<div class="text--text f-18 w-600 lh-20">Peter John Meyer</div>
				<div class="subtext--text f-12 w-600">Backend Developer</div>
				<v-spacer />
				<div class="mt-2 d-flex gap-4">
					<div class="d-flex align-center gap-1">
						<v-icon color="tertiary" size="20">mdi-airplane</v-icon>
						<div class="subtext--text f-12 w-700">23</div>
					</div>
					<div class="d-flex align-center gap-1">
						<v-icon color="tertiary" size="20">mdi-emoticon-sick</v-icon>
						<div class="subtext--text f-12 w-700">23</div>
					</div>
				</div>
			</div>
			<v-spacer></v-spacer>
			<div class="actions d-flex align-center gap-2 rounded-sm">
				<icon-btn color="error">mdi-trash-can</icon-btn>
				<icon-btn color="info" @click="$emit('edit')">mdi-pencil</icon-btn>
			</div>
		</template>
	</v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { isMobile } from '@/utils/screen';

export default Vue.extend({
	computed: {
		isMobile(): boolean {
			return isMobile(this.$vuetify);
		},
	},
});
</script>

<style scoped>
.v-card {
	border-radius: 10px !important;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 20px;
	padding-right: 20px;
}
</style>
