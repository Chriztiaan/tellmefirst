<template>
    <v-card class="leave-type-card d-flex flex-column pa-5" elevation="4" width="350" min-height="400">
        <div :key="typeKey" class="d-flex flex-column gap-3">
            <header-3>Sick Leave</header-3>

            <div>
                <header-5>Type<required /></header-5>
                <dropdown v-model="selectedType" dense :items="types" style="width: 250px" />
            </div>
            <template v-if="selectedType.label == LeaveType.accumulative">
                <div>
                    <header-5>Accumilation Period<required /></header-5>
                    <dropdown v-model="selectedPeriod" dense :items="periods" style="width: 250px" />
                </div>

                <div>
                    <header-5>Total Received per year<required /></header-5>
                    <div class="d-flex align-center gap-2">
                        <number-field :max="100" style="max-width: 250px" />
                        <div class="tertiary--text f-12 w-700">Days</div>
                    </div>
                </div>
                <div>
                    <header-5>Overall Limit<required /></header-5>
                    <div class="d-flex align-center gap-2">
                        <number-field :max="100" style="max-width: 250px" />
                        <div class="tertiary--text f-12 w-700">Days</div>
                    </div>
                </div>
            </template>
            <template v-if="selectedType.label == LeaveType.unlimited">
                <div>
                    <header-5>Resets<required /></header-5>
                    <dropdown v-model="selectedReset" dense :items="resets" style="width: 250px" />
                </div>
            </template>
            <template v-if="selectedType.label == LeaveType.cycle">
                <div>
                    <header-5>Duration<required /></header-5>
                    <div class="d-flex align-center gap-2">
                        <number-field :max="100" style="max-width: 250px" />
                        <div class="tertiary--text f-12 w-700">Months</div>
                    </div>
                </div>
                <div>
                    <header-5>Amount<required /></header-5>
                    <div class="d-flex align-center gap-2">
                        <number-field :max="100" style="max-width: 250px" />
                        <div class="tertiary--text f-12 w-700">Days</div>
                    </div>
                </div>
            </template>
        </div>
        <v-spacer></v-spacer>
        <div class="width-100 d-flex justify-end mt-5">
            <v-btn color="secondary" height="34" width="150">Save</v-btn>
        </div>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { DropdownOption } from '@/models/input/dropdown';

enum LeaveType {
    accumulative = 'Accumulative',
    unlimited = 'Unlimited',
    cycle = 'Cycle'
}

const types = [
    new DropdownOption(LeaveType.accumulative, 'mdi-shape-circle-plus'),
    new DropdownOption(LeaveType.unlimited, 'mdi-infinity'),
    new DropdownOption(LeaveType.cycle, 'mdi-reload')
];

const periods = [new DropdownOption('Monthly', 'mdi-calendar-month'), new DropdownOption('Yearly', 'mdi-calendar-blank')];

const resets = [
    new DropdownOption('01/01', 'mdi-calendar-today'),
    new DropdownOption('01/02', 'mdi-calendar-today'),
    new DropdownOption('01/03', 'mdi-calendar-today'),
    new DropdownOption('01/04', 'mdi-calendar-today'),
    new DropdownOption('01/05', 'mdi-calendar-today'),
    new DropdownOption('01/06', 'mdi-calendar-today'),
    new DropdownOption('01/07', 'mdi-calendar-today'),
    new DropdownOption('01/08', 'mdi-calendar-today'),
    new DropdownOption('01/09', 'mdi-calendar-today'),
    new DropdownOption('01/10', 'mdi-calendar-today'),
    new DropdownOption('01/11', 'mdi-calendar-today'),
    new DropdownOption('01/12', 'mdi-calendar-today')
];

export default Vue.extend({
    data() {
        return {
            selectedType: types[Math.round(Math.random() * 2)],
            types,
            periods,
            selectedPeriod: periods[0],

            resets,
            selectedReset: resets[0],
            LeaveType
        };
    },
    computed: {
        typeKey(): string {
            return this.selectedType.label;
        }
    }
});
</script>

<style>
.leave-type-card .header-5 {
    margin-bottom: 4px !important;
}
</style>
