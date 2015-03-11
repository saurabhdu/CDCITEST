package com.testing.SeleniumCucumber;

import org.junit.rules.ErrorCollector;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.*;

public class ActionMethods {

	public ActionMethods(WebDriver driver, JavascriptExecutor js,
			ErrorCollector collector) {
		
	}
	
	public void type(String arg,WebElement obj){
		obj.clear();
		obj.sendKeys(arg);
	}
	
	public void click(WebElement obj){
		obj.click();
	}
	
	public void sync(WebDriver driver,WebElement obj){
		WebDriverWait wait = new WebDriverWait(driver, 15);
		  wait.until(ExpectedConditions.visibilityOf(obj));
	}

	public void Select(WebElement ele,String value){
		Select dropdown = new Select(ele);
		dropdown.selectByValue(value);
	}
	
	public boolean verifyElement(WebElement obj){
		if(obj.isDisplayed()){
			return true;
		}else
			return false;
			
	}
}
