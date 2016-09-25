package org.rvermorel.cbd.mvc;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/")
public class MainController {

	@RequestMapping( method=RequestMethod.GET)
    public String front(Model model)
    {
        return "front";
    }
	
	@RequestMapping(value="/googlea5c11d40c1d19167.html", method=RequestMethod.GET)
    public String googleTracking(Model model)
    {
        return "googlea5c11d40c1d19167";
    }
	
	@RequestMapping(value="/sitemap.xml", method=RequestMethod.GET)
    public String sitemap(Model model)
    {
        return "sitemap";
    }
	
	@RequestMapping(value="/login",method=RequestMethod.GET)
    public String loginGet(Model model)
    {
        return "login";
    }



	@RequestMapping(value="/back",method=RequestMethod.GET)
	public String back(Model model)
	{
		return "back";
	}
	
	 @RequestMapping(value = "/accessDenied", method = RequestMethod.GET)
	    public String accessDeniedPage(ModelMap model) {
	        model.addAttribute("user", getPrincipal());
	        return "accessDenied";
	    }
	     
	    private String getPrincipal(){
	        String userName = null;
	        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	 
	        if (principal instanceof UserDetails) {
	            userName = ((UserDetails)principal).getUsername();
	        } else {
	            userName = principal.toString();
	        }
	        return userName;
	    }
	
}
