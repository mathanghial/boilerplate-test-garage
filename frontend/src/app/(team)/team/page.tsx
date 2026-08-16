// import { ArrowRight, Menu } from 'lucide-react'
// import type { Metadata } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'About Us',
//   description: 'Meet the RMIT × Microsoft collaboration team.',
// }

// type TeamMember = {
//   name: string
//   role: string
//   blurb: string
//   photo?: string
//   initials: string
// }

// const teamMembers: TeamMember[] = [
//   {
//     name: 'Ansh Anand Parekh',
//     role: 'BA',
//     blurb:
//       'Drives requirements gathering and stakeholder alignment across the RMIT–Microsoft partnership.',
//     initials: 'AP',
//   },
//   {
//     name: 'Hafsah Yasir',
//     role: 'PM',
//     blurb:
//       'Coordinates project timelines, deliverables, communication and cross-functional collaboration between teams.',
//     initials: 'HY',
//   },
//   {
//     name: 'Mathanghi Alahapphan',
//     role: 'Dev',
//     blurb:
//       'Builds and maintains full-stack features, translating design specifications into production-ready experiences.',
//     initials: 'MA',
//   },
//   {
//     name: 'Mohammad Najmul Shakib Fahim',
//     role: 'UX',
//     blurb:
//       'Conducts extensive user research through contextual inquiry, usability testing and collaborative design.',
//     initials: 'NF',
//   },
//   {
//     name: 'Noor Marwaha',
//     role: 'Dev',
//     blurb:
//       'Develops collaborative web experiences and connects interface design with secure application functionality.',
//     initials: 'NM',
//   },
// ]

// function MicrosoftLogo() {
//   return (
//     <span className="grid h-4 w-4 grid-cols-2 gap-[1px]" aria-hidden="true">
//       <span className="bg-[#f25022]" />
//       <span className="bg-[#7fba00]" />
//       <span className="bg-[#00a4ef]" />
//       <span className="bg-[#ffb900]" />
//     </span>
//   )
// }

// function TeamMemberCard({ member }: { member: TeamMember }) {
//   return (
//     <article className="group flex min-h-[255px] flex-col rounded-xl border border-cyan-400/10 bg-[#0a192d] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-1 hover:border-cyan-400/25">
//       <div className="mb-5">
//         {member.photo ? (
//           <div className="relative h-20 w-20 overflow-hidden rounded-full border border-cyan-400/25 bg-[#0d2138]">
//             <Image
//               src={member.photo}
//               alt={`${member.name} profile`}
//               fill
//               className="object-cover"
//               sizes="80px"
//             />
//           </div>
//         ) : (
//           <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-[#08314a] text-lg font-semibold text-teal-300">
//             {member.initials}
//           </div>
//         )}
//       </div>

//       <div className="mb-4">
//         <h3 className="text-base font-semibold text-white">{member.name}</h3>

//         <span className="mt-2 inline-flex rounded-sm bg-teal-400/15 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-teal-300">
//           {member.role}
//         </span>
//       </div>

//       <p className="line-clamp-3 text-sm leading-6 text-slate-400">{member.blurb}</p>

//       <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
//         <span className="text-[11px] text-slate-500">RMIT–Microsoft</span>

//         <ArrowRight
//           className="h-3.5 w-3.5 text-teal-400 opacity-70 transition-transform group-hover:translate-x-1"
//           aria-hidden="true"
//         />
//       </div>
//     </article>
//   )
// }

// export default function TeamPage() {
//   return (
//     <main className="min-h-screen bg-[#050b16] text-white">
//       {/* Navigation */}
//       <header className="border-b border-white/[0.06] bg-[#050b16]/95">
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
//           <div className="flex items-center gap-2">
//             <span className="rounded-sm bg-[#e61e3a] px-2 py-1 text-[10px] font-bold tracking-wide text-white">
//               RMIT
//             </span>
//             <span className="text-xs text-slate-400">University</span>
//           </div>

