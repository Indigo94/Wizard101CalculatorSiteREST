package com.nosdire.Wizard101Calculatorv2.Models;

public class MinMax extends Damage_Methods{
	Double internal_boost;
	Double internal_boost_flat;

	Double aura;
	Double[] charms;
	Double global_boost;
	Double enemy_internal_boost;
	Double[] traps;
	Double min_damage;
	Double max_damage;
	
	public Double getInternal_boost_flat() {
		return internal_boost_flat;
	}
	public void setInternal_boost_flat(Double internal_boost_flat) {
		this.internal_boost_flat = internal_boost_flat;
	}
	public Double getEnemy_internal_boost() {
		return enemy_internal_boost;
	}
	public void setEnemy_internal_boost(Double enemy_internal_boost) {
		this.enemy_internal_boost = enemy_internal_boost;
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
	public Double getGlobal_boost() {
		return global_boost;
	}
	public void setGlobal_boost(Double global_boost) {
		this.global_boost = global_boost;
	}
	public double getMin_damage() {
		return min_damage;
	}
	public void setMin_damage(double min_damage) {
		this.min_damage = min_damage;
	}
	public double getMax_damage() {
		return max_damage;
	}
	public void setMax_damage(double max_damage) {
		this.max_damage = max_damage;
	}
	public void conversion(MainDamage mainDamage)
	{
		this.internal_boost = mainDamage.internal_boost >= 1 ? 1.0 + ((double) mainDamage.internal_boost/100) : 1.0 - ((double) mainDamage.internal_boost/100);
		this.internal_boost_flat = (double) mainDamage.internal_boost_flat/1;
		this.aura = mainDamage.aura >= 1 ? 1.0 + ((double) mainDamage.aura/100) : 1.0 - ((double) mainDamage.aura/100);

		this.global_boost = mainDamage.global_boost >= 1 ? 1.0 + ((double) mainDamage.global_boost/100) : 1.0 - ((double) mainDamage.global_boost/100);
		this.enemy_internal_boost = mainDamage.enemy_internal_boost >= 1 ? 1.0 + ((double) mainDamage.enemy_internal_boost/100) : 1.0 - ((double) mainDamage.enemy_internal_boost/100);
		
		this.min_damage = mainDamage.min + 0.0;
		this.max_damage = mainDamage.max + 0.0;
		
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
	private Double[] calculate_both_damage(Double[] dam, double percentage)
	{
		dam[0] *= percentage;
		dam[1] *= percentage;
		
		dam[0] = Math.floor(dam[0]);
		dam[1] = Math.floor(dam[1]);
		return dam;
	}
	public Double[] add_flat(Double[] damage,double flat)
	{
		
		damage[0] += flat;
		damage[1] += flat;
		return damage;
	}

	public Double[] calculate_damage(MainDamage mainDamage) {
		conversion(mainDamage);
		Double[] dam = {min_damage, max_damage };
		dam = calculate_both_damage(dam,internal_boost);
		dam = add_flat(dam,internal_boost_flat);
		dam = calculate_both_damage(dam,aura);
		dam[0] = charms(charms, dam[0]);
		dam[1] = charms(charms, dam[1]);
		dam = calculate_both_damage(dam,global_boost);
		dam = calculate_both_damage(dam,enemy_internal_boost);
		dam[0] = traps(traps, dam[0]);
		dam[1] = traps(traps, dam[1]);
		return dam;
	}
//	public static void main(String[] args) {
//		MinMax minmax = new MinMax();
//		MainDamage md = new MainDamage();
//		md.setMin(100);
//		md.setMax(200);
//		md.setAura(25);
//		md.setGlobal_boost(30);
//		int[] c = { 25, 30 ,50,80,120 ,-95} ;
//		md.setCharms(c);
//		int[] d = { 75, 70 } ;
//		md.setTraps(d);
//		md.setInternal_boost(40);
//		md.setEnemy_internal_boost(0);
//		
//
//		Double[] db = minmax.calculate_damage(md);
////		Double[] db = { 100.0, 200.0 } ;
////		db = minmax.calculate_both_damage(db,1.25);
//		
//
//		System.out.println(db[0]);
//		System.out.println(db[1]);
//}
}
