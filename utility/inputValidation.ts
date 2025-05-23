/**
 * Check whether text is null/undefined/empty
 * @param text string we want to validate
 * @returns true if not empty
 */
export const isNotEmpty = (text: string) =>
  text !== "" && text !== undefined && text !== null;

/**
 * Check wheter text is a valid string
 * @param text string we want to validate
 * @returns true if valid
 */
export const isValidString = (text: string) => isNotEmpty(text.trim());
