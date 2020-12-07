package com.nosdire.Wizard101Calculatorv2.Repository;

import org.springframework.stereotype.Repository;

import com.nosdire.Wizard101Calculatorv2.Models.DPP;
import com.nosdire.Wizard101Calculatorv2.Models.Dot;
import com.nosdire.Wizard101Calculatorv2.Models.MainDamage;
import com.nosdire.Wizard101Calculatorv2.Models.MinMax;
import com.nosdire.Wizard101Calculatorv2.Models.Single;

@Repository
public class MainRepository {
	public Double[] calculate_min_max_damage(MainDamage maindamage)
	{
		MinMax minmax = new MinMax();
		Double[] final_damage = minmax.calculate_damage(maindamage);
		return final_damage;
	}
	public Double calculate_single_damage(MainDamage maindamage)
	{
		Single single = new Single();
		Double final_damage = single.calculate_damage(maindamage);
		return final_damage;
	}
	public Double calculate_dpp_damage(MainDamage maindamage)
	{
		DPP dpp = new DPP();
		Double final_damage = dpp.calculate_damage(maindamage);
		return final_damage;
	}
	public Double[] calculate_dot_damage(MainDamage maindamage)
	{
		Dot dot = new Dot();
		Double[] final_damage = dot.calculate_damage(maindamage);
		return final_damage;
	}
}
