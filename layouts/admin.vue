<template>
    <v-app>
        <v-app-bar flat app color="white" :height="height" :elevation="isMobile ? 1 : 0">
            <div class="px-12 d-flex flex-column justify-center justify-md-start flex-md-row align-center gap-3 py-4" style="width: 100%">
                <div v-if="isMobile" class="d-flex justify-space-between width-100">
                    <v-img :src="require(`~/assets/leave.svg`)" max-height="50" max-width="50" />
                    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                </div>
                <template v-else>
                    <v-img :src="require(`~/assets/leave.svg`)" max-height="50" max-width="50" />
                </template>
                <template v-if="!isMobile || drawer">
                    <v-btn class="f-18 w-700" :outlined="isMobile" width="100" text to="/home"> Home </v-btn>
                    <v-btn class="f-18 w-700" :outlined="isMobile" width="100" text to="/design"> Manage </v-btn>
                    <v-spacer />
                </template>
                <div class="d-flex gap-3 align-center">
                    <v-btn icon height="24" width="24">
                        <v-icon color="text" size="20">mdi-bell-outline</v-icon>
                    </v-btn>
                    <v-badge bordered bottom color="secondary" dot offset-x="10" offset-y="45">
                        <v-avatar size="50">
                            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                        </v-avatar>
                    </v-badge>
                    <v-btn icon class="background" height="24" width="24">
                        <v-icon color="black" size="20">mdi-chevron-down</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-app-bar>
        >
        <v-main class="text--text" :class="{ 'main-mobile': isMobile, 'main-drawer': drawer }">
            <v-main>
                <v-container> <Nuxt /> </v-container>
            </v-main>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { isMobile } from '@/utils/screen';

export default Vue.extend({
    name: 'AdminLayout',
    data() {
        return {
            drawer: false
        };
    },
    computed: {
        isMobile(): boolean {
            return isMobile(this.$vuetify);
        },
        height(): number {
            if (this.drawer) {
                return 275;
            }
            if (this.isMobile) {
                return 160;
            } else {
                return 80;
            }
        }
    }
});
</script>

<style scoped>
.main-mobile {
    margin-top: 55px;
}
.main-drawer {
    margin-top: 170px !important;
}
</style>
