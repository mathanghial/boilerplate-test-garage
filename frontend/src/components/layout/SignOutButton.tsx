'use client'

import { getClientAuth } from '@/lib/firebase/client'
import { signOut } from 'firebase/auth'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SignOutButton() {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      // Sign out of Firebase in the browser
      await signOut(getClientAuth())

      // Clear the server-side Firebase session cookie
      await fetch('/api/auth/session', {
        method: 'DELETE',
      })

      router.replace('/')
      router.refresh()
    } catch (error) {
      console.error('SIGN OUT ERROR:', error)
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
    >
      <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
      Sign out
    </button>
  )
}