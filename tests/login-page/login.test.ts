import { BasePage } from "../../pages/BasePage"
import { LoginPage } from "../../pages/LoginPage"


describe('Authorization logic', ()=> {
    beforeAll(async ()=>{
       await device.launchApp()
    })

    it('Should successfully login', async ()=> {
        const page: LoginPage = new LoginPage()

       await page.goToLoginPage()


    })


    }
)