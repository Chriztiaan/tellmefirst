<template>
	<div class="stat background br-10 py-1 px-2 w-700 d-flex justify-center align-center gap-1">
		<span :class="countClass" class="f-16">{{ count }}</span>
		<span class="f-12 w-700">{{ text }}</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		count: {
			type: Number,
			default: 0,
		},
		text: {
			type: String,
			default: '',
		},
		countColour: {
			type: String,
			default: 'primary',
		},
	},
	computed: {
		countClass(): string {
			return this.countColour + '--text';
		},
	},
});
</script>

<style scoped>
.stat {
	width: 100px;
	height: 34px;
}
</style>
