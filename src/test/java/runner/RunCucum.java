package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin = { "json:target/RunCucum/cucumber.json","pretty",
		"html:target/RunCucum/cucumber.html"
			}, 
		features = "src/test/resources/features", 
		glue = "stepsDefination", 
		tags = { "@Moulding-Category" }

)
public class RunCucum extends AbstractTestNGCucumberTests {

}
