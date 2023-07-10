import { Homepage } from "../../pageObjectModel/homepage"; 
const homepagePom =new Homepage()
import homepageSecond from "../../pageObjectModel/homepageSecond";
describe('Page Object Model Kullanimi', () => {
    it('Page object model kullanim örnekleri', () => {
        homepagePom.navigate()
        homepagePom.pricingBtn()
    });
});
describe.only('Page Object Model 2nci Kullanim', () => {
    it('Page object model kullanim örnekleri', () => {
   homepageSecond.navigate()
   homepageSecond.pricingBtn.click()

    });
});