//           <nav className="hidden items-center gap-8 text-xs text-slate-400 md:flex">
//             <a href="#about" className="text-teal-300 transition hover:text-white">
//               About
//             </a>
//             <a href="#team" className="transition hover:text-white">
//               Team
//             </a>
//             <a href="#story" className="transition hover:text-white">
//               Our Story
//             </a>
//             <Link
//               href="/dashboard"
//               className="rounded-full bg-teal-400 px-4 py-2 font-semibold text-[#042020] transition hover:bg-teal-300"
//             >
//               Go to tools
//             </Link>
//           </nav>

//           <button
//             type="button"
//             aria-label="Open navigation"
//             className="rounded-md border border-white/10 p-2 text-slate-300 md:hidden"
//           >
//             <Menu className="h-4 w-4" />
//           </button>
//         </div>
//       </header>

//       {/* Hero */}
//       <section id="about" className="border-b border-white/[0.06]">
//         <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
//           <div className="max-w-3xl">
//             <p className="mb-4 font-mono text-[11px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
//               ● RMIT–Microsoft Partnership
//             </p>

//             <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
//               About Us
//             </h1>

//             <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
//               A collaborative project between RMIT University and Microsoft, bringing together
//               students and industry expertise to design and engineer meaningful digital futures.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Story */}
//       <section id="story" className="border-b border-white/[0.06]">
//         <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.34fr_0.66fr] lg:px-10 lg:py-16">
//           <div>
//             <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
//               ● Who we are
//             </p>

//             <h2 className="text-2xl font-semibold tracking-tight">Our Story</h2>
//           </div>

//           <div className="space-y-5 text-sm leading-7 text-slate-400">
//             <p>
//               We are a group of five innovators from RMIT University in Melbourne, Australia,
//               collaborating with Microsoft to bridge academic inquiry and industry practice.
//               By combining software engineering, design and project management, we translate
//               complex challenges into intuitive, human-centred applications.
//             </p>

//             <p>
//               Through the RMIT–Microsoft partnership, we access industry mentorship, real-world
//               briefs and collaborative tools. This project is a record of our shared learning,
//               cross-disciplinary collaboration and the outcomes we create together.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section id="team" className="border-b border-white/[0.06]">
//         <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
//           <div className="mb-9">
//             <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
//               ● Collaborators
//             </p>

//             <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
//               Meet the Team
//             </h2>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {teamMembers.map((member) => (
//               <TeamMemberCard key={member.name} member={member} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#050b16]">
//         <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
//           <div className="grid gap-10 border-b border-white/[0.06] pb-10 md:grid-cols-[1fr_auto_auto]">
//             <div className="max-w-md">
//               <div className="mb-4 flex items-center gap-2">
//                 <span className="font-semibold text-[#ff3150]">RMIT</span>
//                 <span className="text-slate-600">×</span>
//                 <span className="flex items-center gap-2 font-semibold text-white">
//                   <MicrosoftLogo />
//                   Microsoft Collaboration
//                 </span>
//               </div>

//               <p className="text-xs leading-6 text-slate-500">
//                 A collaborative project between RMIT University and Microsoft, built by students
//                 in Melbourne, Victoria, Australia.
//               </p>
//             </div>

//             <div>
//               <p className="mb-4 text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
//                 Explore
//               </p>
//               <div className="space-y-2 text-xs text-slate-500">
//                 <a href="#about" className="block hover:text-teal-300">
//                   About Partnership
//                 </a>
//                 <a href="#team" className="block hover:text-teal-300">
//                   Meet the Team
//                 </a>
//               </div>
//             </div>

//             <div>
//               <p className="mb-4 text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
//                 Partner Links
//               </p>
//               <div className="space-y-2 text-xs text-slate-500">
//                 <a
//                   href="https://www.rmit.edu.au/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="block hover:text-teal-300"
//                 >
//                   RMIT University
//                 </a>
//                 <a
//                   href="https://www.microsoft.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="block hover:text-teal-300"
//                 >
//                   Microsoft
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-3 pt-6 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
//               Active Collaboration
//             </span>

