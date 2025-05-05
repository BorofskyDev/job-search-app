'use client'

import { AuthProvider } from "@/context/auth/AuthProvider"

export function Providers({children}: {children: React.ReactNode}) {
    return <AuthProvider>{children}</AuthProvider>
}