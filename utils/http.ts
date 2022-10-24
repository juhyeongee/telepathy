import axios from "axios";

export function storeData(data: object) {
  axios.post(
    "https://telepathy-ceroteam-default-rtdb.asia-southeast1.firebasedatabase.app/forder1.json",
    data
  );
}
