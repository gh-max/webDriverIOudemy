import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TicketPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputProductId () {
        return $('[formControlName="product_id"]');
    }
    

    public get inputFunctionalAreaCs () {
        return $('[formControlName="functional_area_cs"]');
    }

    public get inputFunctionTypeCs () {
        return $('[formControlName="function_type_cs"]');
    }

    public get inputFeature () {
        return $('[formControlName="feature_impacted"]');
    }

    public get inputSeverityId () {
        return $('[formControlName="current_severity_id"]');
    }

    public get inputSummary () {
        return $('[formControlName="summary"]');
    }

    public get inputDetail () {
        return $('[formControlName="detail"]');
    }




    public get btnSubmit () {
        return $('button=Submit');
    }


    private async setProductAc (value: string) {

        await this.inputSummary.setValue('**test**')
        await browser.pause(10000); // Adjust this value as needed

        // // Select the input field and enter the text
        // const autocompleteInput = await $('app-ac-product input');
        // await autocompleteInput.setValue(value);

        // await this.inputFeature.setValue('**test**')

        // // Wait for the autocomplete options to appear
        // await browser.pause(10000); // Adjust this value as needed

        // // Select the desired option from the list
        // // const option = await $('mat-option=' + value); // Replace 'option text' with the text of the option you want to select
        // // await option.click();

        await browser.pause(10000); // Adjust this value as needed

          
        // // Wait for the autocomplete input to be displayed
        // // const autocompleteInput = $('app-ac-product').$('input');
        // const autocompleteInput = await $('app-ac-product input');
        // autocompleteInput.waitForDisplayed();
    
        // // Populate the autocomplete with text
        // await autocompleteInput.setValue(value);

        // await browser.pause(5000)    
    
        // // Wait for the autocomplete options to be displayed
        // const autocompleteOptions = $$('mat-option');
        // browser.waitUntil(async () => await autocompleteOptions.length > 0);

        // await browser.pause(5000)    

        // // // Select the first option
        // // autocompleteOptions[0].click();
    
        // // // Add your assertions here
        
    }

    public assertTicketCreateUrl()  {
        // Some other event should trigger the navigation to the ticket create page first

        it('navigate to the "./app-ticket-create" URL', async () => {
            const expectedUrl = 'http://localhost:4200/app-ticket-create';
            const currentUrl = await browser.getUrl()
            await expect(currentUrl).toEqual(expectedUrl);

            await this.inputSummary.setValue('**test**')

                    // Select the input field and enter the text
            const autocompleteInput = await $('app-ac-product input');
            await autocompleteInput.setValue('TriMed');

            // Wait for the autocomplete options to be displayed
            const autocompleteOptions = $$('mat-option');
            browser.waitUntil(async () => await autocompleteOptions.length > 0);

            // Select the first option
            autocompleteOptions[0].click();

            await this.inputFeature.setValue('**test**')
            


            // Select the desired option from the list
            // const option = await $('mat-option=' + value); // Replace 'option text' with the text of the option you want to select
            // await option.click();
            await browser.pause(5000); // Adjust this value as needed

    
        });

    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async populate (ticket_record: any) {
        // await this.inputSummary.setValue('**test**')
        // browser.pause(10000); // Adjust this value as needed

        // expect(await this.setProductAc(ticket_record.product))
        // await browser.pause(5000)    
        // await this.inputFunctionalAreaCs.setValue(ticket_record.functional_area_cs);
        // await this.inputFunctionTypeCs.setValue(ticket_record.function_type_cs);
        // await this.inputFeature.setValue(ticket_record.feature_impacted);
        // await this.inputSeverityId.setValue(ticket_record.current_severity_id);
        // await this.inputSummary.setValue(ticket_record.summary);
        // await this.inputDetail.setValue(ticket_record.detail);
        // await this.btnSubmit.click();
        // const elem = await $('mat-toolbar').$('.ng-star-inserted*=' + username )
        // Assert that the span element is present
        // await expect(elem).toBeExisting()

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new TicketPage();
