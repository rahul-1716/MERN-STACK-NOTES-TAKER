export function formatDate(date) {
  return date.toLocaleDate("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
