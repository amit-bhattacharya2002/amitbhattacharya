import { create } from "zustand";

type ExperienceStore = {
    inViewExperience: string | null;
    setInViewFeature: (feature: string | null) => void;
}
export const useExperienceStore = create((set) => ({
    inViewExperience: null,
    setInViewExperience: (experience: string | null) => set({inViewExperience: experience}),
})) 