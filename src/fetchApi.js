import axios from "axios";

const baseURL = "https://tetyanaso-shop-default-rtdb.firebaseio.com/";

export const getArtsApi = () => {
  return axios
    .get(baseURL+'arts.json')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("err", err);
      throw err;
    });
};
// export const addArtsApi = () => {
//   return axios
//     .post(baseURL + "arts.json", {
//       id: "002",
//       title: "lorem-ipsum-002",
//       img: "lorem-ipsum-002.jpg",
//       genre: "fantasy",
//       like: 0,
//       top: true,
//       describe:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quisquam, facere inventore deserunt officia fuga nobis ullam asperiores illum, impedit accusamus perferendis dignissimos temporibus provident iste doloremque nam? Similique, doloremque.",
//       price: 1,
//     })
//     .then((res) => {
//       console.log("res.data post", res);
//       return res;
//     })
//     .catch((err) => {
//       console.log("err post", err);
//       throw err;
//     });
// };

// getArtsApi();
// console.log("getArtsApi", getArtsApi());
