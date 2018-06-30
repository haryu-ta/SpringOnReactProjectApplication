package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/*
 *  MVCコントローラー
 */

@Controller
public class MVCController {

	/*
	 *  http://localhost:8080/
	 *  ＠para なし
     *  ＠return 遷移先ページ名 
	 */
	@RequestMapping(value="/")
	public String hello(Model model) {
		
		model.addAttribute("horsename", "ディープインパクト");
		model.addAttribute("stable", "池江");
		return "index";
		
	}
	

}
