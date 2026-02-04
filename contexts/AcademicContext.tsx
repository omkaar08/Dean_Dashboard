"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AcademicContextType {
  academicYear: string;
  semester: string;
  setAcademicYear: (year: string) => void;
  setSemester: (semester: string) => void;
}

const AcademicContext = createContext<AcademicContextType | undefined>(undefined);

export function AcademicProvider({ children }: { children: ReactNode }) {
  const [academicYear, setAcademicYear] = useState("2025-2026");
  const [semester, setSemester] = useState("Fall");

  return (
    <AcademicContext.Provider value={{
      academicYear,
      semester,
      setAcademicYear,
      setSemester
    }}>
      {children}
    </AcademicContext.Provider>
  );
}

export function useAcademicContext() {
  const context = useContext(AcademicContext);
  if (!context) {
    throw new Error("useAcademicContext must be used within AcademicProvider");
  }
  return context;
}