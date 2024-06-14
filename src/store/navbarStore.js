import { defineStore } from 'pinia'

export const useNavBarStore = defineStore('navbar', {
    state: () => {
        return { activeTab: 'Home' }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setActiveTab (tab) {
            this.activeTab = tab
        },
    },
})