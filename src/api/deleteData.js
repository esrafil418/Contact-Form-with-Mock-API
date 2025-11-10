import { BASE_URL } from "../constant/base";

export async function DeleteUser(id) {
  try {
    const res = await fetch(`${BASE_URL}number-note/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete user. Status: ${res.status}`);
    }
    window.location.reload();
    return await res.json();
  } catch (err) {
    console.error("Error deleting user:", err);
    return null;
  }
}
