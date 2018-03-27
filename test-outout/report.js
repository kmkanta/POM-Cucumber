$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 2,
  "name": "Register to facebook Application",
  "description": "",
  "id": "register-to-facebook-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login Test",
  "description": "",
  "id": "register-to-facebook-application;login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "launch \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter username and password fields",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 8
    }
  ],
  "location": "UserLoginStepDefs.launch_browser(String)"
});
formatter.result({
  "duration": 7334351954,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.enter_application_url()"
});
formatter.result({
  "duration": 5862813361,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.enter_username_and_password_fields()"
});
formatter.result({
  "duration": 58327,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.click_on_submit_button()"
});
formatter.result({
  "duration": 61126,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.close_the_browser()"
});
formatter.result({
  "duration": 1618823711,
  "status": "passed"
});
formatter.uri("UserLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Login to facebook Application",
  "description": "",
  "id": "login-to-facebook-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login Test",
  "description": "",
  "id": "login-to-facebook-application;login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "launch \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter username and password fields",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on login home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 8
    }
  ],
  "location": "UserLoginStepDefs.launch_browser(String)"
});
formatter.result({
  "duration": 4492248360,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.enter_application_url()"
});
formatter.result({
  "duration": 6076592498,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.enter_username_and_password_fields()"
});
formatter.result({
  "duration": 65326,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.click_on_submit_button()"
});
formatter.result({
  "duration": 47128,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.user_is_on_login_home_page()"
});
formatter.result({
  "duration": 132985,
  "status": "passed"
});
formatter.match({
  "location": "UserLoginStepDefs.close_the_browser()"
});
formatter.result({
  "duration": 982265835,
  "status": "passed"
});
});