'use client'

import { UserContext } from "../data/UserContext"
import { useState } from "react"

export function Providers({children,}: Readonly<{children: React.ReactNode;}>) {
  const [ user, setUser ] = useState('');
  const value = { user, setUser }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}