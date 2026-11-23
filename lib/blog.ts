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
  searchTitle?: string
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
    slug: 'microsoft-365-employee-offboarding-checklist',
    searchTitle: 'Microsoft 365 Employee Offboarding Checklist',
    title: 'A Microsoft 365 Offboarding Checklist: What to Do Before Removing a License',
    description: 'Offboard a Microsoft 365 employee in the right order: close access, hand off mail and OneDrive files, and verify retention before removing the license.',
    category: 'Identity & Access',
    author: 'FelxTek',
    date: '2026-11-22',
    readingTime: '3 min read',
    keywords: ['Microsoft 365 employee offboarding checklist', 'OneDrive file handover', 'Exchange Online mailbox handover'],
    content: [
      { type: 'p', text: 'At 4 p.m. on Friday, a project manager leaves. On Monday, a client will send a signed change order to her mailbox. The pricing workbook is in her OneDrive, and she is the only owner of the project team. IT can close the account on time and still leave the business unable to accept the order. Treat closing access and handing over work as two separate jobs.' },
      { type: 'h2', text: '1. Before departure: name the owner of unfinished work' },
      { type: 'p', text: 'Ask the manager to name a person, not a department, for each handoff. Who needs to receive the order? Who can approve the price? Who can manage membership in the project team? Those may be three different people. Do not grant full mailbox access when the business only needs someone to receive new client messages.' },
      { type: 'p', text: 'Record the authorized cutoff time and time zone with HR. Ask the records owner whether the mailbox or files are subject to retention requirements or a legal hold. If that answer is unknown, keep deletion and license removal on hold; that uncertainty does not require leaving sign-in enabled.' },
      { type: 'h2', text: '2. At the cutoff: close access without deleting the data' },
      { type: 'p', text: 'Have an authorized administrator block sign-in and revoke sign-in sessions. For a synchronized identity, coordinate the change with the team responsible for the source directory. Revoking sessions is not a guarantee that every application ends access instantly. Check separately for applications with their own accounts or sessions.' },
      { type: 'ul', items: ['Inventory privileged roles, group memberships and delegated access. Record the access removed and any item still awaiting an application owner.', 'Route managed devices through the approved return or retirement process. Do not treat a blocked cloud account as proof that a device was returned or that local files were erased.', 'Check for scheduled reports and automations owned by the departing user. Assign a supported replacement owner and test the next run rather than keeping the employee signed in.'] },
      { type: 'h2', text: '3. Hand off the mailbox, not the password' },
      { type: 'p', text: 'For the change order, first decide whether the successor needs past correspondence, incoming mail, or both. Use approved delegation or a shared mailbox where appropriate. If converting a mailbox, verify conversion before changing licensing and keep the underlying account that anchors the shared mailbox. Archive, hold and capacity requirements can affect whether a license is still needed.' },
      { type: 'p', text: 'Test the handoff with an ordinary message containing no client information. Ask the successor to find it using their own account. If they must reply from the shared address, verify that separately: permission to read a mailbox is not permission to send as that mailbox.' },
      { type: 'h2', text: '4. Move ongoing project files out of personal OneDrive' },
      { type: 'p', text: 'Give an approved custodian access to the files needed for handover. For work the team will maintain, use a team-owned SharePoint library with the right membership. Do not copy an entire OneDrive into a broadly accessible folder just to rescue one workbook.' },
      { type: 'p', text: 'Have the new owner open the workbook from the link the team will actually use. Can they edit and save it? Can the reviewer read it without acquiring edit rights? Update bookmarks or workflow references that still point to the personal location. Check the tenant’s retention settings rather than assuming the old link will stay available.' },
      { type: 'h2', text: '5. Remove the license only after the handoff passes' },
      { type: 'p', text: 'Close the ticket with evidence: the cutoff time, administrator, mailbox routing test, working file location, successor’s acceptance and records decision. If the file test fails, leave that task open with an owner and a deadline. Keep the former employee’s sign-in blocked while the team resolves it.' },
      { type: 'p', text: 'The final question is not “Did we reclaim a license?” It is “Can the right person receive Monday’s order, open the approved price and respond from the right address without using the former employee’s account?” Once the answer is yes and preservation requirements are met, reclaim any license no longer required.' },
    ],
  },
  {
    slug: 'microsoft-365-backup-restore-test',
    searchTitle: 'How to Test Microsoft 365 Backup and SharePoint Recovery',
    title: 'Microsoft 365 Backup: How to Run a Restore Test',
    description: 'Test whether your team can recover a SharePoint workspace before a deadline. Set recovery targets, validate files and permissions, and record the gaps.',
    category: 'Business Continuity',
    author: 'FelxTek',
    date: '2026-11-22',
    readingTime: '4 min read',
    keywords: ['Microsoft 365 backup', 'SharePoint restore test', 'recovery time objective', 'business continuity'],
    content: [
      { type: 'p', text: 'Imagine that a project team loses its bid folder at 9 a.m. The submission deadline is noon. A backup dashboard says the last job succeeded. Can the bid manager find the right version of the proposal, open its pricing workbook, and submit on time? The dashboard cannot answer that question. A restore test can.' },
      { type: 'p', text: 'Use a nonproduction SharePoint workspace with invented documents for this exercise. The goal is not to cause an outage or prove that every Microsoft 365 workload is protected. It is to find out whether one business process can resume, with the right information and access, in the time available.' },
      { type: 'h2', text: 'Let the business owner set the finish line' },
      { type: 'p', text: 'Ask two questions separately. How long can the team work without the folder? That gives you a recovery time objective, or RTO. How much recent work can the team afford to recreate? That gives you a recovery point objective, or RPO. A two-hour RTO does not mean the team can afford to lose two hours of pricing edits.' },
      { type: 'p', text: 'For the bid exercise, suppose the owner needs the workspace back within two hours and can reconstruct at most thirty minutes of edits. Write those targets down before looking at the available backups. If your protection method only offers a usable recovery point from last night, you have already learned something important. A fast restore will not fix the missing morning work.' },
      { type: 'h2', text: 'Know what is being recovered' },
      { type: 'p', text: 'Version history can help with a mistaken edit. A recycle bin can help with a recently deleted item. Retention policies can preserve content for legal or records purposes. None of those facts, by itself, establishes that you can restore a whole workspace with its expected structure, versions, and permissions. Check what your configured backup or recovery service actually covers, including exclusions and restore destinations.' },
      { type: 'ul', items: ['Prepare a small manifest: one proposal with two distinguishable revisions, one workbook, a restricted folder, and a link the bid team uses to find them.', 'Record the expected access: a bid manager can edit; a reviewer can read; a user outside the project cannot open the restricted folder.', 'Set the boundary: restore to an isolated location if supported. Otherwise use a dedicated test site and a recovery method approved for that site. Never overwrite the live bid to rehearse the procedure.'] },
      { type: 'h2', text: 'Run the clock until someone can work again' },
      { type: 'ol', items: ['Start the exercise with an ordinary support request. Record when it arrives, who owns it, and how long it takes to obtain restoration approval. These delays count against the business deadline.', 'Choose a recovery point and record its timestamp. Ask the operator to explain the selection: the latest available copy may already contain the mistaken change.', 'Restore the test data. Record job completion separately from business acceptance. A completed job is the beginning of validation, not the end of the outage.', 'Have the bid manager locate the proposal through the normal workflow, open the expected revision, and check the workbook. Have the reviewer and the out-of-project test user verify their respective access boundaries.'] },
      { type: 'h3', text: 'Interpret the result without averaging away a failure' },
      { type: 'p', text: 'Suppose the job finishes at 9:40 and the manager can use the files at 10:15 after a link is repaired. Measured from 9:00, business recovery took 75 minutes, not 40. If the newest usable copy was from 8:10, the potential data loss was 50 minutes. The team met its two-hour time target and missed its thirty-minute recovery point target. Record both outcomes.' },
      { type: 'h2', text: 'Turn the findings into a decision' },
      { type: 'p', text: 'Keep the test scope, recovery point, timestamps, access checks, and business owner’s acceptance together. Record failures without copying confidential documents into the evidence record. Assign each gap an owner and a retest condition: for example, the backup owner reviews recovery-point coverage, while the site owner fixes the navigation link and repeats the user acceptance check.' },
      { type: 'p', text: 'End with a statement the bid manager can use: “For this workspace we restored the tested files in 75 minutes, but we could lose more pricing work than the team accepts.” That is a better basis for an investment decision than a green dashboard. Treat Exchange mailboxes and other workloads as separate exercises; passing a SharePoint test does not prove they will recover the same way.' },
    ],
  },
  {
    slug: 'ai-security-compliance-microsoft-365',
    searchTitle: 'Microsoft 365 Copilot Security and Compliance Checklist',
    title: 'AI Security and Compliance: How to Review a Microsoft 365 Copilot Pilot',
    description: 'Follow a support team’s Copilot pilot from data access review to launch approval. Learn what to test, who signs off, and what evidence to keep.',
    category: 'AI Governance',
    author: 'FelxTek',
    date: '2026-11-22',
    readingTime: '4 min read',
    keywords: ['AI security', 'AI compliance', 'Microsoft 365 Copilot', 'AI governance', 'data access review'],
    content: [
      { type: 'p', text: 'A support manager wants Microsoft 365 Copilot to draft answers from the company’s troubleshooting guides. The guides live in SharePoint, the team already uses Microsoft 365, and every reply will pass through a person. It sounds like an easy pilot to approve. Then someone asks: what happens if a draft includes a customer’s negotiated price from a document a support rep can open but should never quote?' },
      { type: 'p', text: 'That question separates two decisions. Security asks whether the right people and systems can access the data. Compliance asks whether using it this way is permitted and whether the business can demonstrate that it followed its obligations. A successful pilot needs an answer to both.' },
      { type: 'h2', text: 'Write the approval narrowly enough to test it' },
      { type: 'p', text: 'Start with a single sentence: “Five support representatives may use approved product guides to draft troubleshooting replies; a representative must check each reply before sending it.” This gives the pilot an owner, a source, a user group, and a decision that stays with a person. It does not authorize processing customer case histories or sending mail automatically.' },
      { type: 'p', text: 'Ask the data owner to identify which guides are approved. Ask the privacy or contracts lead whether the proposed inputs, storage, and intended recipients fit the organization’s agreements. If the team cannot establish permission for a data class, keep it outside the pilot. A vendor certification can inform the review, but it cannot grant rights your customer contract withholds.' },
      { type: 'h2', text: 'Check what a representative can actually open' },
      { type: 'p', text: 'Microsoft 365 Copilot can surface content available to the signed-in user. If the support group inherited read access to a sales library, that access matters even if nobody on the team knows the library exists. Naming an approved library in a usage policy is not the same as technically restricting access to it.' },
      { type: 'p', text: 'Have the SharePoint owner review group membership, sharing links, and inherited permissions with a representative from support. Use a non-admin pilot identity and harmless sample files to confirm the expected boundaries. Verify access at the source: an assistant failing to mention a file in one answer is not proof that the user cannot read it.' },
      { type: 'h3', text: 'What useful evidence looks like' },
      { type: 'p', text: 'A dated record might say: “The support test identity opened the sample product guide. Access to the synthetic pricing sheet was denied after Sales removed the inherited grant. The library owner repeated both checks.” This tells a reviewer which identity was tested, what changed, and who verified the result. A screenshot of a tenant-wide setting tells only part of that story.' },
      { type: 'h2', text: 'Test the draft, not just the permissions' },
      { type: 'p', text: 'A draft can be inaccurate even when every source is authorized. For a small pilot, choose a few representative questions and have a product specialist write down the acceptable answers first. Include a case where the guides do not contain the answer. The expected outcome there is escalation, not a plausible guess.' },
      { type: 'ul', items: ['Supported answer: ask about a documented product limit. The representative should be able to find the exact passage supporting the draft before using it.', 'Conflicting guidance: include an archived guide and its replacement in the review exercise. If the wrong revision informs the answer, fix the document lifecycle rather than relying on staff to catch the same mistake indefinitely.', 'Missing information: ask about an undocumented warranty exception. Confirm that the representative routes the question to the policy owner instead of making a customer commitment.'] },
      { type: 'h2', text: 'Keep an audit trail without creating another sensitive dataset' },
      { type: 'p', text: 'Agree on what must be retained before collecting prompts and responses. A review record can often use a test-case ID, source revision, result, reviewer, and remediation ticket rather than a copy of a customer conversation. Confirm the actual logging and retention behavior for your product, license, and tenant. Do not promise deletion on a schedule the organization has not verified.' },
      { type: 'p', text: 'If a representative finds sensitive material in a draft, they should withhold the reply and use the existing incident-reporting channel. Identify who can pause the pilot, preserve necessary evidence under restricted access, and assess any notification duties. Avoid pasting the draft into a broadly shared ticket to explain what went wrong.' },
      { type: 'h2', text: 'Make a launch decision someone can revisit' },
      { type: 'ol', items: ['Approve the defined use only when the data owner confirms the access boundary and support leads have demonstrated the human review step.', 'Hold the pilot if access exceeds the approved scope or a material contractual question remains unanswered. Record the blocker, its owner, and the evidence needed to clear it.', 'Review again before adding a connector, another department, a new data class, or permission to act on a draft. Each change can invalidate the original approval.'] },
      { type: 'p', text: 'The useful output is a short decision record, not a blanket declaration that AI is compliant. A manager should be able to read it months later and answer three questions: What did we allow? What did we check? What change would make us stop and review again?' },
    ],
  },
  {
    slug: 'zero-trust-microsoft-entra-id-rollout',
    searchTitle: 'Microsoft Entra ID Zero Trust Rollout Guide',
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
    searchTitle: 'CMMC 2.0 Readiness for Microsoft 365 GCC High',
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
    searchTitle: 'How to Reduce Azure Costs Without Weakening Security',
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
    searchTitle: 'Microsoft Sentinel vs. Defender: SIEM and XDR Compared',
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
