import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";r.settings({class:"toast",position:"topRight",progressBar:!1,close:!1,drag:!1});document.querySelector("form.form").addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements.delay.value,o=s.currentTarget.elements.state.value;new Promise((e,i)=>{setTimeout(()=>{o=="fulfilled"?e(`Fulfilled promise in ${t}ms`):i(`Rejected promise in ${t}ms`)},t)}).then(e=>{r.success({message:e})},e=>{r.error({message:e})}),s.currentTarget.reset()});
//# sourceMappingURL=2-snackbar.js.map
