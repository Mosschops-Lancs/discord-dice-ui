import create from 'zustand';

const useStore = create(set => ({
    isModalOpen: false,
    openModal: () => set({ isModalOpen: false}),
    closeModal: () => set({ isModalOpen: false })
}));

export default useStore;
