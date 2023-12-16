import { $ } from '@wdio/globals'
import ToolbarComponent from '../pageobjects/toolbarComponent.ts'
import Page from './page.ts';

/**
 * common page object containing all methods, selectors and functionality
 */
class TicketDashboardPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get btnAdd () {
        return $('button=ADD')
    }

    public get ticketDashboard () {
        return $('app-ticket-dashboard')
    }

    /**
     * define re-usable assertions
     */


    public assertUsernameDisplayed(username: string) {
        it(`display username in toolbar: ${username}`, async () => {   
            expect(ToolbarComponent.usernameDisplayed(username))
        })
    }

    public assertAddTicket() {
        it('ADD new ticket from ticket dashboard', async () => {   
            expect(this.ticketDashboard).toBeExisting()
            expect(this.btnAdd).toBeClickable()
            await this.btnAdd.click()
        })
    }

    public async loaded (path: string = '/app-ticket-dashboard') {
        await super.loaded(path)
    }


}

export default new TicketDashboardPage();
