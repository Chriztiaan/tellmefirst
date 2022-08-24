<template>
    <div class="d-flex flex-column">
        <v-btn @click="loadProfile">Profile</v-btn>
        <br />
        {{ profileLoading }}
        <br />
        {{ profile }}

        -----------------------
        <v-btn @click="loadQuestionnaire">Questionnaire</v-btn>
        <br />
        {{ questionnaireLoading }}
        <br />
        {{ questionnaire }}

        -----------------------
        <br />
        {{ questionsLoading }}
        <br />
        {{ questions }}

        ------------------------
        <v-btn @click="loadAnswerSets">Answer sets</v-btn>
        <br />
        {{ answerSetsLoading }}
        <br />
        {{ answerSets }}

        ------------------------
        <v-btn @click="loadAnswers">Answers for a set</v-btn>
        <br />

        Answers:<br />
        {{ answers }}
        <br /><br />
        Questions:<br />
        {{ questionsForAnswers }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { useProfileStore } from '@/store/profileStore';
import { useQuestionnaireStore } from '@/store/questionnaireStore';
import { useAnswerStore } from '@/store/answerStore';
import { AnswerSet, Profile, Question, Questionnaire } from '@/store/types/DatabaseModels';
import { Answer } from '@/store/DatabaseModels';

export default Vue.extend({
    data() {
        return {
            leave: { id: Math.random().toString() } as { id: string } | undefined,
        };
    },
    computed: {
        profile(): Profile | undefined {
            return useProfileStore().profile;
        },
        profileLoading(): boolean {
            return useProfileStore().loading;
        },
        questionnaire(): Questionnaire | undefined {
            return useQuestionnaireStore().questionnaire;
        },
        questionnaireLoading(): boolean {
            return useQuestionnaireStore().loading;
        },
        questionsLoading(): boolean {
            return useQuestionnaireStore().questionsLoading;
        },
        questions(): Question[] {
            return useQuestionnaireStore().questions;
        },
        answerSetsLoading(): boolean {
            return useAnswerStore().loading;
        },
        answerSets(): AnswerSet[] {
            return useAnswerStore().answerSets;
        },
        answers(): Answer[] {
            const set = useAnswerStore().answers.find((pair) => pair.key == '656da651-7d2e-4d95-b139-f9e543be9f18');
            if (set) {
                return set.answers;
            }
            return [];
        },
        questionsForAnswers(): Question[] {
            const answerIds = this.answers.map((a) => a.id);
            return (
                useAnswerStore()
                    .questions.filter((pair) => answerIds.includes(pair.answerId))
                    .map((p) => p.question) || []
            );
        },
    },
    methods: {
        loadProfile(): void {
            useProfileStore().retrieveProfile();
        },
        loadQuestionnaire(): void {
            useQuestionnaireStore().retrieveQuestionnaire();
        },
        loadAnswerSets(): void {
            useAnswerStore().retrieveAnswerSets();
        },
        loadAnswers(): void {
            useAnswerStore().retrieveAnswers('656da651-7d2e-4d95-b139-f9e543be9f18');
        },
    },
});
</script>

<style scoped lang="scss">
.v-card {
    border-radius: 10px !important;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
