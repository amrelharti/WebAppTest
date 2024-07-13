package com.example.webapprealtimetest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

@SpringBootApplication
public class WebAppRealTimeTestApplication {
	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(WebAppRealTimeTestApplication.class);
		String port = System.getenv("PORT");
		if (port == null) {
			port = "8080";
		}
		app.setDefaultProperties(Collections.singletonMap("server.port", port));
		app.run(args);
	}
}