//             <span>© 2026 RMIT–Microsoft Collaboration. All rights reserved.</span>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }


import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the RMIT × Microsoft collaboration team.',
}

type TeamMember = {
  name: string
  role: string
  blurb: string
  photo?: string
  initials: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ansh Anand Parekh',
    role: 'BA',
    blurb:
      'Ansh is the Business Analyst on the RMIT × Microsoft team, supporting requirements gathering, stakeholder communication and alignment between project goals and user needs.',
    photo: '/teamPhotos/Ansh.jpg',
      initials: 'AP',
  },
  {
    name: 'Hafsah Yasir',
    role: 'Project Manager',
    blurb:
      "Hi, I'm Hafsah Yasir, a final year Bachelor of Computer Science (Cyber Security) student at RMIT University and Project Manager on the RMIT × Microsoft team. I'm currently completing a cybersecurity internship at NAB, working across Zscaler and CrowdStrike security platforms as part of their Workplace Security team, and I'm passionate about protecting data and systems from real-world threats. I'm aiming for a career in cybersecurity where I can keep learning and make a genuine impact on how organisations stay secure.",
    photo: '/teamPhotos/Hafsah.jpg',
    initials: 'HY',
  },
  {
    name: 'Mathanghi Alahappan',
    role: 'Developer',
    blurb:
      "Hi, I’m Mathanghi Alahappan, a Bachelor of Computer Science student at RMIT University and a Developer on the RMIT × Microsoft team. I’m passionate about software development, cybersecurity and artificial intelligence, and I enjoy building innovative digital solutions that solve real-world problems. I’m continuously developing my technical skills and exploring emerging technologies, with the goal of building a career in technology and creating meaningful real-world impact.",
    photo: '/teamPhotos/Mathangi.png',
    initials: 'MA',
  },
  {
    name: 'Najmul Shakib Fahim',
    role: 'UX Lead',
    blurb:
      "Hi, I'm Najmul Shakib Fahim, a Bachelor of Information Technology student at RMIT University and the UX Lead on the RMIT × Microsoft team. I'm passionate about human-centred design, usability, and exploring developments in defensive cybersecurity, and I love making sure what we build actually makes sense to the people using it. I aspire to become a DFIR analyst and contribute to developing effective defensive security solutions.",
    photo: '/teamPhotos/Najmul.png',
      initials: 'NF',
  },
  {
    name: 'Noor Marwaha',
    role: 'Developer',
    blurb:
      'Hi, I’m Noor Marwaha, a Bachelor of Computer Science student at RMIT University and a Developer on the RMIT × Microsoft team. I’m passionate about AI, machine learning and building meaningful digital products, and I aspire to build a career creating intelligent technology with real-world impact.',
    photo: '/teamPhotos/Noor.png',
    initials: 'NM',
  },
]

