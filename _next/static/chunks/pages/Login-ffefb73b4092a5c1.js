(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{945:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return s(520)}])},520:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var o=s(5893);s(9008);var r=s(7294);s(5675);var i=s(8034),n=s(7536),a=s(1163),l=s.n(a),c=s(2920);s(4213);var u=s(3123),d=s(843);function h(){let{register:e,handleSubmit:t}=(0,n.cI)(),{user:s,setUser:i}=(0,d.g)(),a=async e=>{let t=await fetch("http://localhost:3001/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();if(!1==s.isverified)(0,c.Am)("You did not Verify your email",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});else{u.Z.setItem("token",s.authtoken),u.Z.setItem("id",s.id);let o=await fetch("http://localhost:3001/api/auth/getuser",{method:"POST",headers:{"Content-Type":"application/json","auth-token":u.Z.getItem("token")}}),r=await o.json();u.Z.setItem("user",JSON.stringify(r)),i(r),l().push("/")}};return(0,r.useEffect)(()=>{null!=localStorage.getItem("token")&&l().push("/")},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Ix,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,o.jsx)(c.Ix,{}),(0,o.jsx)("h2",{children:"Login"}),(0,o.jsxs)("form",{className:"flex flex-col items-center items-center",onSubmit:t(a),children:[(0,o.jsx)("input",{type:"email",className:"my-2",placeholder:"enter your email",required:!0,...e("email")}),(0,o.jsx)("input",{type:"password",placeholder:"enter your password",required:!0,...e("password")}),(0,o.jsx)("button",{children:"submit"})]})]})}function p(){let{register:e,handleSubmit:t}=(0,n.cI)(),s=async e=>{if(console.log(e),e.password!=e.Cpassword)(0,c.Am)("Password is not matching",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});else{let t=await fetch("http://localhost:3001/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();console.log(s),s.emailExits?(0,c.Am)("Email already exits",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):(0,c.Am)("Please check your email, verification has been send to your mail",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}};return(0,r.useEffect)(()=>{null!=localStorage.getItem("token")&&l().push("/")},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Ix,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,o.jsx)(c.Ix,{}),(0,o.jsxs)("form",{className:"flex flex-col items-center items-center",onSubmit:t(s),children:[(0,o.jsx)("h1",{className:"text-2xl",children:"Signup form"}),(0,o.jsx)("input",{type:"text",className:"my-2",placeholder:"enter your name",required:!0,...e("name")}),(0,o.jsx)("input",{type:"email",className:"my-2",placeholder:"enter your email",required:!0,...e("email")}),(0,o.jsx)("input",{type:"password",className:"my-2",placeholder:"enter your password",required:!0,...e("password")}),(0,o.jsx)("input",{type:"password",className:"my-2",placeholder:"enter your conform password",required:!0,...e("Cpassword")}),(0,o.jsx)("button",{children:"submit"})]})]})}function m(e){let{user:t}=e;return(0,r.useEffect)(()=>{null!=localStorage.getItem("token")&&navigator.geolocation.getCurrentPosition(e=>{console.log(e.coords.latitude),console.log(e.coords.longitude)})}),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.mQ,{isFitted:!0,variant:"soft-rounded",children:[(0,o.jsxs)(i.td,{mb:"1em",children:[(0,o.jsx)(i.OK,{children:"Login"}),(0,o.jsx)(i.OK,{children:"Sign Up"})]}),(0,o.jsxs)(i.nP,{children:[(0,o.jsx)(i.x4,{children:(0,o.jsx)(h,{})}),(0,o.jsx)(i.x4,{children:(0,o.jsx)(p,{})})]})]})})}}},function(e){e.O(0,[239,774,888,179],function(){return e(e.s=945)}),_N_E=e.O()}]);