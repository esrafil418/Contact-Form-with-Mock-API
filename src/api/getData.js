import { BASE_URL } from "../constant/base";

export async function GetData() {
  try {
    const res = await fetch(`${BASE_URL}number-note`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌ Error in getData:", err);
  }
}
