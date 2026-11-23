import { Cloud, ShieldCheck, ClipboardCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const services = [
  { Icon: Cloud, title: 'Cloud infrastructure', description: 'Plan a migration or rebuild the foundations of an existing environment. We design around the workloads you run, the downtime you can tolerate, and the budget you need to meet.', items: ['Architecture and migration planning', 'Networking and workload isolation', 'Backup, recovery, and cost management'] },
  { Icon: ShieldCheck, title: 'Cloud security', description: 'Know who can reach your systems, what data is exposed, and how your team will respond when something goes wrong.', items: ['Identity and access reviews', 'Data protection and configuration reviews', 'Monitoring and incident response planning'] },
  { Icon: ClipboardCheck, title: 'Compliance readiness', description: 'Translate customer and regulatory requirements into controls your team can operate. See what is in place, what is missing, and which gaps to close first.', items: ['Control mapping and gap assessments', 'Evidence collection and documentation', 'Remediation planning and ownership'] },
]

export function ServicesSection() {
  return <section id="services" className="relative py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeading eyebrow="Services" title="Cloud infrastructure, security, and compliance" description="Start with the problem you need to solve. We work within a single cloud or across providers, depending on what your business needs." />
    <div className="mt-14 grid gap-6 lg:grid-cols-3">{services.map(({ Icon, title, description, items }, i) => <Reveal key={title} delay={i * 0.06} className="h-full"><article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"><Icon aria-hidden="true" className="mb-5 size-7 text-primary"/><h3 className="text-xl font-semibold text-foreground">{title}</h3><p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{description}</p><ul className="mt-6 grid list-disc gap-2 border-t border-border pt-5 pl-5 text-sm text-foreground/85 marker:text-primary">{items.map(item => <li key={item}>{item}</li>)}</ul></article></Reveal>)}</div>
    <div className="mt-10 text-center"><a href="#contact" className="font-medium text-azure-soft underline underline-offset-4">Talk to a cloud consultant</a></div>
  </div></section>
}
