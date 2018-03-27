package pom.BDDFramework.runnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\main\\java\\pom\\BDDFramework\\features", glue = {
		"classpath:pom.BDDFramework.stepDefinitions" }, format = { "pretty", "html:test-outout",
				"json:json_output/cucumber.json",
				"junit:junit_xml/cucumber.xml" }, monochrome = true, strict = true, dryRun = false, 
				tags = { "@Login" })
public class TestRunner {

}
