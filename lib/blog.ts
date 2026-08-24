export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }

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
    readingTime: '12 min read',
    keywords: [
      'Zero Trust',
      'Microsoft Entra ID',
      'Conditional Access',
      'MFA',
      'Identity Governance',
      'Privileged Identity Management',
      'Passwordless',
    ],
    content: [
      {
        type: 'p',
        text: 'Zero Trust is no longer optional. As organizations move workloads into Microsoft Azure and Microsoft 365, the network perimeter has effectively dissolved—identity is the new control plane. Microsoft Entra ID gives you the tools to enforce "never trust, always verify," but a rushed rollout can lock out users, generate a flood of help-desk tickets, and stall executive support for the entire program. This guide walks through the phased approach we use with clients so you can raise your security posture without grinding productivity to a halt.',
      },
      {
        type: 'p',
        text: 'The core idea behind Zero Trust is simple to state and hard to implement: every access request is treated as if it originates from an untrusted network, and it must be explicitly verified before access is granted. In practice that means authenticating the user, validating the health and compliance of their device, evaluating the risk of the session, and granting only the minimum access required—every single time. Entra ID is the engine that makes those decisions in real time.',
      },
      {
        type: 'quote',
        text: 'The fastest way to derail a Zero Trust program is to enforce a sweeping policy on day one. Measure first, communicate constantly, then enforce in stages.',
      },
      { type: 'h2', text: 'The three principles that guide every decision' },
      {
        type: 'p',
        text: 'Before touching a single policy, align your team on the three principles that Microsoft and NIST both anchor Zero Trust to. Every configuration choice you make should trace back to one of them.',
      },
      {
        type: 'ul',
        items: [
          'Verify explicitly — always authenticate and authorize based on all available signals: identity, location, device health, service, workload, and data classification.',
          'Use least-privilege access — limit users with just-in-time and just-enough access, risk-based adaptive policies, and data protection to secure both data and productivity.',
          'Assume breach — minimize blast radius, segment access, verify end-to-end encryption, and use analytics to get visibility and drive threat detection.',
        ],
      },
      { type: 'h2', text: '1. Establish a strong identity foundation' },
      {
        type: 'p',
        text: 'Before layering on policies, clean up the basics. Consolidate identities into Entra ID, remove stale accounts, and enable a baseline Conditional Access policy. Every downstream control depends on knowing exactly who and what is in your directory. Skipping this step is the single most common reason Zero Trust projects produce false positives and frustrated users later.',
      },
      { type: 'h3', text: 'Inventory and clean up first' },
      {
        type: 'ol',
        items: [
          'Export a full list of users, guests, and service principals, and flag any account that has not signed in within 90 days.',
          'Disable or delete orphaned accounts, and convert shared mailboxes and service accounts to managed identities or workload identities where possible.',
          'Reconcile group membership so that access is granted through groups, not one-off direct assignments.',
          'Confirm that every human account maps to a real, current employee or contractor with a defined role.',
        ],
      },
      {
        type: 'p',
        text: 'This cleanup pays dividends immediately. A directory full of dormant accounts is a directory full of attack surface, and it makes every risk-based policy noisier and harder to tune.',
      },
      { type: 'h2', text: '2. Enforce phishing-resistant MFA' },
      {
        type: 'p',
        text: 'Legacy authentication and SMS-based codes are the weakest links in most environments. SMS is vulnerable to SIM-swap and interception, and legacy protocols like IMAP, POP, and older Exchange endpoints simply bypass modern controls entirely. Move users toward the Microsoft Authenticator app with number matching, or better still, passwordless methods such as FIDO2 security keys, Windows Hello for Business, and passkeys.',
      },
      {
        type: 'ul',
        items: [
          'Block legacy authentication protocols entirely—this alone stops a large share of password-spray and credential-stuffing attacks.',
          'Require MFA for all administrators first, validate the experience, then expand to all users.',
          'Roll out passwordless authentication to high-value and privileged accounts as the next step up from app-based MFA.',
          'Enable number matching and additional context in Authenticator to defeat MFA-fatigue and prompt-bombing attacks.',
        ],
      },
      {
        type: 'p',
        text: 'Communicate the change well ahead of time. A short internal guide with screenshots, a two-week enrollment window, and a clear help-desk escalation path will prevent the vast majority of support tickets. The goal is for MFA to feel like a minor, one-time setup rather than a daily obstacle.',
      },
      { type: 'h2', text: '3. Build Conditional Access around risk' },
      {
        type: 'p',
        text: 'Conditional Access is where Zero Trust becomes real. Instead of granting blanket trust once a password is entered, Conditional Access evaluates signals at the moment of access and decides whether to allow, block, or require additional verification. This is the heart of "verify explicitly."',
      },
      { type: 'h3', text: 'Start in report-only mode' },
      {
        type: 'p',
        text: 'Every new policy should launch in report-only mode. This logs exactly what would have happened—who would have been blocked, who would have been prompted—without actually enforcing anything. Run it for one to two weeks, review the sign-in logs and the What If tool, and only then flip the policy to enforced. This single habit prevents almost every lockout incident.',
      },
      { type: 'h3', text: 'Combine signals for smarter decisions' },
      {
        type: 'ul',
        items: [
          'User and sign-in risk from Entra ID Protection to catch compromised credentials and anomalous behavior.',
          'Device compliance and management state from Intune so that only healthy, managed devices reach sensitive resources.',
          'Location and named networks to add friction for access from unexpected geographies.',
          'Application sensitivity so that your most critical apps require the strongest controls while low-risk apps stay frictionless.',
        ],
      },
      {
        type: 'p',
        text: 'A well-designed set of Conditional Access policies is layered and specific, not a single catch-all rule. Build a small library of named policies—one for admins, one for all users, one for legacy auth, one for high-risk sign-ins—so each is easy to reason about and audit.',
      },
      { type: 'h2', text: '4. Apply least privilege everywhere' },
      {
        type: 'p',
        text: 'Use Privileged Identity Management (PIM) to make admin roles just-in-time and time-bound. Standing global administrator access is one of the most common—and most dangerous—findings in our security assessments, and it is one of the easiest to eliminate. With PIM, an administrator activates a role only when they need it, for a limited window, optionally with approval and justification, and every activation is logged.',
      },
      {
        type: 'ol',
        items: [
          'Reduce the number of global administrators to the smallest possible set—Microsoft recommends fewer than five.',
          'Convert standing privileged assignments to eligible assignments through PIM so access is activated on demand.',
          'Require MFA and a business justification at activation time, and enable approval workflows for the most sensitive roles.',
          'Schedule recurring access reviews so entitlements are re-certified rather than accumulating silently.',
        ],
      },
      {
        type: 'quote',
        text: 'If an attacker compromises an account with standing global admin rights, they inherit the keys to your entire tenant. Just-in-time access shrinks that window from permanent to minutes.',
      },
      { type: 'h2', text: '5. Monitor, measure, and iterate' },
      {
        type: 'p',
        text: 'Zero Trust is not a project you finish; it is a posture you maintain. Feed Entra ID sign-in and audit logs into Microsoft Sentinel or your SIEM, build dashboards for MFA coverage, risky sign-ins, and privileged activations, and review them on a regular cadence. As your environment changes, your policies should evolve with it.',
      },
      {
        type: 'p',
        text: 'Track a few concrete metrics so you can show progress to leadership: percentage of users covered by phishing-resistant MFA, number of standing privileged assignments eliminated, count of legacy authentication attempts blocked, and mean time to review risky sign-ins. These numbers turn an abstract security initiative into a story executives can support and fund.',
      },
      { type: 'h2', text: 'Common pitfalls to avoid' },
      {
        type: 'ul',
        items: [
          'Enforcing policies without report-only testing, which leads to lockouts and lost trust in the program.',
          'Forgetting break-glass emergency access accounts that are excluded from Conditional Access so you never lock yourself out of the tenant.',
          'Leaving legacy authentication enabled "just in case," which quietly undermines every other control.',
          'Treating MFA rollout as an IT-only task instead of a change-management effort with communication and training.',
        ],
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We help Southern California organizations design and deploy Zero Trust with Entra ID in stages that protect the business without breaking productivity. From directory cleanup and MFA rollout to Conditional Access design and PIM implementation, we build a roadmap tailored to your environment and support you through every phase. If you want a Zero Trust plan that fits your team, book a Microsoft security assessment with our engineers.',
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
    readingTime: '13 min read',
    keywords: [
      'CMMC 2.0',
      'Microsoft 365 GCC High',
      'CUI',
      'NIST 800-171',
      'Defense Contractors',
      'DFARS',
      'System Security Plan',
    ],
    content: [
      {
        type: 'p',
        text: 'If your organization handles Controlled Unclassified Information (CUI) for the Department of Defense, CMMC 2.0 compliance is becoming a contractual requirement rather than a nice-to-have. Microsoft 365 GCC High is purpose-built for this workload, but choosing and configuring it correctly is where most contractors struggle—and where an incorrect decision can cost months of rework and a failed assessment.',
      },
      {
        type: 'p',
        text: 'CMMC—the Cybersecurity Maturity Model Certification—exists to verify that contractors in the Defense Industrial Base actually implement the security controls they have long been required to attest to. Version 2.0 streamlined the model into three levels and aligned Level 2 directly with the 110 controls of NIST SP 800-171. For most contractors handling CUI, Level 2 with a third-party assessment is the target.',
      },
      {
        type: 'quote',
        text: 'The platform does not make you compliant. GCC High gives you the technical capability to meet the controls, but scoping, configuration, policy, and evidence are still entirely your responsibility.',
      },
      { type: 'h2', text: 'Understand the CMMC 2.0 levels' },
      {
        type: 'p',
        text: 'Before making any platform decision, be clear about which level your contracts actually require. Over-scoping wastes money; under-scoping fails assessments.',
      },
      {
        type: 'ul',
        items: [
          'Level 1 (Foundational) — 15 basic safeguarding requirements for Federal Contract Information (FCI), verified by annual self-assessment.',
          'Level 2 (Advanced) — the 110 controls of NIST SP 800-171 for protecting CUI, verified by a triennial third-party assessment for most contracts.',
          'Level 3 (Expert) — an enhanced set of controls based on NIST SP 800-172 for the highest-priority programs, assessed by the government.',
        ],
      },
      { type: 'h2', text: 'Do you actually need GCC High?' },
      {
        type: 'p',
        text: 'GCC High is designed for organizations handling CUI, ITAR data, and export-controlled information. It runs in a segregated cloud environment that meets FedRAMP High and supports DFARS 7012 requirements, including data residency within the United States and access limited to screened U.S. persons. It is more restrictive—and more expensive—than commercial Microsoft 365 or standard GCC.',
      },
      { type: 'h3', text: 'GCC High vs. Commercial vs. GCC' },
      {
        type: 'ul',
        items: [
          'Commercial Microsoft 365 can meet many NIST 800-171 controls but does not guarantee U.S. data residency or U.S.-person access, which is a problem for ITAR and certain CUI categories.',
          'GCC (moderate) offers U.S. data residency and a government community cloud but does not meet the ITAR and DFARS 7012 requirements that GCC High does.',
          'GCC High meets FedRAMP High, DFARS 7012, and ITAR requirements, making it the safe choice for contractors with export-controlled CUI.',
        ],
      },
      {
        type: 'p',
        text: 'Selecting the wrong tenant is a costly mistake to unwind—migrations between these environments are non-trivial and disruptive. Validate your data types against your contract flow-downs and speak with your prime or contracting officer before you commit.',
      },
      { type: 'h2', text: 'Define your CUI boundary early' },
      {
        type: 'p',
        text: 'CMMC assessments hinge on a clearly documented scope. The assessor needs to see exactly where CUI lives and how it is protected. Map where CUI is created, stored, processed, and transmitted, then design your architecture to keep that boundary as small and defensible as possible. A smaller boundary means fewer systems to secure, fewer controls to implement, and a faster, cheaper assessment.',
      },
      {
        type: 'ol',
        items: [
          'Identify every source and destination of CUI, including email, file storage, endpoints, and any third-party services.',
          'Segment CUI workloads away from general collaboration so that the assessment scope does not sprawl across your whole environment.',
          'Apply Microsoft Purview sensitivity labels and data loss prevention policies to classify and protect CUI automatically.',
          'Document data flows in diagrams that your assessor can follow without ambiguity.',
        ],
      },
      { type: 'h2', text: 'Map controls to NIST 800-171' },
      {
        type: 'p',
        text: 'CMMC Level 2 aligns with the 110 controls in NIST SP 800-171, organized across 14 control families ranging from Access Control and Audit and Accountability to Incident Response and System and Communications Protection. Microsoft 365 GCC High provides the technical capabilities—encryption, multifactor authentication, access control, and audit logging—but you still own configuration, policy, and evidence.',
      },
      { type: 'h3', text: 'The documents you cannot skip' },
      {
        type: 'ul',
        items: [
          'A System Security Plan (SSP) describing how each of the 110 controls is implemented in your environment.',
          'A Plan of Action and Milestones (POA&M) tracking any control not yet fully met, with owners and target dates.',
          'Supporting evidence—policies, procedures, screenshots, and logs—that demonstrates each control is operating, not just documented.',
        ],
      },
      {
        type: 'p',
        text: 'Your SPRS (Supplier Performance Risk System) score is derived directly from your SSP and POA&M. An honest, well-documented score is far better than an inflated one that collapses under assessment.',
      },
      { type: 'h2', text: 'A realistic readiness timeline' },
      {
        type: 'p',
        text: 'Most contractors underestimate how long CMMC readiness takes. Between tenant migration, control implementation, policy development, and evidence collection, a realistic timeline for a mid-sized contractor is six to twelve months before an assessment. Starting early—and sequencing the work—keeps the effort manageable.',
      },
      {
        type: 'ol',
        items: [
          'Scope and gap assessment: determine your CUI boundary and measure current state against the 110 controls.',
          'Platform and architecture: stand up or migrate to GCC High and configure the technical controls.',
          'Policy and process: write the SSP, POA&M, and supporting policies, and operationalize them.',
          'Evidence and pre-assessment: collect artifacts, run an internal mock assessment, and close remaining gaps before the C3PAO arrives.',
        ],
      },
      { type: 'h2', text: 'Common mistakes contractors make' },
      {
        type: 'ul',
        items: [
          'Choosing commercial Microsoft 365 to save money, then discovering ITAR or DFARS requirements force a costly migration to GCC High.',
          'Letting the CUI boundary sprawl across the entire tenant, ballooning the assessment scope and cost.',
          'Treating documentation as an afterthought—assessors evaluate evidence, not intentions.',
          'Assuming the cloud provider handles compliance for you rather than understanding the shared-responsibility model.',
        ],
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We help defense contractors assess GCC High readiness, design compliant Microsoft 365 architectures, define defensible CUI boundaries, and align controls to NIST 800-171 so CMMC assessments go smoothly. From gap assessment to SSP development to pre-assessment support, we guide you through the full journey. Reach out for a CMMC compliance readiness review.',
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
    readingTime: '11 min read',
    keywords: [
      'Azure Cost Optimization',
      'FinOps',
      'Azure Reservations',
      'Azure Governance',
      'Cloud Cost Management',
      'Azure Hybrid Benefit',
      'Right-sizing',
    ],
    content: [
      {
        type: 'p',
        text: 'Azure bills have a way of creeping up. Idle resources, over-provisioned virtual machines, orphaned disks, and forgotten test environments quietly add up month over month until finance starts asking hard questions. The good news: most organizations can cut 20 to 40 percent from their Azure spend without touching their security posture. The key is knowing which levers to pull—and which ones to leave alone.',
      },
      {
        type: 'p',
        text: 'Cost optimization is a discipline, not a one-time cleanup. The FinOps model breaks it into three continuous phases: Inform (get visibility into what you are spending and why), Optimize (take action to reduce waste and commit strategically), and Operate (build governance so savings stick). This article walks through practical moves in each phase.',
      },
      {
        type: 'quote',
        text: 'The largest cloud savings almost never come from cutting security. They come from eliminating waste you did not know you had.',
      },
      { type: 'h2', text: 'Phase 1: Inform — get visibility first' },
      {
        type: 'p',
        text: 'You cannot optimize what you cannot see. Before making any changes, turn on the tools that show you where money is actually going. Azure Cost Management and Billing, combined with Azure Advisor, give you cost breakdowns by resource, subscription, and tag, along with concrete recommendations.',
      },
      {
        type: 'ul',
        items: [
          'Review Cost Management to identify your top-spending resources and any month-over-month spikes.',
          'Check Azure Advisor cost recommendations, which highlight idle and underutilized resources automatically.',
          'Tag resources by owner, environment, and cost center so spend maps to accountability.',
        ],
      },
      { type: 'h2', text: 'Phase 2: Optimize — right-size before anything else' },
      {
        type: 'p',
        text: 'Right-sizing—matching resource tiers to actual usage—is almost always the fastest win, and it carries zero security trade-off. Azure Advisor and the VM metrics in Monitor surface machines running at a fraction of their capacity. Downsizing an over-provisioned VM or switching to a more efficient series can cut its cost dramatically without any impact on protection.',
      },
      { type: 'h3', text: 'Clean up the quiet waste' },
      {
        type: 'ul',
        items: [
          'Delete or archive unattached managed disks that continue to bill even though no VM uses them.',
          'Deallocate or schedule shutdown for development and test VMs outside business hours.',
          'Remove idle public IP addresses, stale snapshots, and empty resource groups.',
          'Move infrequently accessed blob data to cool or archive storage tiers.',
        ],
      },
      { type: 'h3', text: 'Commit to what you know you will use' },
      {
        type: 'p',
        text: 'Once you have right-sized, lock in savings on the workloads that run continuously. Azure offers several commitment options that trade flexibility for substantial discounts.',
      },
      {
        type: 'ul',
        items: [
          'Reserved Instances for steady-state workloads, offering up to roughly 72 percent savings over pay-as-you-go for one- or three-year commitments.',
          'Azure Savings Plans for compute, which give flexible discounts across VM families in exchange for an hourly spend commitment.',
          'Azure Hybrid Benefit to reuse existing Windows Server and SQL Server licenses with Software Assurance, cutting VM costs significantly.',
          'Spot Virtual Machines for interruptible, fault-tolerant workloads like batch processing at a deep discount.',
        ],
      },
      { type: 'h2', text: 'Phase 3: Operate — govern so savings stick' },
      {
        type: 'p',
        text: 'Without governance, costs drift right back up. The final phase is building guardrails so that new resources are efficient by default and overspend surfaces before the invoice does.',
      },
      {
        type: 'ol',
        items: [
          'Enforce tagging with Azure Policy so every resource maps to an owner and cost center automatically.',
          'Set budgets and alerts at the subscription and resource-group level so surprises trigger notifications early.',
          'Restrict expensive SKUs and regions with policy to prevent accidental deployment of oversized resources.',
          'Hold a recurring cost review with engineering and finance so optimization becomes a habit, not a fire drill.',
        ],
      },
      { type: 'h2', text: 'Do not cut security to save money' },
      {
        type: 'p',
        text: 'It is tempting to disable logging, drop Microsoft Defender for Cloud, or shrink backup retention to trim the bill. Do not. These controls are what stand between you and a breach that costs far more than any line item you would save. A single ransomware incident or compliance failure dwarfs the modest monthly cost of proper logging and threat protection.',
      },
      {
        type: 'ul',
        items: [
          'Keep Defender for Cloud enabled on production workloads—it is one of the highest-value security investments in Azure.',
          'Retain audit and activity logs long enough to meet your compliance and incident-response needs.',
          'Maintain backup and disaster-recovery retention aligned to your recovery objectives, not to a cost target.',
          'Optimize compute and storage instead, where the savings are larger and the risk is zero.',
        ],
      },
      {
        type: 'quote',
        text: 'Trimming security to save a few hundred dollars a month is a false economy. Optimize the compute and storage that make up the bulk of your bill, and leave the guardrails standing.',
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We run Azure cost and security optimization reviews that find savings while strengthening your posture, not weakening it. We identify waste, structure your reservations and hybrid benefits, and put governance in place so your bill stays predictable. Let us show you where your Azure budget is leaking—and how to close the gaps for good.',
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
    readingTime: '12 min read',
    keywords: [
      'Microsoft Sentinel',
      'Microsoft Defender',
      'SIEM',
      'SOAR',
      'SOC',
      'Threat Detection',
      'XDR',
    ],
    content: [
      {
        type: 'p',
        text: 'Teams often ask whether they need Microsoft Sentinel or Microsoft Defender. The answer is usually both—they solve different problems and are strongest when integrated. Understanding the distinction is the first step to building a modern, cost-effective Security Operations Center (SOC) that catches real threats without drowning your analysts in noise.',
      },
      {
        type: 'p',
        text: 'At a high level, Defender is an XDR (extended detection and response) platform that protects and responds within specific workloads, while Sentinel is a cloud-native SIEM and SOAR platform that unifies signals across your entire estate. One is deep, the other is broad. A modern SOC uses both: Defender generates high-fidelity detections at the source, and Sentinel correlates them with everything else to give analysts the full picture.',
      },
      {
        type: 'quote',
        text: 'Defender tells you a laptop is compromised. Sentinel tells you that same identity just logged into three other systems and exfiltrated data. You need both stories.',
      },
      { type: 'h2', text: 'Defender: protection at the source' },
      {
        type: 'p',
        text: 'Microsoft Defender is your extended detection and response layer. It is a family of products that each protect a specific workload and then correlate signals across them to catch and remediate threats close to where they happen. Because Defender understands the context of each workload deeply, its alerts tend to be high-fidelity and actionable.',
      },
      {
        type: 'ul',
        items: [
          'Defender for Endpoint protects laptops, servers, and mobile devices with EDR, attack-surface reduction, and automated investigation.',
          'Defender for Office 365 guards against phishing, malicious links, and business email compromise.',
          'Defender for Identity detects credential theft, lateral movement, and reconnaissance against Active Directory and Entra ID.',
          'Defender for Cloud secures Azure, multi-cloud, and hybrid workloads and manages your security posture.',
        ],
      },
      {
        type: 'p',
        text: 'Together these products form Microsoft Defender XDR, which correlates detections across endpoints, email, identity, and cloud into unified incidents. For many mid-sized organizations, Defender XDR alone provides strong coverage across the most common attack paths.',
      },
      { type: 'h2', text: 'Sentinel: the cloud-native SIEM and SOAR' },
      {
        type: 'p',
        text: 'Microsoft Sentinel is a cloud-native SIEM and SOAR platform. It ingests logs from across your estate—including non-Microsoft sources like firewalls, network devices, SaaS applications, and other clouds—then hunts, correlates, and automates response at scale. Sentinel is where your analysts live during an investigation, and where you build the long-term visibility that compliance and threat hunting require.',
      },
      { type: 'h3', text: 'What Sentinel adds on top of Defender' },
      {
        type: 'ul',
        items: [
          'A single pane of glass across Microsoft and non-Microsoft sources, so you are not investigating in five different consoles.',
          'Custom analytics rules and threat hunting with KQL for detections tailored to your environment.',
          'SOAR playbooks that automate response actions—disabling accounts, isolating devices, opening tickets—without manual toil.',
          'Long-term log retention for compliance, forensics, and hunting across historical data.',
        ],
      },
      { type: 'h2', text: 'Better together' },
      {
        type: 'p',
        text: 'The real power comes from integration. Defender feeds its high-fidelity incidents directly into Sentinel through a native connector, and Sentinel enriches them with signals from the rest of your environment. Analysts investigate a unified incident, and automated playbooks execute the response.',
      },
      {
        type: 'ol',
        items: [
          'Defender detects a threat within a workload and raises a high-fidelity incident.',
          'The incident streams into Sentinel, where it is correlated with firewall, network, and SaaS logs.',
          'An analytics rule confirms the pattern and triggers a SOAR playbook.',
          'The playbook contains the threat—isolating the device, disabling the account, and notifying the team—while preserving evidence.',
        ],
      },
      { type: 'h2', text: 'Watch your ingestion costs' },
      {
        type: 'p',
        text: 'Sentinel is priced primarily on data ingestion, so if you pipe every log in blindly, costs balloon fast. A well-designed SOC is deliberate about which data sources add genuine detection value versus which just add noise and expense. Cost discipline is a core part of SOC design, not an afterthought.',
      },
      {
        type: 'ul',
        items: [
          'Prioritize high-value sources—identity, endpoint, email, and critical network logs—for full ingestion.',
          'Use basic or auxiliary logs tiers for high-volume, low-signal data you only need occasionally.',
          'Apply data collection rules to filter and transform noisy logs before they are ingested.',
          'Enable commitment tiers once your ingestion volume is predictable to lower the per-gigabyte rate.',
        ],
      },
      {
        type: 'quote',
        text: 'Ingesting everything is not a security strategy—it is a budget problem. Log what improves detection, and be deliberate about the rest.',
      },
      { type: 'h2', text: 'How to decide where to start' },
      {
        type: 'p',
        text: 'If you are early in your security journey, begin with Defender XDR to get strong, low-effort coverage across endpoints, email, and identity. Layer in Sentinel when you need to correlate non-Microsoft sources, satisfy long-term log-retention requirements, or build custom detections and automation. Most mature SOCs run both, with Defender as the detection engine and Sentinel as the correlation, hunting, and automation hub.',
      },
      { type: 'h2', text: 'Where FelxTek fits in' },
      {
        type: 'p',
        text: 'We design and operate modern SOCs on Microsoft Sentinel and Defender—tuned for real detection coverage and controlled costs. From connector setup and analytics rules to SOAR playbooks and ongoing tuning, we help you build security operations that scale with your business. Talk to us about building or managing your SOC.',
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
