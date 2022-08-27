<template>
    <div class="d-flex flex-column gap-1">
        <header-5><slot>&nbsp;</slot></header-5>
        <v-text-field type="search" v-bind="$attrs" style="" dense outlined hide-details height="34"></v-text-field>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
