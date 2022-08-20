 
var Perfect_Check = (N) => 
{
     let x=0;
    for (let i=1;i<=N/2;i++){
       if(N%i===0);
       x=x+i;
    }
    if(x==N && x !==0)
     return "YES";
     else
     return "NO";   
        
};
 
