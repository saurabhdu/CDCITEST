package com.testing.SeleniumCucumber;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertiesFile {
	public static Properties ReadFunc() {
		Properties properties=null;
		try {
			File file = new File("/Users/saurabhdubey/Downloads/SeleniumCucumber/Data/PROD_DATA.properties");
			FileInputStream fileInput = new FileInputStream(file);
			properties = new Properties();
			properties.load(fileInput);
			fileInput.close();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return properties;
	}
}