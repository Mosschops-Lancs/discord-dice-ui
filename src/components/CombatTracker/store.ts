import create from 'zustand';

export interface Combatant {
    combatantName: string;
    zoneIndex: number;
    initiative: number;
    hp: number
}

type State = {
    isModalOpen: boolean
    zones: string[]
    combatants: Combatant[]
    openModal: () => void
    closeModal: () => void
    addZone: (name: string) => void
    addCombatant: (data: Combatant) => void
}

const useStore = create<State>(set => ({
    isModalOpen: false,
    zones: [],
    combatants: [],
    openModal: () => set({ isModalOpen: false}),
    closeModal: () => set({ isModalOpen: false }),
    addZone: (zoneName) => {
        set((state) => set({ zones: [...state.zones, zoneName] }))
    },
    addCombatant: (combatant) => {
        set((state) => set({ combatants: [...state.combatants, combatant] }))
    }
}));

export default useStore;
