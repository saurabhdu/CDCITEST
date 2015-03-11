package com.testing.test;

import java.util.Properties;
import static org.junit.Assert.assertTrue;
import org.junit.Rule;
import org.junit.rules.ErrorCollector;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;
import com.testing.SeleniumCucumber.ActionMethods;
import com.testing.SeleniumCucumber.PropertiesFile;
import com.testing.objects.ProdEnvObjects;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Checkout {
	public static WebDriver driver;
	public static Properties data=null;
	public static ProdEnvObjects prodenvobj=null;
	static JavascriptExecutor js;
	static ActionMethods user;
	
	@Rule
	public static ErrorCollector collector = new ErrorCollector();	
	
	@Before
	public static void setUp() throws Exception {
		
		data=PropertiesFile.ReadFunc();
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://www.target.com");
		
		prodenvobj= PageFactory.initElements(driver,
				ProdEnvObjects.class);
		
		js = (JavascriptExecutor) driver;
		user = new ActionMethods(driver,js,collector);
	}	
	
	 @After
		public static void tearDown() throws Exception {    	
			driver.quit();
		}
	 
	 @Given("^Target Home page loads successfully$")
	 public void Target_Home_page_loads_successfully() throws Throwable {
	    assertTrue(user.verifyElement(prodenvobj.SearchBox));
	 }

	 @Given("^Search for a product using \"([^\"]*)\"$")
	 public void Search_for_a_product_using(String arg1) throws Throwable {
		 //arg1=data.getProperty("SearchTerm");
		 user.type(arg1, prodenvobj.SearchBox);
		 user.click(prodenvobj.SearchButton);
	 }
	 
	 @When("^Product Listing Page loads for that TCIN loads successfully$")
	 public void Product_Listing_Page_loads_for_that_TCIN_loads_successfully() throws Throwable {
	    user.sync(driver, prodenvobj.ProductTitle);
	    user.click(prodenvobj.ProductTitle);
	 }

	 @When("^Navigate to Product detail page of the product$")
	 public void Navigate_to_Product_detail_page_of_the_product() throws Throwable {
	   user.sync(driver, prodenvobj.HeroImage);
	 }

	 @When("^Add item to cart from PDP$")
	 public void Add_item_to_cart_from_PDP() throws Throwable {
	     user.Select(prodenvobj.selectSize,"Small");
	     user.click(prodenvobj.AddToCart);
	     Thread.sleep(4000L);
	     
	 }


}
