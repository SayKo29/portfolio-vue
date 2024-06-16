import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavBarStore = defineStore('navbar', {
    state: () => {
        return { activeTab: 'Home' }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        changeTabActive (tab) {
            this.activeTab = tab
        },
    },
})