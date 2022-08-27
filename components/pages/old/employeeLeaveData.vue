<template>
	<div class="d-flex align-center">
		<v-avatar size="50">
			<v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
		</v-avatar>
		<div class="d-flex flex-column rounded-sm ml-2 pb-1" :style="isMobile ? 'max-width: 130px' : 'max-width: 170px; width: 170px'">
			<div class="text--text f-18 w-600 lh-20 text-truncate">{{ name }}</div>
			<div class="subtext--text f-12 w-600 text-truncate">{{ role }}</div>
		</div>

		<div class="d-flex align-center gap-1">
			<v-icon color="tertiary" size="20">mdi-airplane</v-icon>
			<div class="subtext--text f-12 w-700">{{ count }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { isMobile } from '@/utils/screen';

export default Vue.extend({
	props: {
		name: { type: String, default: 'Unknwon' },
		role: { type: String, default: 'None' },
		count: { type: Number, default: 0 },
	},
	computed: {
		isMobile(): boolean {
			return isMobile(this.$vuetify);
		},
	},
});
</script>
