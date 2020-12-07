package com.nosdire.Wizard101Calculatorv2.Models;

public abstract class Damage_Methods {
	public abstract void conversion(MainDamage mainDamage);
	
	//Calculate blades and debuff blade damage
	public Double charms(Double[] charms, Double damage)
	{
		for(Double single_charm: charms)
		{
			damage *= single_charm;
			damage = Math.floor(damage);
		}
		return damage;
	}
	//calculates trap and shield damage
	public Double traps(Double[] traps, Double damage)
	{
		for(int i = traps.length - 1; i >= 0; i--)
		{
			damage *= traps[i];
			damage = Math.floor(damage);
		}
		return damage;
	}
}
