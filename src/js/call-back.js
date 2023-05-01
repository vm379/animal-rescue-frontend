import { el, els, ev } from "./dom.js";

const callBackBtn = el('.call-back-btn');
const callBackBtnClose = el('.callback-modal--titles .btn');
const callbackModal = el('.callback-modal');

ev(callBackBtn, 'click', callBackModalOpen);
ev(callBackBtnClose, 'click', callBackModalClose);

function callBackModalOpen() {
    callbackModal.classList.add('d');
    setTimeout(function () {
        callbackModal.classList.add('a');
    }, 200);
}

function callBackModalClose() {
    callbackModal.classList.remove('a');
    setTimeout(function () {
        callbackModal.classList.remove('d');
    }, 200);
}