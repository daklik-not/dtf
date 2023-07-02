'use client'

import { createContext } from 'react'
import { useState } from 'react';

export const ClientContext = createContext({})

export default function ClientProvider({ children }) {
    const [tryState, setTS] = useState('');
    return <ClientContext.Provider value={{tryState}}>{children}</ClientContext.Provider>
}