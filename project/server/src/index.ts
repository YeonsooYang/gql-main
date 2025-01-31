import "reflect-metadata";
import { AppDataSource } from "./db/db-client";
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import http from 'http';
import {buildSchema} from 'type-graphql';
import { FilmResolver } from "./resolvers/Film";

// 외부 DB 연결시 사용  
/* AppDataSource.initialize()
    .then(() => {
        console.log(`연결성공`);
    })
    .catch((error) => console.log(error))
 */
async function main() {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [FilmResolver]
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()]
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({app});

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if(process.env.NODE_ENV !== 'production') {
      console.log(`
      server started on => http://localhost:4000
      graphql playground => http://localhost:4000/graphql
      `);
    } else {
      console.log(`Production server Started...`);
    }
  })
}

main().catch(err => console.log(err));