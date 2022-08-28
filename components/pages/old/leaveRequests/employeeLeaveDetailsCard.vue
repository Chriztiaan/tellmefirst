<template>
    <v-card :height="isMobile ? 800 : 430" width="100%" elevation="4" class="d-flex flex-column align-start pa-5 text--text">
        <div class="d-flex flex-column gap-2 align-center flex-md-row width-100">
            <employee-leave-data name="Peter John Meyer" role="Backend Developer" :count="2.5" />
            <v-spacer />
            <div class="d-flex gap-2">
                <count-chip :count="2.5" text="selected" count-colour="secondary" />
                <count-chip :count="18.5" text="available" count-colour="primary" />
            </div>
        </div>
        <div class="width-100 height-100 d-flex flex-column flex-md-row justify-space-between gap-3">
            <div>
                <div class="mt-2">
                    <header-5>Category</header-5>
                    <div class="mt-1" style="width: 435px; max-width: 100%">
                        <dropdown />
                    </div>
                </div>
                <div class="mt-5">
                    <header-5> Selected Dates</header-5>
                    <div class="mt-1 d-flex flex-column gap-2" :class="{ 'gap-5 px-1': isMobile }" style="width: 100%">
                        <div v-for="i in 4" :key="i" class="mt-1 d-flex flex-wrap flex-md-no-wrap align-center">
                            <v-switch v-model="bool" hide-details inset dense />
                            <div class="ml-1 text--text f-16 w-500 d-flex align-center">08-11-2022</div>
                            <div class="tertiary--text f-10 w-700">
                                <div class="pt-1 ml-1" style="margin-left: 4px; padding-bottom: 2px; min-width: 72px">Wednesday</div>
                            </div>
                            <div class="d-flex align-center gap-2" :class="{ 'mt-2 ml-n1': isMobile }">
                                <dropdown
                                    style="width: 100px"
                                    dense
                                    :items="[
                                        { label: 'Full', class: 'success--text f-12' },
                                        { label: 'Partial', class: 'info--text f-12' },
                                        { label: 'None', class: 'error--text f-12' }
                                    ]"
                                />

                                <number-field style="width: 50px" />
                                <div class="tertiary--text f-12 w-700">Days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column height-100 width-100" :style="!isMobile ? 'width: 300px' : ''">
                <div class="mt-2">
                    <header-5>Extra notes</header-5>
                    <v-textarea placeholder="Any additional info about the leave you are taking..." class="mt-1" :rows="isMobile ? 3 : 7" hide-details no-resize outlined />
                </div>
                <v-spacer />
                <div class="d-flex justify-end gap-2 width-100 rounded-sm">
                    <v-btn color="error">Decline</v-btn>
                    <v-btn color="secondary">Approve</v-btn>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { isMobile } from '@/utils/screen';

export default Vue.extend({
    data() {
        return { bool: false };
    },
    computed: {
        isMobile(): boolean {
            return isMobile(this.$vuetify);
        }
    }
});
</script>

<style scoped lang="scss">
.v-textarea::v-deep textarea {
    margin-bottom: 14px !important;
}

::v-deep {
    .v-input--dense.v-text-field.v-text-field--enclosed .v-text-field__details,
    .v-input--dense.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
        max-height: 34px;
        min-height: 34px !important;
    }
}
</style>
