import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open (path: string) {
        return await browser.url(`${path}`)
    }

    /**
    * Check if an expected page is loaded
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async loaded (path: string) {
        const expectedUrl = (`${browser.options.baseUrl}${path}`);
    
        await browser.waitUntil(async () => {
            const url = await browser.getUrl();
            return url.includes(expectedUrl)
        }, { timeout: 5000 });
        
        return expect(browser).toHaveUrl(expectedUrl);
    }

}
