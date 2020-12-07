package com.nosdire.Wizard101Calculatorv2.Controllers;

import java.awt.PageAttributes.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nosdire.Wizard101Calculatorv2.Models.MainDamage;
import com.nosdire.Wizard101Calculatorv2.Models.MinMax;
import com.nosdire.Wizard101Calculatorv2.Models.Returning_Damage;
import com.nosdire.Wizard101Calculatorv2.Models.Test;
import com.nosdire.Wizard101Calculatorv2.Service.MainService;

@CrossOrigin("*")
@RequestMapping("/calculate")
@RestController
public class DamageController {
	@Autowired
	MainService service;
	
	@PostMapping(value="/minmax", consumes = "application/json", produces="application/json")
	@ResponseBody
	public Returning_Damage calculate_minmax_damage(@RequestBody MainDamage maindamage)
	{
		Double[] toRet = service.calculate_min_max_damage(maindamage);
		Returning_Damage rd = new Returning_Damage();
		rd.setMin_damage(toRet[0]);
		rd.setMax_damage(toRet[1]);
		return rd;
	}
	@PostMapping(value="/single", consumes = "application/json", produces="application/json")
	@ResponseBody
	public Returning_Damage calculate_single_damage(@RequestBody MainDamage maindamage)
	{
		Double toRet = service.calculate_single_damage(maindamage);
		Returning_Damage rd = new Returning_Damage();
		rd.setSingle_damage(toRet);
		return rd;
	}
	@PostMapping(value="/pip", consumes = "application/json", produces="application/json")
	@ResponseBody
	public Returning_Damage calculate_dpp_damage(@RequestBody MainDamage maindamage)
	{
		Double toRet = service.calculate_dpp_damage(maindamage);
		Returning_Damage rd = new Returning_Damage();
		rd.setDpp(toRet);
		return rd;
	}
	@PostMapping(value="/aot", consumes = "application/json", produces="application/json")
	@ResponseBody
	public Returning_Damage calculate_dot_damage(@RequestBody MainDamage maindamage)
	{
		Double[] toRet = service.calculate_dot_damage(maindamage);
		Returning_Damage rd = new Returning_Damage();
		rd.setInitial(toRet[0]);
		rd.setAot(toRet[1]);
		return rd;
	}
//	@PostMapping(value="/test", consumes = "application/json", produces="application/json")
//	@ResponseBody
//	public Returning_Damage test(@RequestBody MainDamage maindamage)
//	{
//		Returning_Damage rd = new Returning_Damage();
//		rd.setMin_damage(maindamage.getMin());
//		rd.setMax_damage(maindamage.getMax());
//		return rd;
//	}
}
