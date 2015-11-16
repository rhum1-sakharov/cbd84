package org.rvermorel.cbd.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/")
public class MainController {

	@RequestMapping(method=RequestMethod.GET)
    public String displaySortedMembers(Model model)
    {
//        model.addAttribute("newMember", new Member());
//        model.addAttribute("members", memberDao.findAllOrderedByName());
        return "index";
    }
	
}
