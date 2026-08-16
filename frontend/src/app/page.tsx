// import type { Metadata } from 'next'
// import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to the app',
// }

// export default function LandingPage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
//       <div className="space-y-4 text-center">
//         <h1 className="text-4xl font-bold tracking-tight">
//           {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
//         </h1>
//         <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
//           Your app description goes here. Edit{' '}
//           <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-sm dark:bg-zinc-800">
//             src/app/page.tsx
//           </code>{' '}
//           to get started.
//         </p>
//       </div>
//       <div className="flex gap-4">
//         <Link
//           href="/auth/signin"
//           className="inline-flex items-center justify-center rounded-md bg-black px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
//         >
//           Sign in
//         </Link>
//         <Link
//           href="/auth/signup"
//           className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
//         >
//           Create account
//         </Link>
//       </div>
//     </main>
//   )
// }


import { getServerSession } from '@/actions/auth.actions'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Home',
  description: 'RMIT × Microsoft Collaboration',
}

export default async function HomePage() {
  const session = await getServerSession()

  if (session) {
    redirect('/team')
  }

  return (
    <main className="min-h-screen bg-[#050b16] text-white">
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="rounded-sm bg-[#e61e3a] px-2 py-1 text-[10px] font-bold tracking-wide text-white">
              RMIT
            </span>

            <span className="text-xs text-slate-400">University</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <MicrosoftLogo />
            <span>Microsoft</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(20,184,166,0.12),transparent_55%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-teal-300">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-[0.12em] uppercase">
                RMIT × Microsoft Collaboration
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building secure, intelligent and human-centred digital experiences.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A collaborative RMIT University and Microsoft project bringing together
              software development, cybersecurity, user experience, business analysis
              and project leadership to solve real-world digital challenges.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/signin"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-[#042020] transition hover:bg-teal-300"
              >
                Sign in to Analyst Portal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Request access
              </Link>
            </div>

            <div className="mt-12 grid gap-4 border-t border-white/[0.06] pt-8 sm:grid-cols-3">
              <div>
                <p className="text-lg font-semibold text-white">RMIT</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Student-led innovation and applied learning.
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">Microsoft</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Industry collaboration and real-world technology practice.
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">Team 2</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  A multidisciplinary student team building meaningful digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function MicrosoftLogo() {
  return (
    <span className="grid h-4 w-4 grid-cols-2 gap-[1px]" aria-hidden="true">
      <span className="bg-[#f25022]" />
      <span className="bg-[#7fba00]" />
      <span className="bg-[#00a4ef]" />
      <span className="bg-[#ffb900]" />
    </span>
  )
}