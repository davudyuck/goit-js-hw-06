!function(){var e={form:document.querySelector(".login-form")};e.form.addEventListener("submit",(function(r){r.preventDefault();var t=new FormData(r.currentTarget);if(a=!1,t.forEach((function(e){a||""===e&&(a=!0)})),a)alert("All fields must be filled!!!");else{var a,l=r.currentTarget.elements,o={email:l.email.value,password:l.password.value};console.log(o),e.form.reset()}}))}();
//# sourceMappingURL=task-08.4eb80edb.js.map