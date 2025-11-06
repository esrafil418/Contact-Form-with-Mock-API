import { getData, PostData } from "../../api/api";
import { El } from "../../utils/el";

export function Cart() {
  const container = El({
    element: "div",
    className: "w-full h-screen flex flex-col justify-center items-center",
  });
  const table = El({
    element: "div",
    className:
      "bg-[#ecf2f7] h-[100vh] w-full flex flex-col justify-center items-center",
    children: [
      El({
        element: "div",
        className:
          "bg-white rounded-3xl w-2/3 h-[400px] flex flex-col gap-5 p-4",
        children: [
          El({
            element: "div",
            className:
              "font-bold text-3xl text-gray-800 w-full text-center mb-10",
            innerText: "📞 دفترچه تلفن ",
          }),
          El({
            element: "div",
            className: "w-full px-8 flex flex-col items-center gap-4",
            children: [
              El({
                element: "input",
                className:
                  "border border-gray-400 bg-[#ecf2f7] rounded-xl w-full p-2",
                placeholder: "نام و نام خانوادگی",
                name: "userNameInput",
                id: "userNameInput",
              }),
              El({
                element: "input",
                className:
                  "border border-gray-400 bg-[#ecf2f7] rounded-xl w-full p-2",
                placeholder: "شماره تماس",
                name: "userNumberInput",
                id: "userNumberInput",
              }),
              El({
                element: "button",
                className:
                  "border border-gray-400 bg-[#357af3] rounded-xl w-full p-2 text-white font-bold",
                innerText: "افزودن مخاطب",
                id: "submitBtn",
                eventListener: [
                  {
                    event: "click",
                    callback: PostData,
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  container.append(table);
  getData().then((data) => {
    El({
      element: "table",
      className: "w-full h-[300px] text-center",
      children: [
        El({
          element: "thead",
          className: "bg-gray-400 ",
          children: [
            El({
              element: "tr",
              className: "",
              children: [
                El({
                  element: "th",
                  className: "",
                  innerText: "نام",
                }),
                El({
                  element: "th",
                  className: "",
                  innerText: "شماره",
                }),
                El({
                  element: "th",
                  className: "",
                  innerText: "عملیات",
                }),
              ],
            }),
          ],
        }),
        data.forEach((item) => {
          table.append(
            El({
              element: "tbody",
              className: "",
              children: [
                El({
                  element: "tr",
                  children: [
                    El({
                      element: "td",
                      innerText: item.name,
                      id: "user-name",
                    }),
                    El({
                      element: "td",
                      innerText: item.phone,
                      id: "user-number",
                    }),
                    El({
                      element: "td",
                      children: [
                        El({
                          element: "button",
                          innerText: "✏️ ویرایش",
                        }),
                        El({
                          element: "button",
                          className: "",
                          innerText: "🗑️ حذف",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }),
      ],
    });
  });

  return container;
}
