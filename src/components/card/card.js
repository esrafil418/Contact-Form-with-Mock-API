import { El } from "../../utils/el";
import { GetData } from "../../api/getData";
import { PostData } from "../../api/postData";
import { PutData } from "../../api/editData";
import { DeleteUser } from "../../api/deleteData";

export function Card() {
  // container
  const container = El({
    element: "div",
    className:
      "w-full h-full flex flex-col justify-center items-center gap-2 border border-white/10 rounded-lg p-10 bg-white md:w-[900px] md:mx-auto",
  });
  // table
  const table = El({
    element: "div",
    className:
      "bg-[#ecf2f7] h-[100vh] w-full flex flex-col justify-center items-center",
    children: [
      El({
        element: "div",
        className: "bg-white rounded-3xl w-2/3 h-auto flex flex-col gap-5 p-4",
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
                  "border border-gray-400 bg-[#357af3] rounded-xl w-full p-2 text-white font-bold cursor-pointer",
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
            ],
          }),
        ],
      }),
    ],
  });

  container.append(table);

  const tableEl = table.querySelector("table");

  GetData().then((data) => {
    data.map((item) => {
      tableEl.append(
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
                      className:
                        "cursor-pointer border border-gray-300 rounded-lg ml-5 p-1 hover:bg-yellow-300",
                      eventListener: [
                        {
                          event: "click",
                          callback: () => PutData(item.id),
                        },
                      ],
                    }),
                    El({
                      element: "button",
                      className:
                        "cursor-pointer border border-gray-300 rounded-lg p-1 hover:bg-red-300",
                      innerText: "🗑️ حذف",
                      eventListener: [
                        {
                          event: "click",
                          callback: () => {
                            DeleteUser(item.id);
                          },
                        },
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    });
  });

  return container;
}
