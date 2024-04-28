import { Account, Client, Databases } from "appwrite";
import { API_BASE, PROJECT_ID } from "./app-constants";

const client = new Client();

client.setEndpoint(API_BASE).setProject(PROJECT_ID);

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
