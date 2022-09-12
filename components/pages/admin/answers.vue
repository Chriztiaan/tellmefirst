<template>
    <div>
        <header-1 class="primary--text">Answers</header-1>

        <div class="d-flex flex-column gap-5">
            <v-card v-for="(answerSet, i) in answerSets" :key="answerSet.id" elevation="4" class="pa-5 d-flex flex-column gap-4">
                <div class="d-flex justify-space-between align-center">
                    <div class="text--text f-18 w-600 lh-20">{{ answerSet.contact_person }}</div>
                    <div class="d-flex align-center gap-2">
                        <div class="d-flex align-center">
                            <template v-if="answerSet.remote == 0">
                                <v-icon class="icon-margin-sm" color="tertiary">mdi-home</v-icon>
                                <div class="text--text f-14 w-600">Remote</div>
                            </template>
                            <template v-else-if="answerSet.remote == 1">
                                <v-icon class="icon-margin" color="tertiary">mdi-home-city</v-icon>
                                <div class="text--text f-14 w-600">Hybrid</div>
                            </template>
                            <template v-else-if="answerSet.remote == 2">
                                <v-icon class="icon-margin-sm" color="tertiary">mdi-home-off</v-icon>
                                <div class="text--text f-14 w-600">No remote</div>
                            </template>
                        </div>
                        <div class="d-flex align-center gap-2">
                            <v-divider vertical class="tertiary" style="border-right-width: 2px" />
                            <div class="text--text f-14 w-600">{{ answerSet.company }}</div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-space-between align-center">
                    <div class="d-flex gap-5 width-100 align-center" style="min-width: 280px">
                        <div class="d-flex flex-column gap-1" style="max-width: 60px">
                            <div class="tertiary--text f-14 w-400">Email:</div>
                            <div class="tertiary--text f-14 w-400">Phone:</div>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <div class="d-flex align-center gap-2 text--text f-14 w-400">
                                <div>{{ answerSet.email }}</div>
                                <v-btn class="copy-btn" text min-width="12" width="12" max-height="20" height="20" @click="copyToClipboard(answerSet.email)">
                                    <v-icon small>mdi-content-copy</v-icon>
                                </v-btn>
                            </div>
                            <div class="d-flex align-center gap-2 text--text f-14 w-400">
                                <div>{{ answerSet.phone_number }}</div>
                                <v-btn class="copy-btn" text min-width="12" width="12" max-height="20" height="20" @click="copyToClipboard(answerSet.phone_number)">
                                    <v-icon small>mdi-content-copy</v-icon>
                                </v-btn>
                            </div>
                        </div>
                        <v-spacer />
                        <div class="d-flex flex-column align-end gap-1 justify-start width-100">
                            <div class="d-flex align-center gap-1">
                                <v-icon color="text lighten-4" size="20">mdi-credit-card-outline</v-icon>
                                <div class="text--text text--lighten-4 f-14 w-400">{{ answerSet.salary }}</div>
                            </div>
                            <div class="d-flex align-center gap-1">
                                <v-icon color="text lighten-4" size="20">mdi-calendar</v-icon>
                                <div class="text--text text--lighten-4 f-14 w-400">{{ answerSet.leave }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-space-between align-end">
                    <div class="subtext--text f-12 lh-12 w-600">Posted: {{ formatPostedDate(answerSet.created_at) }}</div>
                    <div class="d-flex gap-4">
                        <icon-btn color="error">mdi-trash-can</icon-btn>
                        <icon-btn color="accent" @click="viewAnswers(i)">mdi-menu</icon-btn>
                    </div>
                </div>
                <v-expand-transition>
                    <div v-if="viewEntry == i">
                        <v-divider />
                        <div class="mt-4 d-flex flex-column gap-5">
                            <text-field v-for="j in 5" :key="j" value="Some answer text" disabled>{{ j }}. Some question</text-field>
                            <text-area :value="answerSet.notes" disabled>Notes</text-area>
                        </div>
                    </div>
                </v-expand-transition>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { subDays, format, formatDistance } from 'date-fns';
import { useAnswerStore } from '@/store/answerStore';
import { AnswerSet } from '@/store/types/DatabaseModels';

export default Vue.extend({
    data() {
        return {
            viewEntry: undefined as number | undefined
        };
    },
    computed: {
        retrieving(): boolean {
            return useAnswerStore().loading;
        },
        answerSets(): AnswerSet[] {
            return useAnswerStore().answerSets;
        }
    },
    watch: {
        answerSets(): void {
            console.log(this.answerSets);
        }
    },
    mounted() {
        useAnswerStore().retrieveAnswerSets();
    },
    methods: {
        viewAnswers(index: number): void {
            if (this.viewEntry == index) {
                this.viewEntry = undefined;
            } else {
                this.viewEntry = index;
            }
        },
        copyToClipboard(text: string): void {
            /* Copy the text inside the text field */
            navigator.clipboard.writeText(text);
        },
        formatPostedDate(value: string): string {
            if (value) {
                const date = new Date(value);
                const now = new Date();
                if (date > subDays(now, 5)) {
                    return formatDistance(date, new Date(), { addSuffix: true });
                }
                return format(date, 'dd MMMM yyyy');
            }
            return 'unknown';
        }
    }
});
</script>

<style scoped lang="scss">
:deep(.v-textarea) textarea {
    margin-bottom: 14px !important;
}

:deep(.v-input--dense.v-text-field.v-text-field--enclosed .v-text-field__details),
:deep(.v-input--dense.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot) {
    max-height: 34px;
    min-height: 34px !important;
}

.icon-margin {
    margin-right: 6px !important;
}

.icon-margin-sm {
    margin-right: 4px !important;
}

.copy-btn {
    padding-left: 10px !important;
    padding-right: 10px !important;
}
</style>
