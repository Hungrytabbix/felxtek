export const consultationWindows = ['9 AM–noon', 'Noon–3 PM', '3–5 PM'] as const
export const consultationZone = 'Pacific time (America/Los_Angeles)'

export function earliestConsultationDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now)
  const get = (type: string) => Number(parts.find(part => part.type === type)?.value)
  return new Date(Date.UTC(get('year'), get('month') - 1, get('day') + 1)).toISOString().slice(0, 10)
}

export function validConsultationDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < earliestConsultationDate()) return false
  const parsed = new Date(`${value}T12:00:00Z`)
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().startsWith(value)
}
