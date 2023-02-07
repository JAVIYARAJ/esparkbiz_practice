
//task- take twon input, first is current date and second is day and return date based on day

function getFullDate(current_date,days){
    let daysList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date=new Date(current_date);
    date.setDate(date.getUTCDate()+days);
    let resullt=new Date(date);
    console.log(`${resullt} ${daysList[resullt.getUTCDay()]}`);
    
}

getFullDate(new Date(),30);
