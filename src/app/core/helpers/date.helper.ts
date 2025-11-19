/**
 * Date Helper - Utility functions for date formatting and conversion
 */

/**
 * Format Date object to "dd/MM/yyyy HH:mm:ss" format
 * @param date Date object to format
 * @returns Formatted date string
 */
export function formatDateTime(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

/**
 * Format Date object or ISO string to "dd/MM/yyyy" format
 * @param date Date object or ISO string to format
 * @returns Formatted date string
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Format contract date from "yyyyMMdd HH:mm:ss" to "dd/MM/yyyy HH:mm:ss"
 * @param dateStr Date string in format "yyyyMMdd HH:mm:ss"
 * @returns Formatted date string "dd/MM/yyyy HH:mm:ss"
 */
export function formatContractDate(dateStr: string): string {
  if (!dateStr || dateStr.length < 8) return dateStr;

  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);
  const time = dateStr.substring(8).trim();

  return `${day}/${month}/${year}${time ? ' ' + time : ''}`;
}

/**
 * Format ISO date string to "dd/MM/yyyy HH:mm:ss" format
 * @param isoDateStr ISO date string from API
 * @returns Formatted date string
 */
export function formatDateTimeFromISO(isoDateStr?: string): string | undefined {
  if (!isoDateStr) return undefined;

  try {
    const date = new Date(isoDateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error('Error formatting date from ISO:', isoDateStr, error);
    return isoDateStr;
  }
}

/**
 * Convert date string from "dd/MM/yyyy HH:mm:ss" format to ISO LocalDateTime format
 * @param dateStr Date string in format "dd/MM/yyyy HH:mm:ss" or "dd/MM/yyyy"
 * @returns ISO formatted date string (LocalDateTime compatible)
 */
export function convertToLocalDateTime(dateStr?: string): string | undefined {
  if (!dateStr) return undefined;

  try {
    // Parse date string in format "dd/MM/yyyy HH:mm:ss" or "dd/MM/yyyy"
    const parts = dateStr.split(' ');
    const datePart = parts[0]; // "dd/MM/yyyy"
    const timePart = parts[1] || '00:00:00'; // "HH:mm:ss" or default

    const [day, month, year] = datePart.split('/');
    const [hours, minutes, seconds] = timePart.split(':');

    // Create ISO date string
    const date = new Date(
      Number.parseInt(year),
      Number.parseInt(month) - 1,
      Number.parseInt(day),
      Number.parseInt(hours || '0'),
      Number.parseInt(minutes || '0'),
      Number.parseInt(seconds || '0')
    );

    // Return ISO string format (LocalDateTime compatible)
    return date.toISOString();
  } catch (error) {
    console.error('Error converting date:', dateStr, error);
    return dateStr; // Return original if conversion fails
  }
}

/**
 * Format date time from ISO string to "dd/MM/yyyy HH:mm:ss" format
 *
 * @param isoString ISO date string
 * @returns Formatted date string "dd/MM/yyyy HH:mm:ss"
 */
export function formatDateTimeFromString(isoString: string): string {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
