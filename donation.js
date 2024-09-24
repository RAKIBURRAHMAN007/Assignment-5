document.getElementById('noakhali-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donationAmount=findInputFeildValueById('input-donate-money-noakhali');
    const orginalBalance=findTextFeildValueById('main-balance');
    const orginalNoakhaliBalance=findTextFeildValueById('noakhali-amount');
    const currentNoakhaliBalance=orginalNoakhaliBalance+donationAmount;

    const currentBalance=orginalBalance-donationAmount;

    if(donationAmount>orginalBalance || donationAmount<0 ){
        alert('You Canot Donate,Insufficient Balance.');
        return;
    }
    if(isNaN(donationAmount)){
        alert('Enter Valid Amount');
        return;
    }
    
    document.getElementById('main-balance').innerText=currentBalance;
    document.getElementById('noakhali-amount').innerText=currentNoakhaliBalance;
    const p=document.createElement('p');
    p.innerText=`${donationAmount}Taka is Donated for Flood Relief in Noakhali,Bangladesh`;

    
    const card = document.createElement('div');
    card.style.border = '1px solid #D3D3D3'; 
    card.style.borderRadius = '10px'; 
    card.style.padding = '50px';
    card.style.margin = '10px '; 
    

   
    const donationParagraph = document.createElement('p');
    donationParagraph.innerText = `${donationAmount} Taka is donated for flood relief in Noakhali, Bangladesh.`;
    donationParagraph.style.fontSize='30px';
    donationParagraph.style.fontWeight='700px';
    card.appendChild(donationParagraph); 
    const dateString = new Date().toString(); 
    const dateParagraph = document.createElement('p');
    dateParagraph.innerText =`Date : ${dateString}`;
    
    dateParagraph.style.fontSize='17px';
    
    card.appendChild(dateParagraph);
    document.getElementById('history-container').appendChild(card);

    my_modal_1.showModal();
})

// feni donation
document.getElementById('feni-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donationAmount=findInputFeildValueById('input-donate-money-feni');
    const orginalBalance=findTextFeildValueById('main-balance');
    const orginalFeniBalance=findTextFeildValueById('feni-amount');
    const currentFeniBalance=orginalFeniBalance+donationAmount;

    const currentBalance=orginalBalance-donationAmount;
    if(donationAmount>orginalBalance || donationAmount<0){
        alert('You Canot Donate,Insufficient Balance.');
        return;
    }
    if(isNaN(donationAmount)){
        alert('Enter Valid Amount');
        return;
    }
    
    document.getElementById('main-balance').innerText=currentBalance;
    document.getElementById('feni-amount').innerText=currentFeniBalance;
    const card2=document.createElement('div');
    card2.style.border='1px solid #D3D3D3'
    card2.style.borderRadius='10px';
    card2.style.padding='50px';
    card2.style.margin='10px'
    const donationParagraph=document.createElement('p');
    donationParagraph.innerText=`${donationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh`;
    donationParagraph.style.fontSize='30px';
    donationParagraph.style.fontWeight='700px'
    card2.appendChild(donationParagraph);

    const dateString=new Date().toString();
    const dateParagraph=document.createElement('p');
    dateParagraph.innerText=`Date : ${dateString}`;
    card2.appendChild(dateParagraph);
    document.getElementById('history-container').appendChild(card2);

    my_modal_2.showModal();
})
// quota movement donate

document.getElementById('quota-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donationAmount=findInputFeildValueById('input-donate-money-quota');
    const orginalBalance=findTextFeildValueById('main-balance');
    const orginalQuotaBalance=findTextFeildValueById('quota-amount');
    const currentQuotaBalance=orginalQuotaBalance+donationAmount;

    const currentBalance=orginalBalance-donationAmount;
    if(donationAmount>orginalBalance || donationAmount<0){
        alert('You Canot Donate,Insufficient Balance.');
        return;
    }
    if(isNaN(donationAmount)){
        alert('Enter Valid Amount');
        return;
    }
    
    document.getElementById('main-balance').innerText=currentBalance;
    document.getElementById('quota-amount').innerText=currentQuotaBalance;
    const card3=document.createElement('div');
    card3.style.border='1px solid #D3D3D3'
    card3.style.borderRadius='10px';
    card3.style.padding='50px';
    card3.style.margin='10px'
    const donationParagraph=document.createElement('p');
    donationParagraph.innerText=`${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    donationParagraph.style.fontSize='30px';
    donationParagraph.style.fontWeight='700px'
    card3.appendChild(donationParagraph);

    const dateString=new Date().toString();
    const dateParagraph=document.createElement('p');
    dateParagraph.innerText=`Date : ${dateString}`;
    card3.appendChild(dateParagraph);
    document.getElementById('history-container').appendChild(card3);
    my_modal_3.showModal();
    
})