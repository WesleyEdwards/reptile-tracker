import { controller } from "../lib/controller";
import { createFeeding, getFeedingsByReptile } from "../dbQueries/feeding";

export const feedingController = controller("feeding", [
  { path: "/:id", method: "get", endpointBuilder: getFeedingsByReptile },
  { path: "/", method: "post", endpointBuilder: createFeeding },
]);
