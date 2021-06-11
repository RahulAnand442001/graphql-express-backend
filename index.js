import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

const root = resolvers;

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
		rootValue: root,
	}),
);

app.listen(8000, () => console.log("Port running successfully"));
