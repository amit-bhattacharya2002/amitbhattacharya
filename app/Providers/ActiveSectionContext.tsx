"use client"
import React, {useState, createContext, useContext} from "react";

type ActiveSectionContextType = {
    activeSection: "Contact" | "Amit" | "About" | "Projects";
    setActiveSection: React.Dispatch<React.SetStateAction<"Amit" | "About" | "Contact" | "Projects">>
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
} :{
    children: React.ReactNode
}){
    const [activeSection, setActiveSection] = useState<"Amit" | "Projects" | "About" | "Contact">("Amit")

    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection
    }}>
        {children}
        </ActiveSectionContext.Provider>
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if(context === null){
        throw new Error(
            "useActiveSectionContext must be used within ActiveSectionContextProvider"
        )
    }

    return context;
}