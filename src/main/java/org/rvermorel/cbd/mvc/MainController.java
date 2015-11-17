package org.rvermorel.cbd.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/")
public class MainController {

	@RequestMapping(method=RequestMethod.GET)
    public String front(Model model)
    {
        return "front";
    }
	
	@RequestMapping(value="/back",method=RequestMethod.GET)
    public String back(Model model)
    {
        return "back";
    }
	
}
