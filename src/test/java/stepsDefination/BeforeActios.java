package stepsDefination;

import cucumber.api.java.Before;
import utilites.SeleniumDriver;

/*@author : sandeep rawat
Date:*/
public class BeforeActios {

	@Before
	public static void Setup() {
		SeleniumDriver.setUpDriver();
	}

}
