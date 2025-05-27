'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem("idUser")
        if (!user) {
            router.replace("/login")
        }
    }, [])

    return <>{children}</>
}