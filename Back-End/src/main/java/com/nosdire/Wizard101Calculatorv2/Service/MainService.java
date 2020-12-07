package com.nosdire.Wizard101Calculatorv2.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nosdire.Wizard101Calculatorv2.Models.MainDamage;
import com.nosdire.Wizard101Calculatorv2.Models.MinMax;
import com.nosdire.Wizard101Calculatorv2.Repository.MainRepository;

@Service
public class MainService {
	@Autowired
	MainRepository repository;
	
	public Double[] calculate_min_max_damage(MainDamage maindamage)
	{
		Double[] toRet = repository.calculate_min_max_damage(maindamage);
		return toRet;
	}
	public Double calculate_single_damage(MainDamage maindamage)
	{
		Double toRet = repository.calculate_single_damage(maindamage);
		return toRet;
	}
	public Double calculate_dpp_damage(MainDamage maindamage)
	{
		Double toRet = repository.calculate_dpp_damage(maindamage);
		return toRet;
	}
	public Double[] calculate_dot_damage(MainDamage maindamage)
	{
		Double[] toRet = repository.calculate_dot_damage(maindamage);
		return toRet;
	}
}
