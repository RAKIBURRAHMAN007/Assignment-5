function findInputFeildValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNum=parseFloat(inputValue);
    if(isNaN(inputValue)){
        alert('Enter Valid Amount');
        return;
    }
    return inputNum;

}
function findTextFeildValueById(id){
    const mainValue=document.getElementById(id).innerText;
    const mainVal=parseFloat(mainValue);
    return mainVal;
}

function showSectionById(id){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
