package org.rvermorel.cbd.config.security;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

/**
 * The MessageSecurityWebApplicationInitializer will automatically register the
 * springSecurityFilterChain Filter for every URL in your application. If
 * Filters are added within other WebApplicationInitializer instances we can
 * use @Order to control the ordering of the Filter instances.
 */
public class MessageSecurityWebApplicationInitializer extends AbstractSecurityWebApplicationInitializer {

}
