import HomePage from '../Pages/HomePage'
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import MyBagPage from '../Pages/MyBagPage';

const URL = 'https://www.stylishop.com/';

fixture("My Purchase")
    .page(URL);

test('Test1 : URL loading ',async t =>{
    await t
    .maximizeWindow();
    console.log('URL Loaded');
});    

test('Test2 : Add items with filter and verify in My Bag ',async t =>{
    HomePage.setSearchInput(); 
    HomePage.setFilters();  
    ProductDetailsPage.addFirstItemToBag();
    ProductDetailsPage.addSecondItemToBag();
    ProductDetailsPage.addThirdItemToBag();
    MyBagPage.moveToMyBag(); 
    MyBagPage.verifyAddtoMyFavourite();
    MyBagPage.verifyRemoveItemFromMyBag();
    MyBagPage.verifyItemSizeChange();
    await t .wait(1000);
});
