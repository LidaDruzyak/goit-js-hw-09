import"./assets/styles-BO3BPTzw.js";const a={email:"",message:""},t=document.querySelector(".feedback-form"),s="feedback-form-state",l=localStorage.getItem(s);if(l){const e=JSON.parse(l);a.email=e.email,a.message=e.message,t.elements.email.value=e.email,t.elements.message.value=e.message}t.addEventListener("input",e=>{a[e.target.name]=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(a))});t.addEventListener("submit",e=>{if(e.preventDefault(),a.email===""||a.message===""){alert("Fill please all fields");return}else console.log(a);localStorage.removeItem(s),a.email="",a.message="",t.reset()});
//# sourceMappingURL=2-form.js.map
