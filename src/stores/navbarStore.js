import { defineStore } from 'pinia'

export const useNavBarStore = defineStore('navbar', {
    state: () => {
        return { activeTab: '' }
    },
    actions: {
        changeTabActive (tab) {
            this.activeTab = tab
        },
    },
})