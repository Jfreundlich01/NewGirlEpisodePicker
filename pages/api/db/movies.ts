import type { NextApiRequest, NextApiResponse } from "next";
import createRouter from "next-connect";
import { neo4jDriver } from "server/neo4j";

const getMoviesRouter = createRouter<NextApiRequest, NextApiResponse>();

getMoviesRouter.get(async (req, res) => {
  try {
    // opening the neo4j session
    const neosession = neo4jDriver.session();

    const getMovies = await neosession.executeRead((tx) => {
      const query = `
      MATCH (n:Movie) RETURN n
      `;
      return tx.run(query);
    });

    const movies = getMovies.records.map((movie) => {
      return movie.get("n").properties.title;
    });
    console.log(movies);
    await neosession.close();

    return res.status(200).json({ data: movies });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

export default getMoviesRouter;
