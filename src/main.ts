// src/index.ts
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import crawler from "./scraper.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.get("/scrape", async (_req: Request, res: Response) => {
    const startUrls = ["https://crawlee.dev"];
    await crawler.run(startUrls);
    await crawler.teardown();
    res.send("Scrape");
});

app.get("/", (_req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});