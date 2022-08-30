<template>
    <div class="d-flex flex-column">
        <header-1 class="primary--text">Profile</header-1>

        <div class="d-flex flex-column justify-center gap-5">
            <div class="d-flex justify-center">
                <div v-if="loadingProfilePicture" class="d-flex align-center justify-center" style="height: 150px">
                    <v-progress-circular :size="100" :width="4" color="tertiary" indeterminate></v-progress-circular>
                </div>
                <div v-else style="position: relative" class="wfc">
                    <!-- {{ profilePicture }} -->
                    <!-- https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-1/40541205_10217034470244772_6784445055043108864_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEJYrvtm1iWtbIyKEn5nvAWjIqcetJSCEeMipx60lIIRy2LKTANO8VUODMtQr63bYY&_nc_ohc=hvxI9SYsBy8AX9aTEde&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8AtF1SOlRm62wKllrqaZLszK348-Y-KsWiso1Xq8AsHA&oe=6331E29F -->
                    <v-img :src="profilePicture" alt="John" width="150" height="150" class="rounded-circle" />

                    <v-btn
                        color="white"
                        class="text lighten-1"
                        outlined
                        icon
                        style="position: absolute; right: 2px; bottom: 12px; z-index: 100"
                        height="36"
                        max-height="36"
                        width="36"
                        @click="document.getElementById('uploader').click()"
                    >
                        <v-icon size="20">mdi-camera</v-icon>
                    </v-btn>
                    <v-file-input
                        v-show="false"
                        id="uploader"
                        v-model="file"
                        class="red"
                        hide-input
                        accept="image/png, image/jpeg"
                        placeholder="Upload your documents"
                        label="File input"
                        prepend-icon="mdi-paperclip"
                    />
                </div>
            </div>

            <text-field v-model="internalName" :disabled="updating" :loading="retrieving" placeholder="John Smith">Full name</text-field>
            <text-area v-model="internalBio" :disabled="updating" :loading="retrieving" placeholder="Tell us a bit more about yourself...">Bio</text-area>

            <v-divider />
            <div class="d-flex justify-end">
                <v-btn :disabled="retrieving && !updating" :loading="updating" color="primary" width="150" @click="save">Save</v-btn>
            </div>

            <div class="mb-12"></div>
            <div class="mb-12"></div>

            <header-4>Danger zone</header-4>
            <div class="d-flex justify-space-between align-center">
                <div class="d-flex flex-column">
                    <div class="f-16 w-600 warning--text">Reset Password</div>
                    <div class="f-12 w-500 subtext--text">This will email a link to reset your password.</div>
                </div>

                <v-btn color="warning" width="150">Reset</v-btn>
            </div>
            <div class="d-flex justify-space-between align-center">
                <div class="d-flex flex-column">
                    <div class="f-16 w-600 warning--text">Delete account</div>
                    <div class="f-12 w-500 subtext--text">This will permanently delete your account.</div>
                </div>

                <v-btn color="warning" width="150">Delete</v-btn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useProfileStore } from '@/store/profileStore';
import { Profile } from '@/store/types/DatabaseModels';

export default Vue.extend({
    data() {
        return {
            file: undefined as File | undefined,
            internalName: '',
            internalBio: '',
            // hackerman
            document
        };
    },
    computed: {
        profile(): Profile | undefined {
            return useProfileStore().profile;
        },
        retrieving(): boolean {
            return useProfileStore().retrieving;
        },
        updating(): boolean {
            return useProfileStore().updating;
        },
        loadingProfilePicture(): boolean {
            return useProfileStore().loadingProfilePicture;
        },
        name(): string {
            if (this.profile && this.profile.name) {
                return this.profile.name;
            } else {
                return '';
            }
        },
        bio(): string {
            if (this.profile && this.profile.bio) {
                return this.profile.bio;
            } else {
                return '';
            }
        },
        profilePicture(): string {
            const p = useProfileStore().profilePicture;
            if (p) {
                return p;
            }
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aMSd6UXIgSwBn5c9fvTlZwMjPjeP7vGfnSXXMy68evP4I6USVcPZqq5OYSbxUAtdbEk&usqp=CAU';
        }
    },
    watch: {
        name(): void {
            this.internalName = this.name;
        },
        bio(): void {
            this.internalBio = this.bio;
        },
        file(): void {
            if (!this.file) {
                return;
            }
            console.log(this.file);
            useProfileStore().uploadProfilePicture(this.file);
        }
    },
    mounted() {
        useProfileStore().retrieveProfile();
        useProfileStore().retrieveProfilePicture();
    },
    methods: {
        save(): void {
            if (this.profile) {
                const newProfile = structuredClone(this.profile);
                newProfile.name = this.internalName;
                newProfile.bio = this.internalBio;
                useProfileStore().upsertProfile(newProfile);
            }
        }
        // profile(): void {}
    }
});
</script>
