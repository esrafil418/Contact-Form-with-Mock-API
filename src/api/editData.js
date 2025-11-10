import { BASE_URL } from "../constant/base";

export async function PutData(id) {
  const newName = prompt("Enter new name:");
  const newPhone = prompt("Enter new phone number:");

  if (newName === null && newPhone === null) return;

  try {
    await fetch(`${BASE_URL}number-note/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...(newName && { name: newName }),
        ...(newPhone && { phone: newPhone }),
      }),
    });
    window.location.reload();
  } catch (err) {
    console.error("❌ Error in PutData:", err);
  }
}
