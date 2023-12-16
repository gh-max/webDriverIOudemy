import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('[name="username"]');
    }

    public get inputPassword () {
        return $('[formControlName="password"]');
    }

    public get btnSubmit () {
        return $('button=Submit');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open () {
        return await super.open('/login');
    }
}

export default new LoginPage();
