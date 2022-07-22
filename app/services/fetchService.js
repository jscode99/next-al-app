//Constant
import { CONST } from "../services/constants";

import https from 'https'

export const fetchService = async (url, method, body, webhook = false) => {
  let responseJson;
  let response;
  if (webhook) {
    responseJson = await fetch(url, {
      method: method,
      agent: new https.Agent({
        rejectUnauthorized: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    response = await responseJson;

    return response;
  } else {
    switch (method) {
      case CONST.API_METHOD.POST:
        responseJson = await fetch(url, {
          method: method,
          agent: new https.Agent({
            rejectUnauthorized: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        response = await responseJson.json();

        return response;

      case CONST.API_METHOD.GET:
        responseJson = await fetch(url, {
          agent: new https.Agent({
            rejectUnauthorized: false,
          }),
        });
        response = await responseJson.json();

        return response;
    }
  }
};
