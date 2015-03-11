package com.testing.objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ProdEnvObjects {

	@FindBy(name = "searchTerm")
	public WebElement SearchBox;
	
	@FindBy(id="goSearch")
	public WebElement SearchButton;
	
	@FindBy(id="prodTitle-slp_medium-1-1")
	public WebElement ProductTitle;
	
	@FindBy(id="heroImage")
	public WebElement HeroImage;
	
	@FindBy(name="attr-sizeSelection")
	public WebElement selectSize;
	
	@FindBy(name="addToCart")
	public WebElement AddToCart;
	
}
