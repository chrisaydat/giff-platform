export const memberRecord = {
  name: 'Kofi Mensah',
  initials: 'KM',
  memberId: 'GF-2018-0492',
  role: 'Principal Representative',
  organization: 'Meridian Logistics & Freight Ltd.',
  standing: 'Active Standing',
  status: 'Active',
  tier: 'Class A Forwarder',
  activeSince: '14 Mar 2018',
  validUntil: '6 May 2026',
  renewalWindowText: 'Renewal due in 14 days',
  renewalDueDate: '6 May 2026',
  operatingBase: 'Tema Harbor, Ghana',
  email: 'kofi.mensah@meridianfreight.com',
  phone: '+233 24 312 4488',
  address: 'Ring Road Central, Accra, Ghana',
  outstandingDues: 'GHS 2,500.00',
  outstandingLabel: 'Includes the 2026 annual subscription invoice.',
  recentPayment: {
    title: 'Training Fee',
    amount: 'GHS 450.00',
    paidOn: '12 Apr 2026',
  },
} as const;

export const membershipChecklist = [
  { label: 'Review Information', state: 'done' },
  { label: 'Upload Latest Tax Clearance Certificate', state: 'pending', note: 'Required document pending' },
  { label: 'Settle Annual Dues', state: 'pending', note: 'Invoice INV-2026-1102 remains unpaid' },
] as const;

export const certificates = [
  {
    title: '2026 Membership Certificate',
    status: 'Active',
    issued: '15 Jan 2026',
    expires: '31 Dec 2026',
  },
  {
    title: 'FIATA Compliance Certificate',
    status: 'Compliant',
    issued: '12 Feb 2026',
    expires: '31 Dec 2026',
  },
] as const;

export const letters = [
  {
    title: 'Letter of Good Standing',
    description: 'Generated on request for banks, embassies, and procurement reviews.',
  },
  {
    title: 'Introduction Letter',
    description: 'Standard institutional template for trade facilitation requests.',
  },
] as const;

export const financialRecords = [
  {
    reference: 'RCT-2026-0412',
    date: '12 Apr 2026',
    label: 'Training Fee',
  },
  {
    reference: 'RCT-2025-1205',
    date: '05 Dec 2025',
    label: 'Annual Dues',
  },
  {
    reference: 'RCT-2024-1101',
    date: '01 Nov 2024',
    label: 'Registration Renewal',
  },
] as const;

export const paymentMethods = [
  {
    label: 'Corporate Bank Transfer',
    badge: 'Primary',
    note: 'Linked account ending in 4092',
  },
  {
    label: 'MTN Mobile Money',
    badge: 'Enabled',
    note: 'Business wallet ending in 2214',
  },
] as const;

export const currentInvoices = [
  {
    reference: 'INV-2026-1102',
    description: 'Annual Subscription Dues',
    dueDate: '6 May 2026',
    amount: 'GHS 2,500.00',
    status: 'Awaiting Payment',
  },
] as const;

export const paymentHistory = [
  { date: '12 Apr 2026', reference: 'RCT-2026-0412', amount: 'GHS 450.00', action: 'Download Receipt' },
  { date: '05 Dec 2025', reference: 'RCT-2025-1205', amount: 'GHS 2,500.00', action: 'Download Receipt' },
  { date: '01 Nov 2024', reference: 'RCT-2024-1101', amount: 'GHS 2,200.00', action: 'Download Receipt' },
] as const;

export const announcements = [
  {
    tag: 'Event',
    title: 'GIFF Annual Conference 2026 registration is now open',
    body: 'Join industry leaders, customs experts, and shipping partners for this year’s flagship event.',
    date: '20 Apr 2026',
  },
  {
    tag: 'Policy',
    title: 'Updated customs brokerage standards published',
    body: 'Review the latest institutional guidance and prepare your internal teams before implementation.',
    date: '14 Apr 2026',
  },
] as const;

export const notifications = {
  critical: [
    {
      title: 'Action Required: Renewal due in 14 days',
      body: 'Complete your renewal steps before 6 May 2026 to maintain uninterrupted access and active standing.',
      action: 'Renew Now',
      href: '/membership',
      when: '2 hours ago',
    },
    {
      title: 'Missing Document: Tax Clearance',
      body: 'Upload the latest tax clearance certificate so your renewal package can move to final review.',
      action: 'Upload Document',
      href: '/documents',
      when: 'Yesterday',
    },
  ],
  updates: [
    {
      title: 'Payment Confirmation: GHS 450.00 received',
      body: 'Your training fee payment has been received and applied to your member ledger.',
      when: '12 Apr 2026',
    },
    {
      title: 'New Invoice Generated: INV-2026-1102',
      body: 'Your 2026 annual dues invoice is now available under Dues & Payments.',
      when: '10 Apr 2026',
    },
  ],
} as const;

export const activityLog = [
  {
    title: 'Invoice INV-2026-1102 generated',
    detail: 'Annual subscription dues are now ready for payment.',
    when: '2 days ago',
  },
  {
    title: 'Membership certificate updated',
    detail: 'A fresh membership certificate was issued to the digital vault.',
    when: '1 week ago',
  },
  {
    title: 'Tax clearance reminder sent',
    detail: 'A renewal reminder was sent to your email and SMS inbox.',
    when: '10 days ago',
  },
] as const;

export const complianceArchive = [
  { title: 'Business License', subtitle: 'Expires 12 Dec 2026', status: 'Verified' },
  { title: 'Tax Clearance', subtitle: 'Expires 30 Jun 2026', status: 'Verified' },
  { title: 'FIATA Diploma', subtitle: 'Lifetime Credential', status: 'Verified' },
  { title: 'Professional Indemnity', subtitle: 'Expired 18 Apr 2026', status: 'Action Required' },
] as const;

export const quickActions = [
  { label: 'Pay Dues', href: '/dues' },
  { label: 'Renew Membership', href: '/membership' },
  { label: 'Download ID', href: '/profile' },
  { label: 'Update Profile', href: '/profile' },
  { label: 'Request Support', href: '/settings' },
] as const;

export const loginHistory = [
  { device: 'MacBook Pro · Safari', location: 'Accra, Ghana', time: 'Today, 09:41 AM' },
  { device: 'iPhone · GIFF Portal', location: 'Accra, Ghana', time: 'Yesterday, 07:22 PM' },
] as const;

export const preferenceRows = [
  { label: 'Payment Reminders', description: 'Notices regarding upcoming or overdue dues.', email: true, sms: true },
  { label: 'Renewal Notices', description: 'Membership renewal prompts and checklist updates.', email: true, sms: false },
  { label: 'Announcements', description: 'Institutional notices, events, and policy updates.', email: true, sms: false },
] as const;

