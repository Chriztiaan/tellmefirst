<template>
    <div class="d-flex flex-column gap-1">
        <header-5><slot>&nbsp;</slot></header-5>
        <v-textarea v-bind="$attrs" hide-details no-resize outlined />
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
