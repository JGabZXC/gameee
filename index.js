var lvl = document.querySelector(".lvl"); // VIEW
var hpv = document.querySelector(".b-hp"); // VIEW
var hpc = 100; // HP COUNTER
var lv = 1; // LVL COUNTER

hpv.innerHTML = hpc;

function slash() {
    var dmg = 5;

    hpc = hpc - 5;
    hpv.innerHTML = hpc;

    if(hpc <= 0) {
        hpc += 100;
        lv += 1;
        hpv.innerHTML = hpc;
        lvl.innerHTML = "BOSS LEVEL " + lv;
    }
}

function uslash() {
    var dmg = 8;

    hpc = hpc - 8;
    hpv.innerHTML = hpc;

    if(hpc <= 0) {
        hpc += 100;
        lv += 1;
        hpv.innerHTML = hpc;
        lvl.innerHTML = "BOSS LEVEL " + lv;
    }
}

function dslash() {
    var dmg = 12;

    hpc = hpc - 12;
    hpv.innerHTML = hpc;

    if(hpc <= 0) {
        hpc += 100;
        lv += 1;
        hpv.innerHTML = hpc;
        lvl.innerHTML = "BOSS LEVEL " + lv;
    }
}