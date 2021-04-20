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

type ZoneIndex = number | null;

type State = {
    isModalOpen: boolean;
    isDragging: boolean
    zones: string[]
    hoverZone: ZoneIndex
    combatants: CombatantTypes[]
    openModal: () => void
    closeModal: () => void
    addZone: (name: string) => void
    addCombatant: (data: CreateCombatant) => void
    setCombatantZone: (combatantId: number, zoneIndex: number) => void
    setIsDragging: (dragState: boolean) => void
    setHoverZone: (zoneIndex: ZoneIndex) => void
}

const useStore = create<State>(set => ({
    isModalOpen: false,
    isDragging: false,
    zones: [],
    combatants: [],
    hoverZone: null,
    openModal: () => set({ isModalOpen: false}),
    closeModal: () => set({ isModalOpen: false }),
    addZone: (zoneName) => {
        set((state) => set({ zones: [...state.zones, zoneName] }))
    },
    addCombatant: (data) => {
        set((state) => set({ combatants: [...state.combatants, createCombatant(data)] }));
    },
    setCombatantZone: (combatantId, zoneIndex) => {
        set((state) => {
            const combatants = [...state.combatants].map(combatant => {
                if (combatant.id === combatantId) {
                    combatant.zoneIndex = zoneIndex;
                }
                return combatant;
            });
            set({ combatants })
        });
    },
    setIsDragging: (dragState) => set({ isDragging: dragState }),
    setHoverZone: (zoneIndex) => set({ hoverZone: zoneIndex })
}));

export default useStore;
