<template>
	<div>
		Colours
		<div class="d-flex gap-1 white--text">
			<v-card color="primary" height="50" width="50"> Primary </v-card>
			<v-card color="secondary" height="50" width="50"> Secondary </v-card>
			<v-card color="tertiary" height="50" width="50"> Tertiary </v-card>
			<v-card color="accent" height="50" width="50"> Accent </v-card>
		</div>
		<br />
		<div class="d-flex gap-1">
			<v-card color="text" height="50" width="50"> Text </v-card>
			<v-card color="success" height="50" width="50"> Success </v-card>
			<v-card color="error" height="50" width="50"> Error </v-card>
		</div>
		<br />
		<div class="d-flex gap-4">
			<div>
				<header-1 />
				<header-2 />
				<header-3 />
				<header-4 />
			</div>
			<div class="d-flex flex-column justify-start gap-1">
				<v-switch v-model="bool" hide-details inset dense />
				<v-switch hide-details inset dense />
			</div>

			<div class="d-flex flex-column">
				<dropdown />
				<br />
				<dropdown dense />
			</div>
		</div>
		<br />

		<div>
			<v-btn icon>
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<v-btn icon class="rounded-xl" small>
				<v-icon color="black">mdi-chevron-down</v-icon>
			</v-btn>
		</div>

		<div class="d-flex">
			<v-card color="white" width="560" height="570" elevation="4">
				<v-card-text class="d-flex flex-column gap-4 text--text height-100">
					<div class="d-flex align-center">
						<header-2>Request Time Of</header-2>
						<v-spacer />
						<div class="d-flex gap-2">
							<div class="stat background br-10 py-1 px-2 w-700 d-flex justify-center align-center gap-1">
								<span class="success--text f-16">2.5</span><span class="f-12">selected</span>
							</div>
							<div class="stat background br-10 py-1 px-2 w-700 d-flex justify-center align-center gap-1">
								<span class="primary--text f-16">18.5</span><span class="f-12">available</span>
							</div>
						</div>
					</div>
					<div>
						<header-5>Category<required /></header-5>
						<div>
							<dropdown />
						</div>
					</div>
					<div>
						<header-5> Selected Dates<required /></header-5>
						<div class="d-flex flex-column gap-2">
							<div v-for="i in 4" :key="i" class="d-flex align-center">
								<v-switch v-model="bool" hide-details inset dense />
								<div class="ml-1 text--text f-16 w-500 d-flex align-center">08-11-2022</div>
								<div class="tertiary--text f-10 w-700">
									<div class="pt-1 ml-1">Monday</div>
								</div>
								<v-spacer />
								<div style="width: 100px">
									<dropdown dense :items="[{ label: 'Full' }, { label: 'Half' }, { label: 'None' }]" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<header-5>Extra notes</header-5>
						<v-textarea rows="3" hide-details no-resize outlined />
					</div>
					<v-spacer></v-spacer>
					<div class="d-flex justify-end">
						<v-btn color="primary">Request</v-btn>
					</div>
				</v-card-text>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DesignPage',
	layout: 'design',
	data() {
		return { bool: true };
	},
};
</script>

<style scoped>
.stat {
	width: 100px;
	height: 34px;
}
</style>

<style lang="scss"></style>
