import { create } from "zustand";

interface SideBarStore {
  visible: boolean;
  toggleVisibility: () => void;
}

export const useSideBarStore = create<SideBarStore>((set) => ({
  visible: false,
  toggleVisibility: () => set((state) => ({ visible: !state.visible })),
}));
