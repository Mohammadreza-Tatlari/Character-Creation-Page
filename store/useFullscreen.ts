import { create } from "zustand";

interface FullscreenStore{
    isFullscreen: boolean;
    onExpandFullscreen: () => void;
    onCollapseFullscreen: () => void;
}

export const useOnFullscreen = create<FullscreenStore>((set) => (
    {
        isFullscreen: false,
        onExpandFullscreen: () => set(() => ({isFullscreen: true})),
        onCollapseFullscreen: () => set(() => ({isFullscreen: false}))
    }
))