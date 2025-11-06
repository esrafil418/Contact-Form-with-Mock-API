import { BASE_URL } from "../components/base/baseUrl";

export async function getData() {
  try {
    const res = await fetch(`${BASE_URL}number-note`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error:", message.err);
  }
}

export async function PostData() {
  const userName = document.querySelector("#userNameInput").value;
  const userNumber = document.querySelector("#userNumberInput").value;

  if (userName && userNumber) {
    try {
      fetch(`${BASE_URL}number-note`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, phone: userNumber }),
      });
      userName = "";
      userNumber = "";
      location.reload();
    } catch (err) {
      console.log("Error", err);
    }
  } else {
    alert("لطفا مغادیر را وارد کنید");
  }
}
