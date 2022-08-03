import React from "react";
import { APIPath } from "../constants/APIPath";

const ajax = (args) => {
  const { url, method, body, token } = args;
  let headers;
  let requestBody;

  if (body && body instanceof FormData) {
    headers = { Authorization: token ? `Token ${token}` : null };
    requestBody = body;
  } else {
    requestBody = JSON.stringify(body);
    headers = {
      "Content-Type": "application/json",
      Authorization: token ? `Token ${token}` : null,
    };
  }

  const fetchData = {
    headers: headers,
    body: body ? requestBody : null,
    method,
  };
  return fetch(APIPath + url, fetchData).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      const err = new Error(response.statusText);
      err.response = response;
      err.status = response.status;
      throw err.response;
    }
  });
};
export default ajax;
