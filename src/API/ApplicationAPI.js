import axios from "axios";
import { getAuthToken } from "../utils";

const client = axios.create({
  baseURL: process.env.REACT_APP_APPLICATION_BASE_ROUTE,
});

const ApplicationAPI = {
  createApplication: async (form) => {
    console.log(form);

    const application = new FormData();

    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        form[key] = "N/A";
      }

      application.append(key, form[key]);
    });

    return client({
      method: "post",
      url: "/application/create",
      data: application,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: getAuthToken(),
      },
    });
  },
  getApplication: async (data) => {
    return await client.get("/application/get", {
      params: { userId: data.userId },
      headers: { Authorization: data.token },
    });
  },
};

export default ApplicationAPI;
