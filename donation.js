document.getElementById('noakhali-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donationAmount=findInputFeildValueById('input-donate-money-noakhali');
    const orginalBalance=findTextFeildValueById('main-balance');
    const orginalNoakhaliBalance=findTextFeildValueById('noakhali-amount');
    const currentNoakhaliBalance=orginalNoakhaliBalance+donationAmount;

    const currentBalance=orginalBalance-donationAmount;
    if(donationAmount>currentBalance || donationAmount<0 ){
        alert('you canot donate');
        return;
    }
    if(isNaN(donationAmount)){
        alert('enter valid amount');
        return;
    }
    
    document.getElementById('main-balance').innerText=currentBalance;
    document.getElementById('noakhali-amount').innerText=currentNoakhaliBalance;
})

// feni donation
document.getElementById('feni-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donationAmount=findInputFeildValueById('input-donate-money-feni');
    const orginalBalance=findTextFeildValueById('main-balance');
    const orginalFeniBalance=findTextFeildValueById('feni-amount');
    const currentFeniBalance=orginalFeniBalance+donationAmount;

    const currentBalance=orginalBalance-donationAmount;
    if(donationAmount>currentBalance || donationAmount<0){
        alert('you canot donate');
        return;
    }
    if(isNaN(donationAmount)){
        alert('enter valid amount');
        return;
    }
    
    document.getElementById('main-balance').innerText=currentBalance;
    document.getElementById('feni-amount').innerText=currentFeniBalance;
})
// quota movement donate

document.getElementById('quota-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donationAmount=findInputFeildValueById('input-donate-money-quota');
    const orginalBalance=findTextFeildValueById('main-balance');
    const orginalQuotaBalance=findTextFeildValueById('quota-amount');
    const currentQuotaBalance=orginalQuotaBalance+donationAmount;

    const currentBalance=orginalBalance-donationAmount;
    if(donationAmount>currentBalance || donationAmount<0){
        alert('you canot donate');
        return;
    }
    if(isNaN(donationAmount)){
        alert('enter valid amount');
        return;
    }
    
    document.getElementById('main-balance').innerText=currentBalance;
    document.getElementById('quota-amount').innerText=currentQuotaBalance;
})