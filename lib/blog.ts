export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: string
  author: string
  date: string // ISO 8601
  readingTime: string
  keywords: string[]
  content: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'zero-trust-microsoft-entra-id-rollout',
    title: 'Zero Trust with Microsoft Entra ID: A Practical Rollout Plan',
    description:
      'A step-by-step approach to implementing Zero Trust identity with Microsoft Entra ID—covering Conditional Access, MFA, and least-privilege access without disrupting your users.',
    category: 'Cybersecurity',
    author: 'FelxTek',
    date: '2026-07-28',
    readingTime: '7 min read',
    keywords: [
      'Zero Trust',
      'Microsoft Entra ID',
      'Conditional Access',
      'MFA',
      'Identity Governance',
    ],
    content: [
      {
        type: 'p',
        text: 'Zero Trust is no longer optional. As organizations move workloads into Microsoft Azure and Microsoft 365, the network perimeter has effectively dissolved—identity is the new control plane. Microsoft Entra ID gives you the tools to enforce "never trust, always verify," but a rushed rollout can lock out users and stall adoption. Here is the phased approach we use with clients.',
      },
      { type: 'h2', text: '1. Establish a strong identity foundation' },
      {
        type: 'p',
        text: 'Before layering on policies, clean up the basics. Consolidate identities into Entra ID, remove stale accounts, and enable security defaults or a baseline Conditional Access policy. Every downstream control depends on knowing exactly who and what is in your directory.',
      },
      { type: 'h2', text: '2. Enforce phishing-resistant MFA' },
      {
        type: 'p',
        text: 'Legacy authentication and SMS-based codes are the weakest links. Move users toward the Microsoft Authenticator app with number matching, or better still, passwordless methods such as FIDO2 keys and Windows Hello for Business.',
      },
      {
        type: 'ul',
        items: [
          'Block legacy authentication protocols entirely',
          'Require MFA for all administrators first, then all users',
          'Roll out passwordless to high-value accounts',
        ],
      },
      { type: 'h2', text: '3. Build Conditional Access around risk' },
      {
        type: 'p',
        text: 'Conditional Access is where Zero Trust becomes real. Start in report-only mode so you can measure impact before enforcing. Combine signals—user risk, sign-in risk, device compliance, and location—to make access decisions dynamically instead of granting blanket trust.',
      },
      { type: 'h2', text: '4. Apply least privilege everywhere' },
      {
        type: 'p',
        text: 'Use Privileged Identity Management (PIM) to make admin roles just-in-time and time-bound. Standing global admin access is one of the most common findings in our security assessments—and one of the easiest to eliminate.',
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We help Southern California organizations design and deploy Zero Trust with Entra ID in stages that protect the business without breaking productivity. If you want a roadmap tailored to your environment, book a Microsoft security assessment with our team.',
      },
    ],
  },
  {
    slug: 'cmmc-2-microsoft-365-gcc-high',
    title: 'Preparing for CMMC 2.0 in Microsoft 365 GCC High',
    description:
      'What defense contractors need to know about achieving CMMC 2.0 compliance on Microsoft 365 GCC High—covering CUI boundaries, tenant selection, and the controls that matter most.',
    category: 'Compliance',
    author: 'FelxTek',
    date: '2026-06-30',
    readingTime: '8 min read',
    keywords: [
      'CMMC 2.0',
      'Microsoft 365 GCC High',
      'CUI',
      'NIST 800-171',
      'Defense Contractors',
    ],
    content: [
      {
        type: 'p',
        text: 'If your organization handles Controlled Unclassified Information (CUI) for the Department of Defense, CMMC 2.0 compliance is becoming a contractual requirement. Microsoft 365 GCC High is purpose-built for this workload, but choosing and configuring it correctly is where most contractors struggle.',
      },
      { type: 'h2', text: 'Do you actually need GCC High?' },
      {
        type: 'p',
        text: 'GCC High is designed for organizations handling CUI, ITAR data, and export-controlled information. It is more restrictive—and more expensive—than commercial Microsoft 365 or standard GCC. Selecting the wrong tenant is a costly mistake to unwind, so validate your data types against your contract flow-downs first.',
      },
      { type: 'h2', text: 'Define your CUI boundary early' },
      {
        type: 'p',
        text: 'CMMC assessments hinge on a clearly documented scope. Map where CUI is created, stored, processed, and transmitted, then design your architecture to keep that boundary as small and defensible as possible.',
      },
      {
        type: 'ul',
        items: [
          'Document data flows for all CUI',
          'Segment CUI workloads from general collaboration',
          'Use compliant labeling and DLP in Microsoft Purview',
        ],
      },
      { type: 'h2', text: 'Map controls to NIST 800-171' },
      {
        type: 'p',
        text: 'CMMC Level 2 aligns with the 110 controls in NIST SP 800-171. Microsoft 365 GCC High provides the technical capabilities—encryption, access control, audit logging—but you still own configuration, policy, and evidence. A System Security Plan (SSP) and Plan of Action & Milestones (POA&M) are non-negotiable.',
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We help contractors assess GCC High readiness, design compliant Microsoft 365 architectures, and align controls to NIST 800-171 so CMMC assessments go smoothly. Reach out for a compliance readiness review.',
      },
    ],
  },
  {
    slug: 'reduce-azure-costs-without-sacrificing-security',
    title: 'Cutting Azure Costs Without Sacrificing Security',
    description:
      'Practical FinOps strategies to reduce your Microsoft Azure bill—right-sizing, reservations, and governance—while keeping your security posture intact.',
    category: 'Azure',
    author: 'FelxTek',
    date: '2026-05-19',
    readingTime: '6 min read',
    keywords: [
      'Azure Cost Optimization',
      'FinOps',
      'Azure Reservations',
      'Azure Governance',
      'Cloud Cost Management',
    ],
    content: [
      {
        type: 'p',
        text: 'Azure bills have a way of creeping up. Idle resources, over-provisioned VMs, and forgotten test environments quietly add up month over month. The good news: most organizations can cut 20–40% from their Azure spend without touching their security posture. Here is where we start.',
      },
      { type: 'h2', text: 'Right-size before you do anything else' },
      {
        type: 'p',
        text: 'Azure Advisor and Cost Management surface underutilized VMs, disks, and databases. Right-sizing—matching resource tiers to actual usage—is almost always the fastest win, and it carries zero security trade-off.',
      },
      { type: 'h2', text: 'Commit to what you know you will use' },
      {
        type: 'ul',
        items: [
          'Reserved Instances for steady-state workloads (up to ~72% savings)',
          'Azure Savings Plans for flexible compute commitments',
          'Azure Hybrid Benefit to reuse existing Windows Server and SQL licenses',
        ],
      },
      { type: 'h2', text: 'Govern with tags and budgets' },
      {
        type: 'p',
        text: 'Without governance, costs drift. Enforce tagging with Azure Policy so every resource maps to an owner and cost center, then set budgets and alerts so surprises surface before the invoice does.',
      },
      { type: 'h2', text: 'Do not cut security to save money' },
      {
        type: 'p',
        text: 'It is tempting to disable logging, drop Defender for Cloud, or shrink backup retention to trim the bill. Do not. These controls are what stand between you and a costly breach. Optimize compute and storage instead—the savings are larger and the risk is zero.',
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We run Azure cost and security optimization reviews that find savings while strengthening your posture. Let us show you where your Azure budget is leaking.',
      },
    ],
  },
  {
    slug: 'microsoft-sentinel-vs-defender-modern-soc',
    title: 'Microsoft Sentinel vs. Defender: Building a Modern SOC',
    description:
      'How Microsoft Sentinel and Microsoft Defender work together to power a modern Security Operations Center—and how to decide where each one fits.',
    category: 'Cybersecurity',
    author: 'FelxTek',
    date: '2026-04-22',
    readingTime: '7 min read',
    keywords: [
      'Microsoft Sentinel',
      'Microsoft Defender',
      'SIEM',
      'SOC',
      'Threat Detection',
    ],
    content: [
      {
        type: 'p',
        text: 'Teams often ask whether they need Microsoft Sentinel or Microsoft Defender. The answer is usually both—they solve different problems and are strongest when integrated. Understanding the distinction is the first step to building a modern, cost-effective SOC.',
      },
      { type: 'h2', text: 'Defender: protection at the source' },
      {
        type: 'p',
        text: 'Microsoft Defender is your extended detection and response (XDR) layer. Defender for Endpoint, Office 365, Identity, and Cloud protect specific workloads and correlate signals across them to catch and remediate threats close to where they happen.',
      },
      { type: 'h2', text: 'Sentinel: the cloud-native SIEM' },
      {
        type: 'p',
        text: 'Microsoft Sentinel is a cloud-native SIEM and SOAR platform. It ingests logs from across your estate—including non-Microsoft sources—then hunts, correlates, and automates response at scale. Sentinel is where your analysts live during an investigation.',
      },
      { type: 'h2', text: 'Better together' },
      {
        type: 'ul',
        items: [
          'Defender feeds high-fidelity alerts into Sentinel',
          'Sentinel correlates those signals with the rest of your environment',
          'Automation playbooks respond to incidents without manual toil',
        ],
      },
      { type: 'h2', text: 'Watch your ingestion costs' },
      {
        type: 'p',
        text: 'Sentinel is priced on data ingestion, so log everything blindly and costs balloon. A well-designed SOC is deliberate about which data sources add detection value versus which just add noise and expense.',
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We design and operate modern SOCs on Microsoft Sentinel and Defender—tuned for real detection coverage and controlled costs. Talk to us about building or managing your security operations.',
      },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
