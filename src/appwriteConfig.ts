import { Account, Client, Databases } from "appwrite";
import { PROJECT_ID } from "./app-constants";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
