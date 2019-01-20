package stepsDefination;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.actions.ShopLjHomePageActions;
import pages.actions.ShopLjMouldingPageActions;
import utilites.SeleniumDriver;

/*@author : sandeep rawat
Date:*/
public class MouldingCategorySteps {

	ShopLjHomePageActions shopLjHomePageActions = new ShopLjHomePageActions();
	ShopLjMouldingPageActions shopLjMouldingPageActions = new ShopLjMouldingPageActions();

	@Given("^I am on the home page \"([^\"]*)\" of shoplj website$")
	public void i_am_on_the_home_page_of_shoplj_website(String WebsitUrl) throws Throwable {
		SeleniumDriver.openPage("http://me.sourcemash.com");
	}

	@Then("^verify the title of the home page$")
	public void verify_the_title_of_the_home_page() throws Throwable {

		String Title = SeleniumDriver.getDriver().getTitle();
		System.out.println(Title);

	}

	@Then("^click on \"([^\"]*)\" link$")
	public void click_on_link(String arg1) throws Throwable {
		shopLjHomePageActions.clickOnMouldingLink();
	}

	@And("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String Mouldings) throws Throwable {

		String Title = SeleniumDriver.getDriver().getTitle();
		System.out.println(Title);
	}

	@And("^select any product from the moulding page$")
	public void select_any_product_from_the_moulding_page() throws Throwable {
		shopLjMouldingPageActions.clickOnMouldingProduct();
	}

}
