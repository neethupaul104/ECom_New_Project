import {Selector, t} from 'testcafe'


class MyBagPage{
    constructor(){

       
        this.myBaglink=Selector(".en-font.bg-pastel-red-two.fs-10.fw-6.c-white.br-50p.h-16.w-16.ta-c.pos-abs._badge.top-0.bag-badge.r-0");

        this.Sizedropdonw = Selector('span').withText("Size").nth(0);
        this.newSize = Selector('div[class="fs-14 fw-5 c-dark-gray ta-c pt-6 pb-6 pl-5 pr-5 mw-40 mb-20 b-light-gray b-box size-button br-3 pos-relt  mr-15"]');
        this.movetoFavourite =Selector(' div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(2) > span:nth-child(1) > span:nth-child(2)').nth(1);
        this.removebutn = Selector('span').withText("Remove").nth(2);
        this.removeButton = Selector('span').withText("Remove");
    }

    async moveToMyBag(){
        await t      
        .click(this.myBaglink) 
        .wait(2000);
    }

     async verifyItemSizeChange(){        
        if (await t.expect(this.Sizedropdonw.exists).ok()){
        await t.click(this.Sizedropdonw)
        .click(this.newSize);
        }
    }
    async verifyAddtoMyFavourite(){
        await t
        .click(this.movetoFavourite)   
        .wait(3000);
    }
    async verifyRemoveItemFromMyBag(){
        await t
        .click(this.removebutn)  
        .click(this.removeButton);
    }

}

export default new MyBagPage();