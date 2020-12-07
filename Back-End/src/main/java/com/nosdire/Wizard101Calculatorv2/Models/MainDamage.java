package com.nosdire.Wizard101Calculatorv2.Models;

public class MainDamage {
	int min;
	int max;
	
	int single_damage;
	
	int pip_damage;
	int pip_count;
	int enchantment;
	
	int aot_damage;
	int aot_over_time;
	
	int aura;
	double[] charms;
	int global_boost;
	double[] traps;
	int internal_boost;
	int internal_boost_flat;
	int enemy_internal_boost;
	
	
	public int getEnchantment() {
		return enchantment;
	}
	public void setEnchantment(int enchantment) {
		this.enchantment = enchantment;
	}
	public int getInternal_boost_flat() {
		return internal_boost_flat;
	}
	public void setInternal_boost_flat(int internal_boost_flat) {
		this.internal_boost_flat = internal_boost_flat;
	}
	public int getEnemy_internal_boost() {
		return enemy_internal_boost;
	}
	public void setEnemy_internal_boost(int enemy_internal_boost) {
		this.enemy_internal_boost = enemy_internal_boost;
	}
	public int getMin() {
		return min;
	}
	public void setMin(int min) {
		this.min = min;
	}
	public int getMax() {
		return max;
	}
	public void setMax(int max) {
		this.max = max;
	}
	public int getSingle_damage() {
		return single_damage;
	}
	public void setSingle_damage(int single_damage) {
		this.single_damage = single_damage;
	}
	public int getPip_damage() {
		return pip_damage;
	}
	public void setPip_damage(int pip_damage) {
		this.pip_damage = pip_damage;
	}
	public int getPip_count() {
		return pip_count;
	}
	public void setPip_count(int pip_count) {
		this.pip_count = pip_count;
	}
	public int getAot_damage() {
		return aot_damage;
	}
	public void setAot_damage(int aot_damage) {
		this.aot_damage = aot_damage;
	}
	public int getAot_over_time() {
		return aot_over_time;
	}
	public void setAot_over_time(int aot_over_time) {
		this.aot_over_time = aot_over_time;
	}
	public int getAura() {
		return aura;
	}
	public void setAura(int aura) {
		this.aura = aura;
	}
	public double[] getCharms() {
		return charms;
	}
	public void setCharms(double[] charms) {
		this.charms = charms;
	}
	public int getGlobal_boost() {
		return global_boost;
	}
	public void setGlobal_boost(int global_boost) {
		this.global_boost = global_boost;
	}
	public double[] getTraps() {
		return traps;
	}
	public void setTraps(double[] traps) {
		this.traps = traps;
	}
	public int getInternal_boost() {
		return internal_boost;
	}
	public void setInternal_boost(int internal_boost) {
		this.internal_boost = internal_boost;
	}
	
	
	
}
