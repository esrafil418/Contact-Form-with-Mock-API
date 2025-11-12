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
      "w-full h-full flex flex-col justify-center items-center border border-white/10 rounded-lg md:w-[900px] md:mx-auto",
  });
  // table
  const table = El({
    element: "div",
    className: "h-[100vh] w-full flex flex-col justify-center items-center",
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
            element: "div",
            className:
              "overflow-auto max-h-80 border border-gray-200 rounded-lg",
            children: [
              El({
                element: "table",
                className: "w-full text-center divide-y divide-gray-200",
                children: [
                  El({
                    element: "thead",
                    className: "bg-gray-400",
                    children: [
                      El({
                        element: "tr",
                        className: "text-gray-100",
                        children: [
                          El({
                            element: "th",
                            innerText: "نام و نام خانوادگی",
                          }),
                          El({
                            element: "th",
                            innerText: "شماره همراه",
                          }),
                          El({
                            element: "th",
                            innerText: "ویرایش و حذف",
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
          className: "divide-y divide-gray-200",
          children: [
            El({
              element: "tr",
              children: [
                El({
                  element: "td",
                  className: "py-3",
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
