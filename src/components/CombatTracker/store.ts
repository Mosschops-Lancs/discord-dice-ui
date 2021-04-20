import create from 'zustand';
import { createCombatant } from "./utils/utils";

export interface CreateCombatant {
    name: string;
    hp: number;
    initiative: number;
    zoneIndex: number;
}

export interface CombatantTypes extends CreateCombatant {
    wounds: string;
    conditions: string;
    id: number;
}

type State = {
    isModalOpen: boolean;
    isDragging: boolean
    zones: string[]
    combatants: CombatantTypes[]
    openModal: () => void
    closeModal: () => void
    addZone: (name: string) => void
    addCombatant: (data: CreateCombatant) => void
    setIsDragging: (dragState: boolean) => void
}

const useStore = create<State>(set => ({
    isModalOpen: false,
    isDragging: false,
    zones: [],
    combatants: [],
    openModal: () => set({ isModalOpen: false}),
    closeModal: () => set({ isModalOpen: false }),
    addZone: (zoneName) => {
        set((state) => set({ zones: [...state.zones, zoneName] }))
    },
    addCombatant: (data) => {
        set((state) => set({ combatants: [...state.combatants, createCombatant(data)] }))
    },
    setIsDragging: (dragState) => set({ isDragging: dragState })
}));

export default useStore;
