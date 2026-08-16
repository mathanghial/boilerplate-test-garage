import { getServerSession } from '@/actions/auth.actions'
import { redirect } from 'next/navigation'

export default async function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return children
}