import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ServerError,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { initStorage } from "./storage";
import authService from "../modules/auth/auth-service";
import { toast } from "../modules/shared/toast-service";
const API_URL = import.meta.env.VITE_API_URL;

const errorLink = onError(({ networkError, response }) => {
  if (response?.errors?.length) {
    for (let error of response.errors) {
      console.error(error.message);
    }
  }
  if (
    networkError &&
    "statusCode" in networkError &&
    networkError.statusCode === 401
  ) {
    authService.localLogout();
  }
});

const headersLink = setContext(async (_, context) => {
  let storage = await initStorage();
  let token = await storage.get("accessToken");
  let headers = context.headers || {};
  if (token) {
    headers["x-access-token"] = token;
  }
  return {
    headers: {
      ...headers,
      "x-apollo-operation-name": "UploadMutation",
      "Apollo-Require-Preflight": "true",
    },
  };
});

const uploadLink = createUploadLink({
  uri: API_URL,
  credentials: "include",
  fetchOptions: {
    credentials: "include",
  },
});

const client = new ApolloClient({
  link: errorLink.concat(headersLink).concat(uploadLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  },
});
export default client;
