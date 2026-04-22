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

export const annualDuesInvoice = {
  reference: 'INV-2026-1102',
  description: 'Annual Subscription Dues',
  dueDate: '6 May 2026',
  amount: 'GHS 2,500.00',
  status: 'Awaiting Payment',
} as const;

export const currentInvoices = [annualDuesInvoice] as const;

export const paymentHistory = [
  { date: '12 Apr 2026', reference: 'RCT-2026-0412', amount: 'GHS 450.00', action: 'Download Receipt' },
  { date: '05 Dec 2025', reference: 'RCT-2025-1205', amount: 'GHS 2,500.00', action: 'Download Receipt' },
  { date: '01 Nov 2024', reference: 'RCT-2024-1101', amount: 'GHS 2,200.00', action: 'Download Receipt' },
] as const;

export const mockMomoFlow = {
  invoice: annualDuesInvoice,
  promptReference: 'MOMO-2026-1102',
  receiptReference: 'RCT-2026-0506',
  walletName: 'Meridian Freight Finance',
  merchant: 'GIFF Portal Collections',
  promptWindow: 'Prompt remains active for 90 seconds.',
  processingFee: 'GHS 0.00',
  total: 'GHS 2,500.00',
  settlementTime: '6 May 2026 · 09:14 AM',
  networks: [
    { id: 'mtn', label: 'MTN MoMo', note: 'Fastest for most member wallets' },
    { id: 'telecel', label: 'Telecel Cash', note: 'Use registered corporate wallet' },
    { id: 'airteltigo', label: 'AirtelTigo Money', note: 'Prompt sent to finance contact phone' },
  ],
  timeline: [
    {
      title: 'Invoice matched',
      detail: 'The active annual dues invoice has been pulled into checkout with the exact amount due.',
    },
    {
      title: 'Prompt sent to phone',
      detail: 'A mock Mobile Money prompt is sent to the registered number for authorization.',
    },
    {
      title: 'Ledger updated',
      detail: 'Once approved, the payment is marked received and the receipt is archived to the member ledger.',
    },
  ],
} as const;

export const memberReceipts = [
  {
    id: 'RCT-2026-0506',
    issued: '6 May 2026',
    receivedFrom: memberRecord.organization,
    memberId: memberRecord.memberId,
    branch: 'GIFF Self-Service Portal',
    paymentModality: 'MTN Mobile Money',
    lineItems: [
      { desc: 'Annual Subscription Dues', period: '2026 Membership Cycle', amount: '2,500.00' },
    ],
    subtotal: '2,500.00',
    processingFee: '0.00',
    total: 'GHS 2,500.00',
    ledger: {
      gateway: 'MOMO-2026-1102-2214',
      institution: 'MTN Mobile Money Ghana',
      timestamp: '2026-05-06 09:14:22',
      reconciledBy: 'Member Self-Service Checkout',
    },
    stateChanges: [
      { event: 'Receipt archived', time: '09:14', desc: 'Receipt copied to the member ledger and documents archive.' },
      { event: 'Invoice settled', time: '09:14', desc: 'Annual dues invoice INV-2026-1102 marked as paid.' },
      { event: 'MoMo prompt approved', time: '09:13', desc: 'Corporate wallet authorization completed on the registered device.' },
    ],
  },
  {
    id: 'RCT-2026-0412',
    issued: '12 Apr 2026',
    receivedFrom: memberRecord.organization,
    memberId: memberRecord.memberId,
    branch: 'Accra Secretariat',
    paymentModality: 'Corporate Bank Transfer',
    lineItems: [
      { desc: 'Training Fee', period: 'April Workshop', amount: '450.00' },
    ],
    subtotal: '450.00',
    processingFee: '0.00',
    total: 'GHS 450.00',
    ledger: {
      gateway: 'TRN-2026-0412-882',
      institution: 'Ecobank Ghana Plc',
      timestamp: '2026-04-12 11:08:17',
      reconciledBy: 'System Auto-Matcher',
    },
    stateChanges: [
      { event: 'Receipt archived', time: '11:08', desc: 'Training payment posted to the ledger and archived.' },
      { event: 'Funds cleared', time: '11:08', desc: 'Bank transfer confirmed by receiving institution.' },
      { event: 'Registration released', time: '11:09', desc: 'Member training registration moved to confirmed.' },
    ],
  },
  {
    id: 'RCT-2025-1205',
    issued: '5 Dec 2025',
    receivedFrom: memberRecord.organization,
    memberId: memberRecord.memberId,
    branch: 'Accra Secretariat',
    paymentModality: 'Corporate Bank Transfer',
    lineItems: [
      { desc: 'Annual Subscription Dues', period: '2025 Membership Cycle', amount: '2,500.00' },
    ],
    subtotal: '2,500.00',
    processingFee: '0.00',
    total: 'GHS 2,500.00',
    ledger: {
      gateway: 'ANN-2025-1205-419',
      institution: 'Stanbic Bank Ghana',
      timestamp: '2025-12-05 14:42:51',
      reconciledBy: 'System Auto-Matcher',
    },
    stateChanges: [
      { event: 'Standing refreshed', time: '14:43', desc: 'Good-standing flags were refreshed after dues settlement.' },
      { event: 'Invoice reconciled', time: '14:42', desc: 'Annual dues invoice closed against incoming transfer.' },
      { event: 'Funds cleared', time: '14:35', desc: 'Bank transfer confirmed by GIFF accounts.' },
    ],
  },
  {
    id: 'RCT-2024-1101',
    issued: '1 Nov 2024',
    receivedFrom: memberRecord.organization,
    memberId: memberRecord.memberId,
    branch: 'Accra Secretariat',
    paymentModality: 'Corporate Bank Transfer',
    lineItems: [
      { desc: 'Registration Renewal', period: '2024 Renewal Cycle', amount: '2,200.00' },
    ],
    subtotal: '2,200.00',
    processingFee: '0.00',
    total: 'GHS 2,200.00',
    ledger: {
      gateway: 'REN-2024-1101-672',
      institution: 'Absa Bank Ghana',
      timestamp: '2024-11-01 15:24:03',
      reconciledBy: 'Finance Desk Review',
    },
    stateChanges: [
      { event: 'Receipt archived', time: '15:24', desc: 'Renewal payment stored in the member receipt archive.' },
      { event: 'Renewal released', time: '15:24', desc: 'Renewal package moved to final secretariat confirmation.' },
      { event: 'Funds cleared', time: '15:12', desc: 'Bank transfer verified by accounts team.' },
    ],
  },
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
  { label: 'Pay Dues', href: '/dues/pay' },
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
