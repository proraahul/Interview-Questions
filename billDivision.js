
function bonAppetit(bill, k, charged) {
    const annaShare = (bill.reduce((total, price) => total + price, 0) - bill[k]) / 2;
        // 24 - 10 / 2; 
        // 14/2 = 7;
        
    // console.log(annaShare);
    
    
    if (charged === annaShare) {
        console.log("Bon Appetit");
    } else {
        const refund = charged - annaShare;
        console.log(refund);
    }
    
    
}

// Example usage
const bill = [3,10,2,9]; // Array of item prices
const k = 1; // The item Anna didn't eat
const charged = 12; // The amount Brian charged Anna

bonAppetit(bill, k, charged);