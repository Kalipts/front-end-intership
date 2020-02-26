import { getData, updateData, deleteData, addData } from "./axiosService";

const url = `http://localhost:5000/api/resource`;

export const getResource = data => {
  return getData(url, data);
};

export const deleteResource = data => {
  const resourceId = data;
  return deleteData({ url: `${url}/${resourceId}`, resourceId });
};

export const updateResource = data => {
  return updateData({ url: `${url}`, data });
};

export const addResource = data => {
  const resourceId = data;
  return addData({ url: `${url}/${resourceId}`, resourceId });
};