import store from "./src/store";
import { Service } from "./src/types/service";
import { LoadingMiddleware } from "./src/serviceMiddlewares/loadingMiddleware";
import { REST } from "./src/api/rest";

const rest = new REST("http://localhost:8080");
const service: Service = new LoadingMiddleware(rest, store.dispatch);

export default service;
