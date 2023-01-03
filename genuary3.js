// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// #genuary3 #genuary2023
// by JinSean
// https://github.com/jinseanlu
const rand = (()=>Math.random(Math.PI))
const arr = [0.009, 0.09, 0.9]
const osc1 =()=> {return osc(1, 1, 1)}
shape(5, 0.5, arr).modulate(o0).modulateRepeat(osc1()).out(o0)
render(o0)
