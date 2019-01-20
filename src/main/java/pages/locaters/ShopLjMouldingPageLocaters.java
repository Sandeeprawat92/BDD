package pages.locaters;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/*@author : sandeep rawat
Date:*/
public class ShopLjMouldingPageLocaters {

	@FindBy(how = How.XPATH, using = "//a[@href='http://me.sourcemash.com/lancaster.html'][contains(text(),'View Product')]")
	public WebElement MouldingviewProductXpath;

}
