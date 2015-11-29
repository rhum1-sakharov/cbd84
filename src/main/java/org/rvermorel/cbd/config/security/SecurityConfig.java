package org.rvermorel.cbd.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("admin").password("cbd84_rvh").roles("ADMIN");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.authorizeRequests().antMatchers("/", "/front").permitAll().antMatchers("/back/**")
				.access("hasRole('ADMIN')").antMatchers("/**/add**").access("hasRole('ADMIN')").antMatchers("/**/delete**").access("hasRole('ADMIN')").antMatchers("/**/update**").access("hasRole('ADMIN')").and()
				.formLogin().and().exceptionHandling().accessDeniedPage("/accessDenied");

	}
}
