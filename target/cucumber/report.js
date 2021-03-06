$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout Add to Cart Page Validation",
  "description": "",
  "id": "checkout-add-to-cart-page-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 55838356000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Add Product to cart",
  "description": "",
  "id": "checkout-add-to-cart-page-validation;add-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Completed"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Target Home page loads successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for a product using \"14990513\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Product Listing Page loads for that TCIN loads successfully",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Navigate to Product detail page of the product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Add item to cart from PDP",
  "keyword": "And "
});
formatter.match({
  "location": "Checkout.Target_Home_page_loads_successfully()"
});
formatter.result({
  "duration": 10193527000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14990513",
      "offset": 28
    }
  ],
  "location": "Checkout.Search_for_a_product_using(String)"
});
formatter.result({
  "duration": 14548741000,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.Product_Listing_Page_loads_for_that_TCIN_loads_successfully()"
});
formatter.result({
  "duration": 15187005000,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 15 seconds waiting for visibility of Proxy element for: org.openqa.selenium.support.pagefactory.DefaultElementLocator@3dd69f5a\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027Saurabhs-MacBook-Pro.local\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d31.0, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1d016ca6-520b-cf46-910e-7f914e7e7603\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:79)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\n\tat com.testing.SeleniumCucumber.ActionMethods.sync(ActionMethods.java:29)\n\tat com.testing.test.Checkout.Product_Listing_Page_loads_for_that_TCIN_loads_successfully(Checkout.java:64)\n\tat ✽.When Product Listing Page loads for that TCIN loads successfully(checkout.feature:7)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"prodTitle-slp_medium-1-1\"}\nCommand duration or timeout: 12 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027Saurabhs-MacBook-Pro.local\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d31.0, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1d016ca6-520b-cf46-910e-7f914e7e7603\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:393)\n\tat org.openqa.selenium.By$ById.findElement(By.java:214)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\n\tat com.sun.proxy.$Proxy14.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:227)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:39)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:213)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:210)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.testing.SeleniumCucumber.ActionMethods.sync(ActionMethods.java:29)\n\tat com.testing.test.Checkout.Product_Listing_Page_loads_for_that_TCIN_loads_successfully(Checkout.java:64)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:483)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:289)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:483)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"prodTitle-slp_medium-1-1\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027Saurabhs-MacBook-Pro.local\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/m7/4nvrcv4j4mj081ptg9758ptr0000gn/T/anonymous1614551131326594530webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9641:133)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/m7/4nvrcv4j4mj081ptg9758ptr0000gn/T/anonymous1614551131326594530webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9650:3)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/m7/4nvrcv4j4mj081ptg9758ptr0000gn/T/anonymous1614551131326594530webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11635:16)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/m7/4nvrcv4j4mj081ptg9758ptr0000gn/T/anonymous1614551131326594530webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11640:7)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/m7/4nvrcv4j4mj081ptg9758ptr0000gn/T/anonymous1614551131326594530webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:11582:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "Checkout.Navigate_to_Product_detail_page_of_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.Add_item_to_cart_from_PDP()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 794751000,
  "status": "passed"
});
});