import { customAlphabet } from "nanoid";

//An alphabet that excludes characters that are easily confused with each other
// Excludes: 0, O, I, l
const nanoid = customAlphabet(
	"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);

/**
 * Generates a random vault id
 * base58: 58 characters
 * 12 characters: 58^12 = 1.4e+21
 * @returns A random string of length 12
 */
export const generateRandomClientId = () => {
	return nanoid(12);
};
