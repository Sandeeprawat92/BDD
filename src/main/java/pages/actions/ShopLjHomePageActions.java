package pages.actions;

import org.openqa.selenium.support.PageFactory;

import pages.locaters.ShopLjHomePageLocaters;
import utilites.SeleniumDriver;

public class ShopLjHomePageActions {

	ShopLjHomePageLocaters shopLjHomePageLocaters;

	// construter for initilize the webelements
	public ShopLjHomePageActions() {
		this.shopLjHomePageLocaters = new ShopLjHomePageLocaters();
		PageFactory.initElements(SeleniumDriver.getDriver(), shopLjHomePageLocaters);
	}

	public void clickOnMouldingLink() {
		shopLjHomePageLocaters.MoudingLink.click();
	}

	public void clickOnMatboardsLink() {
		shopLjHomePageLocaters.MatboardsLink.click();
	}

	public void clickOnGlazingFormLink() {
		shopLjHomePageLocaters.GlazingFormLink.click();
	}

	public void clickOnSuppliesLink() {
		shopLjHomePageLocaters.SuppliesLink.click();
	}

}
