/** Formats given dates as shortened months, full year. Will use string version of `endDate` if provided. */
export function dateRange(startDate: Date, endDate?: Date | string): string {
  const formatter = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" });
  const start = formatter.format(startDate);
  const end = endDate ? (typeof endDate === "string" ? endDate : formatter.format(endDate)) : "";

  return `${start} - ${end}`;
}
