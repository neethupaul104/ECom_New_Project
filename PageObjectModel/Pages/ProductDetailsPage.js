import {Selector, t} from 'testcafe'


class ProductDetailsPage{
    constructor(){

        this.item1 = Selector('div > div._thumb.pos-relt').child().nth(0);
        this.item2 = Selector('div > div._thumb.pos-relt').child().nth(1);
        this.item3 = Selector('div > div._thumb.pos-relt').child().nth(2);
        this.SearchInput = Selector('div.fs-14.lh-18.ls-064.c-brown-gray.ml-10.mr-10');        
        this.SearchInputtext = Selector('input').withAttribute('name','q');
        this.size_link = Selector('div[class="fs-14 fw-5 c-dark-gray ta-c pt-6 pb-6 pl-5 pr-5 mw-40 mb-20 b-light-gray b-box size-button br-3 pos-relt mr-r-10"]');
        this.AddToBag_btn = Selector('a[id="addToBag"] div[class="flex center-xs"] div');

    }

    async addFirstItemToBag(){
        await t.click(this.item1)
        .hover(this.size_link)
        .click(this.size_link)
        .click(this.AddToBag_btn)
        .wait(2000)
        await t
        .click(this.SearchInput)
        .typeText(this.SearchInputtext,'dresses') 
        .pressKey("enter");
    }
    async addSecondItemToBag(){
        await t.click(this.item2)
        .hover(this.size_link)
        .click(this.size_link)       
        .click(this.AddToBag_btn)
        .wait(2000);
        await t
        .click(this.SearchInput)
        .typeText(this.SearchInputtext,'dresses') 
        .pressKey("enter");
    }
    async addThirdItemToBag(){
        await t.click(this.item3)
        .hover(this.size_link)
        .click(this.size_link)
        .click(this.AddToBag_btn) 
        .wait(3000);

    }
  
}

export default new ProductDetailsPage();