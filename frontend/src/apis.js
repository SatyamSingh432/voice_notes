import axios from "axios";

const API_URL = "http://localhost:8080/api/notes/";

export const createNote = (data) => {
  return axios.post(API_URL + "add", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
