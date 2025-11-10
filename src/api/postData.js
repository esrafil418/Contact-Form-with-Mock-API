import { BASE_URL } from "../constant/base";

export async function PostData() {
  const nameInput = document.querySelector("#userNameInput");
  const phoneInput = document.querySelector("#userNumberInput");

  const userName = nameInput.value.trim();
  const userNumber = phoneInput.value.trim();

  if (!userName || !userNumber) {
    alert("لطفا مقادیر را وارد کنید");
    return;
  }

  try {
    await fetch(`${BASE_URL}number-note`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName, phone: userNumber }),
    });

    nameInput.value = "";
    phoneInput.value = "";
    window.location.reload();
  } catch (err) {
    console.error("❌ Error in PostData:", err);
  }
}
