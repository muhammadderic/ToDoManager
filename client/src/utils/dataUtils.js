export const formatDate = (dateString) => {
  // Parse the ISO 8601 date string into a Date object
  const date = new Date(dateString);

  // Extract year, month, and day from the Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Construct the formatted date string in yyyy-MM-dd format
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}