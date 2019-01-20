package stepsDefination;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import utilites.SeleniumDriver;

public class AfterActions {

	@After
	public static void teardown(Scenario scenario) {

		WebDriver driver = SeleniumDriver.getDriver();

		/* capture screenshot if scenario is failed..driver.!! */
		/*
		 * System.out.println(scenario.isFailed()); if (scenario.isFailed()) {
		 * byte[] screenshotBytes = ((TakesScreenshot)
		 * driver).getScreenshotAs(OutputType.BYTES);
		 * scenario.embed(screenshotBytes, "image/png"); }
		 */

		byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshotBytes, "image/png");

		SeleniumDriver.TearDown();

	}

}
