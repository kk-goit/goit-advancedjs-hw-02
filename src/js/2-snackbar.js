// Add iziToast 
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import "../css/2-snackbar.css";

iziToast.settings({
    class: "toast",
    position: "topRight",
    progressBar: false,
    close: false,
    drag: false,
});
document.querySelector("form.form").addEventListener(
    "submit", e => { 
        e.preventDefault();

        const delay = e.currentTarget.elements['delay'].value;
        const state = e.currentTarget.elements['state'].value;
        const promise = new Promise((resolv, reject) => { 
            setTimeout(() => {
                if (state == 'fulfilled') {
                    resolv(`Fulfilled promise in ${delay}ms`);
                } else {
                    reject(`Rejected promise in ${delay}ms`);
                }   
             }, delay);
        });
        promise.then(
            value => { 
                iziToast.success({message: value});
            },
            error => { 
                iziToast.error({message: error});
            }
        );

        e.currentTarget.reset();
    }
);