function MicrosoftLogo() {
  return (
    <span
      className="grid h-4 w-4 grid-cols-2 gap-[1px]"
      aria-hidden="true"
    >
      <span className="bg-[#f25022]" />
      <span className="bg-[#7fba00]" />
      <span className="bg-[#00a4ef]" />
      <span className="bg-[#ffb900]" />
    </span>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-cyan-400/10 bg-[#091a2f] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.2)] transition duration-200 hover:-translate-y-1 hover:border-teal-400/30">
      <div className="mb-5">
        {member.photo ? (
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-teal-400/25 bg-[#0b2840]">
            <Image
              src={member.photo}
              alt={`${member.name} profile`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-teal-400/30 bg-[#07324d] text-lg font-semibold text-teal-300">
            {member.initials}
          </div>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-base font-semibold text-white">
          {member.name}
        </h3>

        <span className="mt-2 inline-flex rounded-sm bg-teal-400/15 px-2 py-1 font-mono text-[10px] font-semibold tracking-wide text-teal-300">
          {member.role}
        </span>
      </div>

      <p className="text-sm leading-6 text-slate-400">
        {member.blurb}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-5">
        <span className="text-[11px] text-slate-500">
          RMIT–Microsoft
        </span>

        <ArrowRight
          className="h-3.5 w-3.5 text-teal-400 opacity-70 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </article>
  )
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#050b16] text-white">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050b16]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="rounded-sm bg-[#e61e3a] px-2 py-1 text-[10px] font-bold tracking-wide text-white">
              RMIT
            </span>

            <span className="text-xs text-slate-400">
              University
            </span>
          </div>

          <nav className="flex items-center gap-4 text-xs text-slate-400 sm:gap-7">
            <a
              href="#about"
              className="hidden transition hover:text-teal-300 sm:block"
            >
              About
            </a>

            <a
              href="#team"
              className="hidden transition hover:text-teal-300 sm:block"
            >
              Team
            </a>

            <a
              href="#story"
              className="hidden transition hover:text-teal-300 md:block"
            >
              Our Story
            </a>

            <Link
              href="/dashboard"
              className="rounded-full bg-teal-400 px-4 py-2 font-semibold text-[#042020] transition hover:bg-teal-300"
            >
              Go to tools
            </Link>
          </nav>
        </div>
      </header>

      {/* ABOUT */}
      <section
        id="about"
        className="border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
              ● RMIT–Microsoft Partnership
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Us
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A collaborative project between RMIT University and Microsoft,
              bringing together students and industry expertise to design and
              engineer meaningful digital futures.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="story"
        className="border-b border-white/[0.06]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.32fr_0.68fr] lg:px-10 lg:py-16">
          <div>
            <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
              ● Who We Are
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Story
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
            <p>
              We are a group of five innovators from RMIT University in
              Melbourne, Australia, collaborating with Microsoft to bridge
              academic inquiry and industry practice. By combining software
              engineering, design, cybersecurity, business analysis and
              project management, we translate complex challenges into
              intuitive, human-centred applications.
            </p>

            <p>
              Through the RMIT–Microsoft partnership, we access industry
              mentorship, real-world briefs and collaborative tools. This
              project represents our shared learning, cross-disciplinary
              collaboration and the outcomes we create together.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <div className="mb-10">
            <p className="mb-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-teal-300 uppercase">
              ● Collaborators
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Meet the Team
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
              Meet the students bringing together software development,
              cybersecurity, user experience, business analysis and project
              leadership across our RMIT × Microsoft collaboration.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                member={member}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050b16]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-10 border-b border-white/[0.06] pb-10 md:grid-cols-[1fr_auto_auto]">
            <div className="max-w-md">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="font-semibold text-[#ff3150]">
                  RMIT
                </span>

                <span className="text-slate-600">×</span>

                <span className="flex items-center gap-2 font-semibold text-white">
                  <MicrosoftLogo />
                  Microsoft Collaboration
                </span>
              </div>

              <p className="text-xs leading-6 text-slate-500">
                A collaborative project between RMIT University and Microsoft,
                built by students in Melbourne, Victoria, Australia.
              </p>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                Explore
              </p>

              <div className="space-y-2 text-xs text-slate-500">
                <a
                  href="#about"
                  className="block transition hover:text-teal-300"
                >
                  About Partnership
                </a>

                <a
                  href="#story"
                  className="block transition hover:text-teal-300"
                >
                  Our Story
                </a>

                <a
                  href="#team"
                  className="block transition hover:text-teal-300"
                >
                  Meet the Team
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
                Partner Links
              </p>

              <div className="space-y-2 text-xs text-slate-500">
                <a
                  href="https://www.rmit.edu.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:text-teal-300"
                >
                  RMIT University
                </a>

                <a
                  href="https://www.microsoft.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition hover:text-teal-300"
                >
                  Microsoft
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Active Collaboration
            </span>

            <span>
              © 2026 RMIT–Microsoft Collaboration. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}