package org.rvermorel.cbd.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("admin").password("cbd84_rvh").roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests().antMatchers("/cbd84/", "/cbd84/front","/cbd84/images/**","/cbd84/feeds","/cbd84/rankings","/cbd84/partners","/cbd84/cbdfiles","/cbd84/assos").permitAll().antMatchers("/back/**","/cbd84/**/add**","/cbd84/**/delete**","/cbd84/**/update**")
                .access("hasRole('ADMIN')").and().formLogin().and().exceptionHandling()
                .accessDeniedPage("/cbd84/accessDenied");
       http.csrf().disable();     
	   http.headers().disable();

    }
}
