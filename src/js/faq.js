import { el, els, ev } from "./dom.js";

const faqItems = els('.faq-item');
const faqArticles = els('.faq-article');
const faqItemsText = els('.faq-item > .c > .text');

for (let i = 0; i < faqItems.length; i++) {
    ev(faqItems[i], 'click', function () {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            faqItemsText[i].style.maxHeight = faqArticles[i].clientHeight + 'px';
        } else {
            faqItemsText[i].style.maxHeight = 0;
        }
    });
}

