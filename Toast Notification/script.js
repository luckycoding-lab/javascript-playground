let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submited';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix the Error';
let invalidMsg =  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');

    toast.innerHTML = msg;
    toastBox.appendChild(toast);


    if(msg.includes('Error')) {
        toast.classList.add('Error');
    }
    if(msg.includes('Invalid')) {
        toast.classList.add('Invalid');
    }


    setTimeout(() => {
        toast.remove();
    }, 3000);
}