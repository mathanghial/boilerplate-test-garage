'use client'

import { FullPageSpinner } from '@/components/shared/LoadingSpinner'
import { SocNetworkVisual } from '@/components/SocNetworkVisual'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail, signInWithGoogle } = useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace('/team')
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace('/team')
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/team')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#050b16] lg:flex-row">
      {/* Left panel — RMIT + Microsoft branding, SOC network visual (hidden on small screens) */}
      <div className="relative hidden shrink-0 flex-col justify-between overflow-hidden border-white/5 p-10 lg:flex lg:w-1/2 lg:border-r xl:w-3/5">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(14,165,233,0.12),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-sm bg-red-600 px-2 py-1 text-xs font-bold tracking-wide text-white">
              RMIT
            </span>
            <span className="text-sm text-zinc-400">University</span>
          </div>
          <div className="flex items-center gap-2">
            <MicrosoftLogo />
            <span className="text-sm font-medium text-zinc-200">Microsoft</span>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <SocNetworkVisual />
        </div>
        <div className="relative h-4" aria-hidden="true" />
      </div>

      {/* Right panel — Analyst Portal auth card */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-md space-y-6">
          {/* Mobile-only compact branding + network visual, shown when the left panel is hidden */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded-sm bg-red-600 px-2 py-1 text-xs font-bold tracking-wide text-white">
                  RMIT
                </span>
                <span className="text-sm text-zinc-400">University</span>
              </div>
              <div className="flex items-center gap-2">
                <MicrosoftLogo />
                <span className="text-sm font-medium text-zinc-200">Microsoft</span>
              </div>
            </div>
            <div className="mx-auto mt-4 w-48 sm:w-56">
              <SocNetworkVisual />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-teal-400">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest uppercase">
                Student Security Operations Center
              </span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Analyst Portal
            </h1>
            <p className="text-sm text-zinc-400">
              Authenticate to access the SOC dashboard. All sessions are monitored and logged.
            </p>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-sky-950/50 transition-colors hover:bg-sky-500"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#ffffff"
                fillOpacity="0.95"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#ffffff"
                fillOpacity="0.8"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#ffffff"
                fillOpacity="0.65"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#ffffff"
              />
            </svg>
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#050b16] px-2 tracking-widest text-zinc-500 uppercase">
                or credentials
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-widest text-zinc-400 uppercase"
              >
                Analyst ID / Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white shadow-sm placeholder:text-zinc-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 focus:outline-none aria-invalid:border-red-500"
                placeholder="you@example.com"
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-400" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-xs font-semibold tracking-widest text-zinc-400 uppercase"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 pr-10 text-sm text-white shadow-sm placeholder:text-zinc-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 focus:outline-none aria-invalid:border-red-500"
                  placeholder="••••••••"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="text-xs text-red-400" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Signing in…' : 'Sign in'}
              {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
            </button>
          </form>

          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs">
            <span className="flex items-center gap-2 text-teal-400">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
              SOC Operational
            </span>
            <span className="text-zinc-500">AUS-EAST-1</span>
          </div>

          <p className="text-center text-sm text-zinc-500">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="font-medium text-sky-400 hover:underline">
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function MicrosoftLogo() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="10" height="10" fill="#f25022" />
      <rect x="13" y="1" width="10" height="10" fill="#7fba00" />
      <rect x="1" y="13" width="10" height="10" fill="#00a4ef" />
      <rect x="13" y="13" width="10" height="10" fill="#ffb900" />
    </svg>
  )
}