<template>
    <div class="d-flex flex-column">
        <header-1 class="primary--text">Profile</header-1>

        <div class="d-flex flex-column justify-center gap-5">
            <div class="d-flex justify-center">
                <div style="position: relative" class="wfc">
                    <img
                        src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-1/40541205_10217034470244772_6784445055043108864_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEJYrvtm1iWtbIyKEn5nvAWjIqcetJSCEeMipx60lIIRy2LKTANO8VUODMtQr63bYY&_nc_ohc=hvxI9SYsBy8AX9aTEde&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8AtF1SOlRm62wKllrqaZLszK348-Y-KsWiso1Xq8AsHA&oe=6331E29F"
                        alt="John"
                        width="150"
                        height="150"
                        class="rounded-circle"
                    />
                    <v-btn
                        color="white"
                        class="text lighten-1"
                        outlined
                        icon
                        style="position: absolute; right: 2px; bottom: 12px; z-index: 100"
                        height="36"
                        max-height="36"
                        width="36"
                    >
                        <v-icon size="20">mdi-camera</v-icon>
                    </v-btn>
                </div>
            </div>

            <text-field placeholder="John Smith">Full name</text-field>
            <text-area placeholder="Tell us a bit more about yourself...">Bio</text-area>
            <v-divider />
            <div class="d-flex justify-end">
                <v-btn color="primary" width="150">Save</v-btn>
            </div>
            <v-divider />
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
export default Vue.extend({});
</script>
