import intances from "./instances";
import { isAuthentication } from "../auth/getToken";

export const getTrailerUrl = async () => {
  return await intances.get(`/trailer`);
};
const dataToken = isAuthentication();
export const editTrailer = async (data: any) => {
  return await intances.put(
    `/trailer/${data.get("_id")}/${dataToken.user._id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${dataToken.token}`,
      },
    }
  );
};
export const createTrailer = async (data: any) => {
  return await intances.post(
    `/trailer/${data._id}/${dataToken.user._id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${dataToken.token}`,
      },
    }
  );
};

export const getBackground = async () => {
  return await intances.get("/background");
};

export const setBackground = async (data) => {
  return await intances.post(
    `/background/${data.get("_id")}/${dataToken.user._id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${dataToken.token}`,
      },
    }
  );
};
