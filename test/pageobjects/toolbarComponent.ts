import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class TicketDashboardPage  {
    /**
     * define selectors using getter methods
     */


     /**
     * define re-usable assertions 
     */

    public async usernameDisplayed (username: string) {
        const elem = await $('mat-toolbar').$('.ng-star-inserted*=' + username )
        // Assert that the span element is present
        await expect(elem).toBeExisting()
        }
    }



export default new TicketDashboardPage();
