package pom.BDDFramework.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pom.BDDFramework.TestBase.TestBase;

public class UserLoginStepDefs extends TestBase {

	@Given("^launch \"([^\"]*)\" browser$")
	public void launch_browser(String browser) throws Throwable {
		selectBrowser(browser);
	}

	@When("^enter application url$")
	public void enter_application_url() throws Throwable {
		getUrl("https://www.facebook.com/");

	}

	@Then("^enter username and password fields$")
	public void enter_username_and_password_fields() throws Throwable {

	}

	@Then("^click on submit button$")
	public void click_on_submit_button() throws Throwable {

	}

	@Then("^user is on login home page$")
	public void user_is_on_login_home_page() throws Throwable {

	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
		closeBrowser();

	}

}
