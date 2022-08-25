import { defineStore } from 'pinia';
import { useAuthStore } from './authStore';
import { supabase } from './setup/supabase';
import { Question, Questionnaire } from './types/DatabaseModels';

export const useQuestionnaireStore = defineStore('questionnaire', {
    state: () => ({
        questionnaire: undefined as Questionnaire | undefined,
        questions: [] as Question[],
        loading: false,
        questionsLoading: false
    }),

    actions: {
        async retrieveQuestionnaire(userId = ''): Promise<void> {
            const derivedUserId = userId || useAuthStore().userId;
            this.questionnaire = undefined;
            this.loading = true;

            const { data, error } = await supabase.from('questionnaires').select().match({ user_id: derivedUserId }).limit(1).single();

            if (!error && !!data) {
                this.questionnaire = data;
                this.retrieveQuestionsByQuestionnaire(this.questionnaire.user_id);
            } else {
                console.log(error);
            }

            this.loading = false;
        },
        async retrieveQuestionsByQuestionnaire(questionnaireId: string): Promise<void> {
            this.questions = [];
            this.questionsLoading = true;

            const { data, error } = await supabase.from('questions').select().match({ questionnaire_id: questionnaireId }).limit(50);

            if (!error) {
                this.questions = data;
            } else {
                console.log(error);
            }

            this.questionsLoading = false;
        },
        async upsertQuestionnaire(questionnaire: Questionnaire): Promise<void> {
            this.loading = true;

            const { data, error } = await supabase.from('questionnaires').upsert(questionnaire).select().single();

            if (!error && !!data) {
                this.questionnaire = data;
            } else {
                console.log(error);
            }

            this.loading = false;
        },
        async upsertQuestion(question: Question): Promise<void> {
            const { data, error } = await supabase.from('questions').upsert(question).select().single();

            if (!error && !!data) {
                const q = this.questions.find((q) => q.id == data.id);
                if (q) {
                    Object.assign(q, data);
                } else {
                    this.questions.push(data);
                }
                Object.assign(question, data);
            } else {
                console.log(error);
            }
        }
    }
});
