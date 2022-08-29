import { defineStore } from 'pinia';
import { useAuthStore } from './authStore';
import { supabase } from './setup/supabase';
import { Profile } from './types/DatabaseModels';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: undefined as Profile | undefined,
        retrieving: false,
        updating: false
    }),

    actions: {
        async retrieveProfile(userId = ''): Promise<void> {
            const derivedUserId = userId || useAuthStore().userId;
            this.retrieving = true;

            const { data, error } = await supabase.from('profiles').select().match({ user_id: derivedUserId }).limit(1).single();

            if (!error && !!data) {
                this.profile = data;
            } else {
                console.log(error);
            }

            this.retrieving = false;
        },
        async upsertProfile(profile: Profile): Promise<void> {
            this.updating = true;

            const { data, error } = await supabase.from('profiles').upsert(profile).select().single();

            if (!error && !!data) {
                this.profile = data;
            } else {
                console.log(error);
            }

            this.updating = false;
        }
    }
});
