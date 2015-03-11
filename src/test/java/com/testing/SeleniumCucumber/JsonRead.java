package com.testing.SeleniumCucumber;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class JsonRead {
	static JSONObject jsonObject = null;
	static JSONParser parser = new JSONParser();

	public static JSONObject jsonReadObj(String objPath) {

		try {
			File f = new File(objPath);
			if (f.exists()) {

				Object obj = parser.parse(new FileReader(objPath));
				jsonObject = (JSONObject) obj;

				return jsonObject;

			}
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (IOException e2) {
			System.out.println("IOException");
			e2.printStackTrace();
		} catch (ParseException e3) {
			e3.printStackTrace();
		}
		return jsonObject;

	}

}
