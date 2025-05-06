import { BaseComponent } from "../components/BaseComponent";
import { BasePage } from "./BasePage";
import { expect } from "detox";



export class LoginPage extends BasePage{
    loginScreen: BaseComponent = new BaseComponent('Login-screen')


    public async goToLoginPage(): Promise<void>{
        await this.navigateWithTabBar('Login')
        await expect(this.loginScreen.getElement()).toBeVisible()
    }



}