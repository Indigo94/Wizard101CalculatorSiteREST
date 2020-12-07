package com.nosdire.Wizard101Calculatorv2;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.nosdire.Wizard101Calculatorv2.Controllers.DamageController;
import com.nosdire.Wizard101Calculatorv2.Models.MinMax;

@SpringBootTest
class Wizard101Calculatorv2ApplicationTests {
	@Autowired
	DamageController dc;
	
	@Test
	void test1() {
		MinMax minmax = new MinMax();
		minmax.setAura(1.0);
		minmax.setCharms(new int[0]);
		minmax.setGlobal_boost(1.0);
		minmax.setInternal_boost(1.0);
		minmax.setMax_damage(125);
		minmax.setMin_damage(100);
		minmax.setTraps(new int[0]);
		minmax.setEnemy_internal_boost(1.0);
		Double[] db = {100.0,125.0};
		
		assertEquals(db,dc.calculate_minmax_damage(minmax));
	}

}
