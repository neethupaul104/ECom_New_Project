import {Selector, t} from 'testcafe'


class HomePage{
    constructor(){

        this.SearchInput = Selector('div.fs-14.lh-18.ls-064.c-brown-gray.ml-10.mr-10');        
        this.SearchInputtext = Selector('input').withAttribute('name','q');

        this.BrandDropdown =Selector('.txt-overflow-ellipsis.w100p').withText('Brand');
        this.CategoryDropdown =Selector('.txt-overflow-ellipsis.w100p').withText('Categories');
        this.ColourDropdown =Selector('.txt-overflow-ellipsis.w100p').withText('Color');

        this.BrandCheckbox = Selector('div.overflow-auto.mx-h-330 > div > div').nth(1);
        this.CategoryCheckbox = Selector('div.overflow-auto.mx-h-330 > div > div').nth(1);
        this.ColorCheckbox = Selector('div.overflow-auto.mx-h-330 > div > div').nth(1);
    }
    async setSearchInput(){
        await t
        .click(this.SearchInput)        
        .typeText(this.SearchInputtext,'dresses') 
        .pressKey("enter")    
        .wait(2000);             
    }

    async setFilters(){
        await t
        .click(this.BrandDropdown)
        .click(this.BrandCheckbox)
        .click(this.BrandDropdown)
        .click(this.CategoryDropdown)
        .click(this.CategoryCheckbox)
        .click(this.CategoryDropdown)
        .hover(this.ColourDropdown)
        .click(this.ColourDropdown)
        .click(this.ColorCheckbox)
        .click(this.ColourDropdown)        
        .wait(2000);        
    }


  
}

export default new HomePage();