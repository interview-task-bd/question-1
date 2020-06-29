
//Actually you question is not clear to me but what I understant I did that I think is the solution what you want
//if not that is the solution; then please give the correct information for it so that I can give proper solution 
//because I think you description is not clear to me 

let allRead = true;

let notifications=[
    {message:"Lorem", read:true},
    {message:"Ipsum", read:true},
    {message:"Dolor", read:true},
    {message:"Sit", read:false},
    {message:"Amet", read:true},
];


function makeFalseAllread(){
    if(!notifications.read){
       return allRead=false 
    }
    else{
        makeFalseAllread()
    }
}

console.log(makeFalseAllread())
console.log(allRead)


