package com.testing.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"checkout.feature"},
		format={"pretty", "html:target/cucumber","json:target/cucumber.json"},
		glue={"com/testing/test"}//)
		,tags={"@Completed,@rest"})
public class TriggerTest {
	

}
