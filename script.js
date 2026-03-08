/* ===================== */
/* QR CODE หลัก */
/* ===================== */

const qrElement = document.getElementById("qrcode");

if (qrElement) {
    new QRCode(qrElement, {
        text: "PromptPay 0812345678",
        width: 200,
        height: 200
    });
}


/* ===================== */
/* TAB SWITCH */
/* ===================== */

function showQR(){

const qrBox = document.getElementById("qrBox");
const cardBox = document.getElementById("cardBox");

if(qrBox && cardBox){
qrBox.style.display = "block";
cardBox.style.display = "none";
}

document.getElementById("qrBtn")?.classList.add("active");
document.getElementById("cardBtn")?.classList.remove("active");

}

function showCard(){

const qrBox = document.getElementById("qrBox");
const cardBox = document.getElementById("cardBox");

if(qrBox && cardBox){
qrBox.style.display = "none";
cardBox.style.display = "block";
}

document.getElementById("cardBtn")?.classList.add("active");
document.getElementById("qrBtn")?.classList.remove("active");

}


/* ===================== */
/* TIMER */
/* ===================== */

let time = 15 * 60;

const timer = setInterval(function(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");

if(minEl && secEl){

minEl.innerText = minutes;
secEl.innerText = seconds < 10 ? "0" + seconds : seconds;

}

time--;

if(time < 0){

clearInterval(timer);

alert("หมดเวลาชำระเงิน");

window.location.href = "booking.html";

}

},1000);


/* ===================== */
/* POPUP QR */
/* ===================== */

function openQR(){

const popup = document.getElementById("qrPopup");
const popupQR = document.getElementById("popupQR");

if(popup){
popup.style.display = "flex";
}

if(popupQR){

popupQR.innerHTML = "";

new QRCode(popupQR,{
text:"PromptPay 0812345678",
width:200,
height:200
});

}

}

function closeQR(){

const popup = document.getElementById("qrPopup");

if(popup){
popup.style.display = "none";
}

}


/* ===================== */
/* แจ้งชำระเงิน */
/* ===================== */

function startQR(){

const btn = document.querySelector(".pay-btn");

if(btn){
btn.innerText = "กำลังตรวจสอบการชำระเงิน...";
}

setTimeout(function(){

window.location.href = "booking-detail.html";

},2000);

}


/* ===================== */
/* ชำระเงินบัตร */
/* ===================== */

function confirmPayment(){

alert("ชำระเงินสำเร็จ");

window.location.href = "history.html";

}


/* ===================== */
/* ยกเลิกการจอง */
/* ===================== */

function cancelBooking(){

if(confirm("ต้องการยกเลิกการจองหรือไม่?")){

alert("ยกเลิกการจองสำเร็จ");

window.location.href = "booking.html";

}

}


/* ===================== */
/* ROLE SYSTEM */
/* ===================== */

function setRole(selectedRole){

localStorage.setItem("role", selectedRole);

}


/* ===================== */
/* เลือกแพ็คเกจ */
/* ===================== */

function selectPackage(name, price){

localStorage.setItem("packageName", name);
localStorage.setItem("price", price);

window.location.href = "payment.html";

}


/* ===================== */
/* แสดงข้อมูลแพ็คเกจในหน้า payment */
/* ===================== */

const priceElement = document.getElementById("price");
const packageElement = document.getElementById("packageName");

if(priceElement){

const price = localStorage.getItem("price");
priceElement.innerText = price ? price : "0";

}

if(packageElement){

const packageName = localStorage.getItem("packageName");
packageElement.innerText = packageName ? packageName : "-";

}