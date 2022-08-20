
var Minimal_Angle = (h, m) => 
{
   let hr_ang = 0.5 * (h * 60 + m);
    let min_ang = 6 * m;
    let a = Math.abs(hr_ang - min_ang);
    let a1 = Math.min(360 - a, a);
    return a1; 
};
 
