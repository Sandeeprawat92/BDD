package pages.actions;

import org.openqa.selenium.support.PageFactory;

import pages.locaters.ShopLjMouldingPageLocaters;
import utilites.SeleniumDriver;

public class ShopLjMouldingPageActions {

	ShopLjMouldingPageLocaters shopLjMouldingPageLocaters;

	public ShopLjMouldingPageActions() {
		this.shopLjMouldingPageLocaters = new ShopLjMouldingPageLocaters();
		PageFactory.initElements(SeleniumDriver.getDriver(), shopLjMouldingPageLocaters);
	}

	public void clickOnMouldingProduct() {
		shopLjMouldingPageLocaters.MouldingviewProductXpath.click();
	}

}
