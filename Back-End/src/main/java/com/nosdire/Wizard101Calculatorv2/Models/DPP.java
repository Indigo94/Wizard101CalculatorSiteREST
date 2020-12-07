package com.nosdire.Wizard101Calculatorv2.Models;

public class DPP extends Damage_Methods{
	Double internal_boost;
	Double internal_boost_flat;
	Double aura;
	Double[] charms;
	Double global_boost;
	Double enemy_internal_boost;
	Double[] traps;
	Double pip_damage;
	Double pip_count;
	Double enchantment;
	
	
	
	public Double getEnchantment() {
		return enchantment;
	}
	public void setEnchantment(Double enchantment) {
		this.enchantment = enchantment;
	}
	public Double getInternal_boost() {
		return internal_boost;
	}
	public void setInternal_boost(Double internal_boost) {
		this.internal_boost = internal_boost;
	}
	public Double getAura() {
		return aura;
	}
	public void setAura(Double aura) {
		this.aura = aura;
	}
	public Double[] getCharms() {
		return charms;
	}
	public void setCharms(Double[] charms) {
		this.charms = charms;
	}
	public Double getGlobal_boost() {
		return global_boost;
	}
	public void setGlobal_boost(Double global_boost) {
		this.global_boost = global_boost;
	}
	public Double getEnemy_internal_boost() {
		return enemy_internal_boost;
	}
	public void setEnemy_internal_boost(Double enemy_internal_boost) {
		this.enemy_internal_boost = enemy_internal_boost;
	}
	public Double[] getTraps() {
		return traps;
	}
	public void setTraps(Double[] traps) {
		this.traps = traps;
	}
	public Double getPip_damage() {
		return pip_damage;
	}
	public void setPip_damage(Double pip_damage) {
		this.pip_damage = pip_damage;
	}
	public Double getPip_count() {
		return pip_count;
	}
	public void setPip_count(Double pip_count) {
		this.pip_count = pip_count;
	}
	
	@Override
	public void conversion(MainDamage mainDamage) {
		this.internal_boost = mainDamage.internal_boost >= 1 ? 1.0 + ((double) mainDamage.internal_boost/100) : 1.0 - ((double) mainDamage.internal_boost/100);
		this.internal_boost_flat = (double) mainDamage.internal_boost_flat/1;
		this.aura = mainDamage.aura >= 1 ? 1.0 + ((double) mainDamage.aura/100) : 1.0 - ((double) mainDamage.aura/100);
		
		this.global_boost = mainDamage.global_boost >= 1 ? 1.0 + ((double) mainDamage.global_boost/100) : 1.0 - ((double) mainDamage.global_boost/100);
		this.enemy_internal_boost = mainDamage.enemy_internal_boost >= 1 ? 1.0 + ((double) mainDamage.enemy_internal_boost/100) : 1.0 - ((double) mainDamage.enemy_internal_boost/100);
		
		this.pip_damage = mainDamage.pip_damage + 0.0;
		this.pip_count = mainDamage.pip_count + 0.0;
		this.enchantment = mainDamage.enchantment + 0.0;
		
		this.pip_damage *= this.pip_count;
		this.pip_damage += this.enchantment;
		
		this.charms = new Double[mainDamage.charms.length];
		for(int i = 0; i < mainDamage.charms.length;i++)
		{
//			this.charms[i] = mainDamage.charms[i] >= 0?  1.0 + ((double) mainDamage.charms[i]/100): 1.0 + ((double)mainDamage.charms[i]/100);
			this.charms[i] = mainDamage.charms[i];
		}
		
		this.traps = new Double[mainDamage.traps.length];
		for(int i = mainDamage.traps.length - 1; i >= 0; i--)
		{
//			this.traps[i] = mainDamage.traps[i] >= 0? 1.0 + ((double) mainDamage.traps[i]/100): 1.0 + ((double)mainDamage.traps[i]/100);
			this.traps[i] = mainDamage.traps[i];
		}
		
	}
	private Double calculate_both_damage(Double dam, double percentage)
	{
		dam *= percentage;
		
		dam = Math.floor(dam);
		return dam;
	}
	public Double add_flat(Double damage,double flat)
	{
		
		damage += flat;
		return damage;
	}

	public Double calculate_damage(MainDamage mainDamage) {
		conversion(mainDamage);
		Double dam = pip_damage;
		dam = calculate_both_damage(dam,internal_boost);
		dam = add_flat(dam,internal_boost_flat);
		dam = calculate_both_damage(dam,aura);
		dam = charms(charms, dam);
		dam = calculate_both_damage(dam,global_boost);
		dam = calculate_both_damage(dam,enemy_internal_boost);
		dam = traps(traps, dam);
		return dam;
	}
	
	
}
