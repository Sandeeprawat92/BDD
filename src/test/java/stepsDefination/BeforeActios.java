package stepsDefination;

import cucumber.api.java.Before;
import utilites.SeleniumDriver;

public class BeforeActios {

	@Before
	public static void Setup() {
		SeleniumDriver.setUpDriver();
	}

}
