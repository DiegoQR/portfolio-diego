const dateFormatter = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}-01T00:00:00Z`));
}

export function DateRange({ startDate, endDate }: { startDate: string; endDate: string | null }) {
  return (
    <p className="text-sm text-muted">
      <time dateTime={startDate}>{formatDate(startDate)}</time>
      {' – '}
      {endDate ? <time dateTime={endDate}>{formatDate(endDate)}</time> : 'Present'}
    </p>
  );
}
