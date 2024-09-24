document.getElementById('btn-donation').addEventListener('click',function(){
    showSectionById('donation-section');
    document.getElementById('btn-donation').style.backgroundColor='#B4F461';
    document.getElementById('btn-history').style.backgroundColor='white';

});
document.getElementById('btn-history').addEventListener('click',function(){
    showSectionById('history-section');
    document.getElementById('btn-history').style.backgroundColor='#B4F461';
    document.getElementById('btn-donation').style.backgroundColor='white';
    document.getElementById('foot').style.marginTop='300px';
    
    

})