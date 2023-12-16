import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts'
import TicketPage from '../pageobjects/ticket.page.ts'
import TicketDashboardPage from '../pageobjects/ticketDashboard.page.ts'

import * as fs from 'node:fs'
import * as path from 'node:path'
import { parse } from 'csv-parse/sync'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const user_records = parse(fs.readFileSync(path.join(__dirname, 'test.e2e.users.input.csv')), {
  columns: true,
  skip_empty_lines: true
})

const ticket_records = parse(fs.readFileSync(path.join(__dirname, 'test.e2e.tickets.input.csv')), {
  columns: true,
  skip_empty_lines: true
})

describe('new ticket creation test suite', () => {
    for (const usr of user_records) {
        it(`login user: ${usr.username}`, async () => {
            await LoginPage.open()
            await LoginPage.login(usr.username, usr.password)
            await TicketDashboardPage.loaded()
        })



        expect (TicketDashboardPage.assertUsernameDisplayed(usr.username))
        expect (TicketDashboardPage.assertAddTicket())
        expect(TicketPage.assertTicketCreateUrl())

        for (const ticket_record of ticket_records) {
            it(`create ticket: ${ticket_record.summary}`, async () => {
                expect(TicketPage.populate(ticket_record))
            })
        }

    }
})

// describe('T4SD Login form', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         let username='T4SYSAdmin'
//         let password='_SYS'
        
//         await LoginPage.login(username, password)
 

//     })
// })

