const e={form:document.querySelector(".login-form")};e.form.addEventListener("submit",(r=>{r.preventDefault();if((e=>{let r=!1;return e.forEach((e=>{r||""===e&&(r=!0)})),r})(new FormData(r.currentTarget)))return void alert("All fields must be filled!!!");const t=r.currentTarget.elements,l={email:t.email.value,password:t.password.value};console.log(l),e.form.reset()}));
//# sourceMappingURL=task-08.ea3a364c.js.map