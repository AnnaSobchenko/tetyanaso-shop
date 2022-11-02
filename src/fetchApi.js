import axios from "axios";
// axios.defaults.baseURL =
//   "https://test-task-blagoteka-default-rtdb.europe-west1.firebasedatabase.app/";
const baseURL =
  "https://test-task-blagoteka-default-rtdb.europe-west1.firebasedatabase.app/";

// export async function getArtsApi() {
//   console.log("first");
//   const { data } = await axios.get(baseURL);
//   console.log("data", data);
//   return data;
// }


export const getArtsApi = async() => {
  return await axios
    .get(baseURL)
    .then((res) => {
      console.log("res.data", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("err", err);
      throw err;
    });
};

// getArtsApi();
console.log("getArtsApi", getArtsApi());
