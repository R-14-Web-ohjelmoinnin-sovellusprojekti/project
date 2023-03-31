package com.security.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.ComponentScan;

/**
 * This might help to remove the routing problem in React (setting route url by hand or refreshin route page)
 * The configuration redirects all the routing to domain root to be handled by the React index.html
 */

@Configuration
@ComponentScan
public class WebConfiguration implements WebMvcConfigurer{

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/{spring://w+}").setViewName("forward:/");
        registry.addViewController("/*/{spring://w+}").setViewName("forward:/");

    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        
        registry.addMapping("/data/")
            .allowedOrigins("http://localhost:3000", "http://localhost:8080")
            .allowedMethods("GET", "POST")
            .allowedHeaders("header1", "header2", "header3", "*")
            .exposedHeaders("data", "login", "vis1")
            .allowCredentials(true).maxAge(3600);
    }
    
}
