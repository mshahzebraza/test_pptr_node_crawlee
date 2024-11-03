// For more information, see https://crawlee.dev/
import { PuppeteerCrawler, log } from 'crawlee';

import { router } from './routes.js';


const crawler = new PuppeteerCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
    // Comment this option to scrape the full website.
    maxRequestsPerCrawl: 2,
});

export default crawler;