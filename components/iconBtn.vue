<template>
	<v-btn :color="color" @click="$emit('click')">
		<v-icon>
			<slot>mdi-home</slot>
		</v-icon>
	</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	props: {
		color: {
			type: String,
			default: 'primary',
		},
	},
});
</script>

<style scoped>
::v-deep.v-btn {
	height: 40px;
	width: 40px;
	min-width: 40px !important;
	max-width: 40px !important;
	padding: 0 !important;
	border-radius: 10px;
}
</style>
