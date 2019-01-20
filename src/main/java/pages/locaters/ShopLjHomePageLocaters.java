package pages.locaters;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ShopLjHomePageLocaters {

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Mouldings')]")
	public WebElement MoudingLink;

	@FindBy(how = How.ID, using = "ui-id-3")
	public WebElement MatboardsLink;

	@FindBy(how = How.ID, using = "ui-id-4")
	public WebElement GlazingFormLink;

	@FindBy(how = How.ID, using = "ui-id-5")
	public WebElement SuppliesLink;
}
