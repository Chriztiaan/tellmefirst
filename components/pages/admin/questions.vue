<template>
    <div class="d-flex flex-column">
        <header-1 class="primary--text">Questions</header-1>

        <div class="d-flex flex-column gap-5" style="max-width: 487px">
            <text-field placeholder="Give your form a name">Title</text-field>

            <div v-for="(q, i) in questions" :key="q.id" class="d-flex align-end gap-4">
                <text-field placeholder="What would you like to ask?">{{ i + 1 }}.</text-field>
                <icon-btn color="error" @click="removeQuestion(i)">mdi-trash-can</icon-btn>
            </div>

            <v-btn v-ripple="false" class="pl-0" text plain width="220" @click="addQuestion">
                <v-icon left class="primary--text">mdi-plus-circle-outline</v-icon>
                <div class="primary--text link-btn">Add another question</div>
            </v-btn>

            <v-divider></v-divider>
            <div class="d-flex justify-end">
                <v-btn color="primary" width="150">Save</v-btn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Question } from '@/store/types/DatabaseModels';

export default Vue.extend({
    data() {
        return {
            questions: [] as Question[]
        };
    },
    mounted() {
        const q = { id: 'some id', content: 'What tech stack would I be working with' } as Question;
        this.questions.push(q);

        const b = { id: 'some id2', content: 'What tech stack would I be working with' } as Question;
        this.questions.push(b);
    },
    methods: {
        removeQuestion(index: number): void {
            this.questions.splice(index, 1);
            if (!this.questions.length) {
                this.addQuestion();
            }
        },
        addQuestion(): void {
            const b = { id: 'some id2' + Math.random() * 100000, content: 'What tech stack would I be working with' } as Question;
            this.questions.push(b);
        }
    }
});
</script>

<style scoped>
.link-btn:hover {
    text-decoration: underline;
}
.item {
    max-width: 430px;
}

:deep(.v-text-field) {
    width: 430px !important;
    max-width: 430px !important;
}
</style>
