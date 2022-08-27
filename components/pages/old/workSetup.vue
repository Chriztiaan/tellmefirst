<template>
    <div>
        <header-1 class="primary--text">Work Setup</header-1>
        <div class="d-flex flex-column gap-4">
            <div class="mt-2 f-12 w-500 subtext--text" style="max-width: 340px">Manage your work environment by setting the working days, leave, and more.</div>

            <header-3>Working Days</header-3>
            <div class="d-flex flex-column gap-2">
                <v-switch v-model="bool" hide-details inset dense label="Monday" />
                <v-switch v-model="bool" hide-details inset dense label="Tuesday" />
                <v-switch v-model="bool" hide-details inset dense label="Wednesday" />
                <v-switch v-model="bool" hide-details inset dense label="Thursday" />
                <v-switch v-model="bool" hide-details inset dense label="Friday" />
                <v-switch hide-details inset dense label="Saturday" />
                <v-switch hide-details inset dense label="Sunday" />
            </div>

            <div class="d-flex align-center">
                <header-3>Leave</header-3>
                <v-spacer />
                <v-btn height="34" width="130" color="primary">Add Type</v-btn>
            </div>
            <div class="d-flex flex-wrap gap-5 justify-center justify-md-space-between">
                <leave-type-card v-for="i in 3" :key="i" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            bool: true
        };
    }
});
</script>
