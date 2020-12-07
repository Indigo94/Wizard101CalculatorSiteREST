
var blade_counter = 0;
var trap_counter = 0;
var blades_id = [];
var traps_id = [];
var blades = [];
var traps = [];
var school_boost = "";
var school_flat = "";
var personal_aura = "";
var global_aura = "";
var enemy_boost = "";

function select_school_boost() {
    switch (document.getElementById("card_type_selector").value) {
        case "fire":
            if (document.getElementById("fire_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("fire_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("fire_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("fire_flat_boost").value;
            }
            break;
        case "storm":
            if (document.getElementById("storm_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("storm_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("storm_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("storm_flat_boost").value;
            }
            break;
        case "ice":
            if (document.getElementById("ice_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("ice_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("ice_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("ice_flat_boost").value;
            }
            break;
        case "death":
            if (document.getElementById("death_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("death_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("death_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("death_flat_boost").value;
            }
            break;
        case "myth":
            if (document.getElementById("myth_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("myth_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("myth_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("myth_flat_boost").value;
            }
            break;
        case "balance":
            if (document.getElementById("balance_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("balance_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("balance_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("balance_flat_boost").value;
            }
            break;
        case "life":
            if (document.getElementById("life_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("life_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("life_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("life_flat_boost").value;
            }
            break;
        case "shadow":
            if (document.getElementById("shadow_percentage_boost").value == "") {
                school_boost = 1.0;
            }
            else {
                school_boost = (document.getElementById("shadow_percentage_boost").value) / 100;
                school_boost += 1;
            }
            if (document.getElementById("shadow_flat_boost").value == "") {
                school_flat = 0;
            }
            else {
                school_flat = document.getElementById("shadow_flat_boost").value;
            }
            break;
    }
}
function remove_blade(id_value) {
    var ul = document.getElementById("blades_list");
    var re = document.getElementById(id_value);
    ul.removeChild(re);
    blades[id_value.charAt(id_value.length - 1)] = 1.0;
}
function remove_trap(id_value) {
    var ul = document.getElementById("traps_list");
    var re = document.getElementById(id_value);
    ul.removeChild(re);
    traps[id_value.charAt(id_value.length - 1)] = 1.0;
}
function printHello(id_value) {
    console.log(id_value)
    // console.log(document.getElementById("blades_list"))
}
function add_blades() {

    let current_blade = document.getElementById('blade_boost').value;
    blades.push(1 + current_blade / 100);
    var ul = document.getElementById("blades_list");
    var li = document.createElement("li");
    if (current_blade < 0) {
        li.appendChild(document.createTextNode(current_blade + "%"));
    }
    else if (current_blade >= 0) {
        li.appendChild(document.createTextNode("+" + current_blade + "%"));
    }
    li.setAttribute("id", "blade" + blade_counter); // added line
    blades_id.push("blade" + blade_counter);
    li.setAttribute("class", "list-group-item list-group-item-action");
    li.setAttribute("onClick", "remove_blade(" + "'blade" + blade_counter + "')")
    ul.appendChild(li);
    blade_counter += 1;
}

function add_traps() {
    let current_trap = document.getElementById('trap_boost').value;
    traps.push(1 + current_trap / 100);

    var ul = document.getElementById("traps_list");
    var li = document.createElement("li");

    if (current_trap < 0) {
        li.appendChild(document.createTextNode(current_trap + "%"));
    }
    else if (current_trap >= 0) {
        li.appendChild(document.createTextNode("+" + current_trap + "%"));
    }

    // li.appendChild(document.createTextNode("+" + current_trap + "%"));
    li.setAttribute("id", "trap" + trap_counter); // added line
    traps_id.push("trap" + trap_counter)
    li.setAttribute("class", "list-group-item list-group-item-action")
    li.setAttribute("onClick", "remove_trap(" + "'trap" + trap_counter + "')")
    ul.appendChild(li);

    trap_counter += 1;
}

function removeBlades() {
    for (let i = 0; i < blades_id.length; i++) {
        var element = document.getElementById(blades_id[i]);
        element.parentNode.removeChild(element);
    }
    blades = [];
    blades_id = [];

}
function removeTraps() {
    for (let i = 0; i < traps_id.length; i++) {
        var element = document.getElementById(traps_id[i]);
        element.parentNode.removeChild(element);
    }
    traps_id = [];
    traps = [];

}
function calculateDamage() {
    var card_damage_min = document.getElementById('card_damage_min').value;
    var card_damage_max = document.getElementById('card_damage_max').value;
    select_school_boost();
    card_damage_min = calculate_card_damage(card_damage_min);
    card_damage_max = calculate_card_damage(card_damage_max);

    document.getElementById('min_damage').value = card_damage_min;
    document.getElementById('max_damage').value = card_damage_max;
    document.getElementById('critical_minimum').value = card_damage_min * 2;
    document.getElementById('critical_maximum').value = card_damage_max * 2;
}
function calculate_damage_single() {
    var card_damage = document.getElementById('card_damage').value;
    card_damage = calculate_card_damage(card_damage);

    //return final values to card damage inputs 
    document.getElementById('damage').value = card_damage;
    document.getElementById('critical').value = card_damage * 2;
}

function calculate_damage_single_pip() {
    var card_damage = document.getElementById('card_damage').value;
    card_damage = card_damage / 1;
    let pip_count = document.getElementById('pip_count').value;
    if (pip_count == "") {
        pip_count = 0;
    }
    card_damage *= pip_count;
    card_damage = calculate_card_damage(card_damage);

    //return final values to card damage inputs 
    document.getElementById('damage').value = Math.floor(card_damage);
    document.getElementById('critical').value = Math.floor(card_damage * 2);
}

function calculate_damage_over_time() {
    var initial_damage = document.getElementById('initial_damage').value;
    var over_time_damage = document.getElementById('over_time_damage').value;

    initial_damage = calculate_card_damage(initial_damage);
    over_time_damage = calculate_card_damage(over_time_damage);

    //return final values to card damage inputs 
    document.getElementById('init_ending_damage').value = initial_damage;
    document.getElementById('over_time_ending_damage').value = (over_time_damage / 3)
    document.getElementById('critical_initial').value = initial_damage * 2;
    document.getElementById('critical_spread').value = (over_time_damage / 3) * 2;
}
function calculate_card_damage(card_value) {
    select_school_boost();
    //Multiplying by wizard percentage boost
    card_value *= school_boost;
    card_value = Math.floor(card_value);

    //Adding wizard flat boost
    card_value += parseInt(school_flat, 10);

    //personal Aura
    let personal_aura = document.getElementById('aura_damage').value / 100;
    personal_aura += 1;
    card_value *= personal_aura;
    card_value = Math.floor(card_value);

    //Blades
    //37384
    for (let i = 0; i < blades.length; i++) {
        card_value *= blades[i];
        card_value = Math.floor(card_value);

    }

    //global Aura
    let global_aura = document.getElementById('global_aura').value / 100;
    global_aura += 1;
    card_value *= global_aura;
    card_value = Math.floor(card_value);

    // get personal boost and global boost into calculations
    // for (let i = 0; i < traps.length; i++) {
    //     card_value *= traps[i];
    //     card_value = Math.floor(card_value);
    // }
    for (let i = traps.length - 1; i >= 0; i--) {
        card_value *= traps[i];
        card_value = Math.floor(card_value);
    }

    //multiply damage by enemy boost
    let enemy_boost = document.getElementById('enemy_boost').value / 100;
    enemy_boost += 1;
    card_value *= enemy_boost;
    card_value = Math.floor(card_value);

    return card_value;
}
function toggle() {
    document.getElementById("school_selector").className = "d-none";
    let table_val = "d-table-row table-success";
    let table_value_none = "d-none table-success";
    let table_end = "d-table-row table-warning";
    let table_crit_end = "d-table-row table-danger";
    switch (document.getElementById("damage_type_selector").value) {
        case "minmax":
            {
                document.getElementById("class_reg_min").className = table_val;
                document.getElementById("class_reg_max").className = table_val;
                document.getElementById("class_single_damage").className = table_value_none;
                document.getElementById("class_pip_damage").className = table_value_none;
                document.getElementById("class_pip_pips").className = table_value_none;
                document.getElementById("class_area_damage").className = table_value_none;
                document.getElementById("class_area_over").className = table_value_none;

                document.getElementById("class_reg_1").className = table_end;
                document.getElementById("class_reg_2").className = table_end;
                document.getElementById("class_reg_3").className = table_crit_end;
                document.getElementById("class_reg_4").className = table_crit_end;

                document.getElementById("class_single_1").className = "d-none";
                document.getElementById("class_single_2").className = "d-none";

                document.getElementById("class_pip_1").className = "d-none";
                document.getElementById("class_pip_2").className = "d-none";

                document.getElementById("class_doa_1").className = "d-none";
                document.getElementById("class_doa_2").className = "d-none";
                document.getElementById("class_doa_3").className = "d-none";
                document.getElementById("class_doa_4").className = "d-none";

                document.getElementById("global_aura").value = "";
                document.getElementById("aura_damage").value = "";
                document.getElementById("blade_boost").value = "";
                document.getElementById("trap_boost").value = "";
                document.getElementById("enemy_boost").value = "";
                removeBlades();
                removeTraps();
                break;
            }
        case "single":
            {
                document.getElementById("class_reg_min").className = table_value_none;
                document.getElementById("class_reg_max").className = table_value_none;
                document.getElementById("class_single_damage").className = table_val;
                document.getElementById("class_pip_damage").className = table_value_none;
                document.getElementById("class_pip_pips").className = table_value_none;
                document.getElementById("class_area_damage").className = table_value_none;
                document.getElementById("class_area_over").className = table_value_none;

                document.getElementById("class_reg_1").className = "d-none";
                document.getElementById("class_reg_2").className = "d-none";
                document.getElementById("class_reg_3").className = "d-none";
                document.getElementById("class_reg_4").className = "d-none";

                document.getElementById("class_single_1").className = table_end;
                document.getElementById("class_single_2").className = table_crit_end;

                document.getElementById("class_pip_1").className = "d-none";
                document.getElementById("class_pip_2").className = "d-none";

                document.getElementById("class_doa_1").className = "d-none";
                document.getElementById("class_doa_2").className = "d-none";
                document.getElementById("class_doa_3").className = "d-none";
                document.getElementById("class_doa_4").className = "d-none";

                document.getElementById("global_aura").value = "";
                document.getElementById("aura_damage").value = "";
                document.getElementById("blade_boost").value = "";
                document.getElementById("trap_boost").value = "";
                document.getElementById("enemy_boost").value = "";
                removeBlades();
                removeTraps();
                break;
            }
        case "pip":
            {
                document.getElementById("class_reg_min").className = table_value_none;
                document.getElementById("class_reg_max").className = table_value_none;
                document.getElementById("class_single_damage").className = table_value_none;
                document.getElementById("class_pip_damage").className = table_val;
                document.getElementById("class_pip_pips").className = table_val;
                document.getElementById("class_area_damage").className = table_value_none;
                document.getElementById("class_area_over").className = table_value_none;

                document.getElementById("class_reg_1").className = "d-none";
                document.getElementById("class_reg_2").className = "d-none";
                document.getElementById("class_reg_3").className = "d-none";
                document.getElementById("class_reg_4").className = "d-none";

                document.getElementById("class_single_1").className = "d-none";
                document.getElementById("class_single_2").className = "d-none";

                document.getElementById("class_pip_1").className = table_end;
                document.getElementById("class_pip_2").className = table_crit_end;

                document.getElementById("class_doa_1").className = "d-none";
                document.getElementById("class_doa_2").className = "d-none";
                document.getElementById("class_doa_3").className = "d-none";
                document.getElementById("class_doa_4").className = "d-none";

                document.getElementById("global_aura").value = "";
                document.getElementById("aura_damage").value = "";
                document.getElementById("blade_boost").value = "";
                document.getElementById("trap_boost").value = "";
                document.getElementById("enemy_boost").value = "";
                removeBlades();
                removeTraps();
                break;
            }
        case "round":
            {
                document.getElementById("class_reg_min").className = table_value_none;
                document.getElementById("class_reg_max").className = table_value_none;
                document.getElementById("class_single_damage").className = table_value_none;
                document.getElementById("class_pip_damage").className = table_value_none;
                document.getElementById("class_pip_pips").className = table_value_none;
                document.getElementById("class_area_damage").className = table_val;
                document.getElementById("class_area_over").className = table_val;

                document.getElementById("class_reg_1").className = "d-none";
                document.getElementById("class_reg_2").className = "d-none";
                document.getElementById("class_reg_3").className = "d-none";
                document.getElementById("class_reg_4").className = "d-none";

                document.getElementById("class_single_1").className = "d-none";
                document.getElementById("class_single_2").className = "d-none";

                document.getElementById("class_pip_1").className = "d-none";
                document.getElementById("class_pip_2").className = "d-none";

                document.getElementById("class_doa_1").className = table_end;
                document.getElementById("class_doa_2").className = table_end;
                document.getElementById("class_doa_3").className = table_crit_end;
                document.getElementById("class_doa_4").className = table_crit_end;

                document.getElementById("global_aura").value = "";
                document.getElementById("aura_damage").value = "";
                document.getElementById("blade_boost").value = "";
                document.getElementById("trap_boost").value = "";
                document.getElementById("enemy_boost").value = "";
                removeBlades();
                removeTraps();
                break;
            }
    }
}
function test() {
    var cont = document.getElementById('sample').className;
    console.log(cont);
    if (cont == 'd-table-row') {
        document.getElementById("sample").classList.remove('d-table-row');
        document.getElementById("sample").classList.add('d-none');
    }
    else {
        document.getElementById("sample").classList.remove('d-none');
        document.getElementById("sample").classList.add('d-table-row');
    }
}
function entry() {

    switch (document.getElementById("damage_type_selector").value) {
        case "minmax":
            {
                // calculate_card_damage_basic_min_max()
                java_calculate_damage_min_max();
                break;
            }
        case "single":
            {
                java_calculate_damage_single()
                break;
            }
        case "pip":
            {
                java_calculate_damage_dpp()
                break;
            }
        case "round":
            {
                calculate_card_damage_basic_area()
                break;
            }
    }
}
// Calculating damage without school boost table
function calculate_card_damage_basic(card_value) {
    if (document.getElementById("wizard_boost").value == "") {
        school_boost = 1.0;
    }
    else {
        school_boost = (document.getElementById("wizard_boost").value) / 100;
        school_boost += 1;
    }
    if (document.getElementById("wizard_flat").value == "") {
        school_flat = 0.0;
    }
    else {
        school_flat = (document.getElementById("wizard_flat").value);
    }

    //making sure card_value is a number
    card_value *= 1;
    //Multiplying by wizard percentage boost
    card_value *= school_boost;
    card_value = Math.floor(card_value);

    //Adding wizard flat boost
    card_value += parseInt(school_flat, 10);

    //personal Aura
    let personal_aura = document.getElementById('aura_damage').value / 100;
    personal_aura += 1;

    card_value *= personal_aura;
    card_value = Math.floor(card_value);

    //blades

    for (let i = 0; i < blades.length; i++) {
        card_value *= blades[i];
        card_value = Math.floor(card_value);

    }


    //global Aura
    let global_aura = document.getElementById('global_aura').value / 100;
    global_aura += 1;
    card_value *= global_aura;
    card_value = Math.floor(card_value);

    // traos
    // for (let i = 0; i < traps.length; i++) {
    //     card_value *= traps[i];
    //     card_value = Math.floor(card_value);
    // }
    for (let i = traps.length - 1; i >= 0; i--) {
        card_value *= traps[i];
        card_value = Math.floor(card_value);
    }



    //multiply damage by enemy boost
    let enemy_boost = document.getElementById('enemy_boost').value / 100;
    enemy_boost += 1;
    card_value *= enemy_boost;
    card_value = Math.floor(card_value);

    return card_value;
}
// Calculating damage for cards that have a min damage and max damage
function calculate_card_damage_basic_min_max() {
    var card_damage_min = document.getElementById('reg_card_damage_min').value;
    var card_damage_max = document.getElementById('reg_card_damage_max').value;
    card_damage_min = calculate_card_damage_basic(card_damage_min);
    card_damage_max = calculate_card_damage_basic(card_damage_max);
    document.getElementById('minmax_min_damage').value = card_damage_min;
    document.getElementById('minmax_max_damage').value = card_damage_max;
    document.getElementById('minmax_critical_minimum').value = card_damage_min * 2;
    document.getElementById('minmax_critical_maximum').value = card_damage_max * 2;
}
function calculate_card_damage_basic_single() {
    var card_damage = document.getElementById('single_card_damage').value;
    card_damage = calculate_card_damage_basic(card_damage);

    //return final values to card damage inputs 
    document.getElementById('single_damage').value = card_damage;
    document.getElementById('single_critical').value = card_damage * 2;
}
function calculate_card_damage_basic_pip() {
    var card_damage = document.getElementById('pip_card_damage').value;
    card_damage = card_damage / 1;
    let enchantment_value = document.getElementById('pip_card_enchantment').value;
    if (enchantment_value == "") {
        enchantment_value = 0;
    }
    enchantment_value = enchantment_value / 1;
    card_damage += enchantment_value;
    card_damage = calculate_card_damage_basic_special(card_damage);

    //return final values to card damage inputs 
    document.getElementById('pip_damage').value = Math.floor(card_damage);
    document.getElementById('pip_critical').value = Math.floor(card_damage * 2);
}
function calculate_card_damage_basic_area() {
    var initial_damage = document.getElementById('area_init_damage').value;
    var over_time_damage = document.getElementById('area_over_time_damage').value;

    initial_damage = calculate_card_damage_basic(initial_damage);
    over_time_damage = calculate_card_damage_basic(over_time_damage);

    //return final values to card damage inputs 
    document.getElementById('area_initial_damage').value = initial_damage;
    document.getElementById('area_time').value = Math.floor((over_time_damage / 3))
    document.getElementById('area_ending_initial_damage').value = initial_damage * 2;
    document.getElementById('area_ending_critical_dot').value = Math.floor((over_time_damage / 3)) * 2;
}


function calculate_card_damage_basic_special(card_value) {
    if (document.getElementById("wizard_boost").value == "") {
        school_boost = 1.0;
    }
    else {
        school_boost = (document.getElementById("wizard_boost").value) / 100;
        school_boost += 1;
    }
    if (document.getElementById("wizard_flat").value == "") {
        school_flat = 0.0;
    }
    else {
        school_flat = (document.getElementById("wizard_flat").value);
    }

    let pip_count = document.getElementById('pip_count').value;
    if (pip_count == "") {
        pip_count = 0;
    }
    card_value *= pip_count;
    //making sure card_value is a number
    card_value *= 1;
    //Multiplying by wizard percentage boost
    card_value *= school_boost;
    card_value = Math.floor(card_value);
    //Adding wizard flat boost
    card_value += parseInt(school_flat, 10);

    //personal Aura
    let personal_aura = document.getElementById('aura_damage').value / 100;
    personal_aura += 1;

    card_value *= personal_aura;
    card_value = Math.floor(card_value);

    //blades
    for (let i = 0; i < blades.length; i++) {
        card_value *= blades[i];
        card_value = Math.floor(card_value);
    }


    //global Aura
    let global_aura = document.getElementById('global_aura').value / 100;
    global_aura += 1;
    card_value *= global_aura;
    card_value = Math.floor(card_value);

    // traos
    // for (let i = 0; i < traps.length; i++) {
    //     card_value *= traps[i];
    //     card_value = Math.floor(card_value);
    // }
    for (let i = traps.length - 1; i >= 0; i--) {
        card_value *= traps[i];
        card_value = Math.floor(card_value);
    }



    //multiply damage by enemy boost
    let enemy_boost = document.getElementById('enemy_boost').value / 100;
    enemy_boost += 1;
    card_value *= enemy_boost;
    card_value = Math.floor(card_value);

    return card_value;
}

// "min" : 100,
// "max" : 200, 

// "single_damage" : null,

// "pip_damage" : null,
// "pip_count" : null,

// "aot_damage" : null,
// "aot_over_time" : null,

//  "aura" : 25,
//  "charms" : [25, 25],
//  "global_boost" : 40,
//  "traps" : [25,25],
//  "internal_boost" : 40,
//  "enemy_internal_boost" : 0



var obj;
async function java_calculate_damage_min_max(){
    let url = "http://localhost:8080/wizcalculator/calculate/minmax/";
    let min_damage = document.getElementById('reg_card_damage_min').value;
    let max_damage = document.getElementById('reg_card_damage_max').value;

    let aura = document.getElementById('aura_damage').value;
    let charms = blades;
    let global_boost = document.getElementById('global_aura').value;
    // let traps = traps;
    let internal_boost = document.getElementById("wizard_boost").value;
    let enemy_internal_boost = document.getElementById('enemy_boost').value;
    let internal_boost_flat = document.getElementById('wizard_flat').value;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "min" : min_damage,
            "max" : max_damage,

            "aura" : aura,
            "charms" : charms,
            "global_boost" : global_boost,
            "traps" : traps,
            "internal_boost" : internal_boost,
            "enemy_internal_boost" : enemy_internal_boost,
            "internal_boost_flat" : internal_boost_flat
        })
    }).then(res => res.json())
    .then(data => obj = data)
document.getElementById('minmax_min_damage').value = obj['min_damage'];
document.getElementById('minmax_max_damage').value = obj['max_damage'];
document.getElementById('minmax_critical_minimum').value = obj['min_damage'] * 2;
document.getElementById('minmax_critical_maximum').value = obj['max_damage'] * 2;
}

async function java_calculate_damage_single(){
    let url = "http://localhost:8080/wizcalculator/calculate/single/";
    let single_damage = document.getElementById('single_card_damage').value;

    let aura = document.getElementById('aura_damage').value;
    let charms = blades;
    let global_boost = document.getElementById('global_aura').value;
    // let traps = traps;
    let internal_boost = document.getElementById("wizard_boost").value;
    let enemy_internal_boost = document.getElementById('enemy_boost').value;
    let internal_boost_flat = document.getElementById('wizard_flat').value;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "single_damage" : single_damage,

            "aura" : aura,
            "charms" : charms,
            "global_boost" : global_boost,
            "traps" : traps,
            "internal_boost" : internal_boost,
            "enemy_internal_boost" : enemy_internal_boost,
            "internal_boost_flat" : internal_boost_flat
        })
    }).then(res => res.json())
    .then(data => obj = data)
document.getElementById('single_damage').value = obj['single_damage'];
document.getElementById('single_critical').value = obj['single_damage'] * 2;
}
async function java_calculate_damage_dpp(){
    let url = "http://localhost:8080/wizcalculator/calculate/pip/";
    let pip_card_damage = document.getElementById('pip_card_damage').value;
    let total_pips = document.getElementById('pip_count').value;
    let enchantment = document.getElementById('pip_card_enchantment').value;

    let aura = document.getElementById('aura_damage').value;
    let charms = blades;
    let global_boost = document.getElementById('global_aura').value;
    // let traps = traps;
    let internal_boost = document.getElementById("wizard_boost").value;
    let enemy_internal_boost = document.getElementById('enemy_boost').value;
    let internal_boost_flat = document.getElementById('wizard_flat').value;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "pip_damage" : pip_card_damage,
            "pip_count" : total_pips,
            "enchantment" : enchantment,

            "aura" : aura,
            "charms" : charms,
            "global_boost" : global_boost,
            "traps" : traps,
            "internal_boost" : internal_boost,
            "enemy_internal_boost" : enemy_internal_boost,
            "internal_boost_flat" : internal_boost_flat
        })
    }).then(res => res.json())
    .then(data => obj = data)
document.getElementById('pip_damage').value = obj['dpp'];
document.getElementById('pip_critical').value = obj['dpp'] * 2;
}
async function java_calculate_damage_aot(){
    let url = "http://localhost:8080/wizcalculator/calculate/aot/";
    let init_damage = document.getElementById('area_init_damage').value;
    let area_time = document.getElementById('area_over_time_damage').value;

    let aura = document.getElementById('aura_damage').value;
    let charms = blades;
    let global_boost = document.getElementById('global_aura').value;
    // let traps = traps;
    let internal_boost = document.getElementById("wizard_boost").value;
    let enemy_internal_boost = document.getElementById('enemy_boost').value;
    let internal_boost_flat = document.getElementById('wizard_flat').value;

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "aot_damage" : init_damage,
            "aot_over_time" : area_time,

            "aura" : aura,
            "charms" : charms,
            "global_boost" : global_boost,
            "traps" : traps,
            "internal_boost" : internal_boost,
            "enemy_internal_boost" : enemy_internal_boost,
            "internal_boost_flat" : internal_boost_flat
        })
    }).then(res => res.json())
    .then(data => obj = data)
document.getElementById('area_initial_damage').value = obj['min_damage'];
document.getElementById('area_time').value = obj['max_damage'];
document.getElementById('area_ending_initial_damage').value = obj['min_damage'] * 2;
document.getElementById('area_ending_critical_dot').value = obj['max_damage'] * 2;
}