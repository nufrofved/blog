export const formatDate = (
  date: string,
  options?: Intl.DateTimeFormatOptions
) =>
  new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    ...options,
  }).format(new Date(date));
