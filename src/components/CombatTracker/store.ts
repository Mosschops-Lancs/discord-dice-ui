import create from 'zustand';
import { persist } from "zustand/middleware"
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
    isLocked: boolean;
    hpMax: number;
}

type ZoneIndex = number | null;

export type CombatantTypesEditableFields = Exclude<keyof CombatantTypes, 'zoneIndex' | 'id' | 'isLocked' | 'hpMax'>

type State = {
    renders: number;
    isModalOpen: boolean;
    isDragging: boolean
    zones: string[]
    hoverZone: ZoneIndex
    combatants: CombatantTypes[]
    openModal: () => void
    closeModal: () => void
    addZone: (name: string) => void
    addCombatant: (data: CreateCombatant) => void
    deleteCombatant: (id: number) => void
    updateCombatant: (
        id: number,
        field: CombatantTypesEditableFields,
        value: string
    ) => void
    lockCombatant: (id: number) => void
    setCombatantZone: (combatantId: number, zoneIndex: number) => void
    setIsDragging: (dragState: boolean) => void
    setHoverZone: (zoneIndex: ZoneIndex) => void
    forceUpdateCombatants: () => void
    clearState: () => void
}

const useStore = create<State>(persist((set => ({
    renders: 0,
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
    deleteCombatant: (combatantId) => {
        set((state) => set({ combatants: state.combatants.filter(({ id }) => id !== combatantId) }));
    },
    updateCombatant: (combatantId, field, value) => {
        set((state) => {
            const combatant = state.combatants.find(c => c.id) as CombatantTypes;
            const combatantIndex = state.combatants.findIndex(c => c.id);
            let newValue;

            if (field === 'hp' || field ===  'initiative') {
                newValue = Number(value);
            } else {
                newValue = value;
            }

            // @ts-ignore
            combatant[field] = newValue;

            const newCombatants = [...state.combatants];
            newCombatants[combatantIndex] = combatant;

            set({
                combatants: newCombatants
            });

            // set({
            //     combatants: state.combatants.map(c => {
            //         if (c.id === combatantId) {
            //             return combatant;
            //         }
            //         return c;
            //     })
            // })
        });
    },
    lockCombatant: (combatantId) => {
        set((state) => set({ combatants: state.combatants.map((combatant) => {
                if (combatantId === combatant.id) {
                    combatant.isLocked = !combatant.isLocked
                }
                return combatant;
            }) }));
     },
    setCombatantZone: (combatantId, zoneIndex) => {
        set((state) => {
            const combatants = [...state.combatants].map(combatant => {
                if (combatant.id === combatantId) {
                    combatant.zoneIndex = zoneIndex;
                }
                return combatant;
            });
            set({ combatants, renders: state.renders + 1 })
        });
    },
    setIsDragging: (dragState) => set({ isDragging: dragState }),
    setHoverZone: (zoneIndex) => set({ hoverZone: zoneIndex }),
    forceUpdateCombatants: () => set((state) => set({ renders: state.renders + 1 })),
    clearState: () => set(({ combatants }) => set({
        zones: [],
        combatants: combatants.filter(c => c.isLocked).map(c => {
            c.zoneIndex = -1;
            return c;
        })
    })),

})), {
    name: 'combat-tracker'
}));

export default useStore;
