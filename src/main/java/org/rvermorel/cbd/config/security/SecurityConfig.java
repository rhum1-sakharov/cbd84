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

        http.authorizeRequests().antMatchers("/", "/front","/images/**","/feeds","/rankings","/partners","/cbdfiles","/assos").permitAll().antMatchers("/back","/back/**","/**/add**","/**/delete**","/**/update**")
                .access("hasRole('ADMIN')").and().formLogin().loginPage("/login").usernameParameter("username").passwordParameter("password").and().exceptionHandling()
                .accessDeniedPage("/accessDenied");
       http.csrf().disable();     
	   http.headers().disable();

    }
}
