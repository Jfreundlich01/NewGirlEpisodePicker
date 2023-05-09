import { createProtectedRouter } from "../context";
import { z } from "zod";
// These queries relate to the document metadata, view permissions and handles for individual documents from Google Cloud Bucket that are uploaded to Peer Supply
// Please see comments above specific query for info on return values and functionality

export const MovieRouter = createProtectedRouter().query("getMovies", {
  input: z.object({}),
  async resolve({ input, ctx }) {
    console.log("helllo movie db");
    const session = ctx.neo4jDriver.session();

    await session.close();

    //returns 0 if there are no documents uploaded by that organization
  },
});
