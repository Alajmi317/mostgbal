// إنشاء حساب
function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    alert("الرجاء تعبئة جميع الحقول");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // التحقق إن الإيميل مستخدم
  if (users.some(u => u.email === email)) {
    alert("الإيميل مستخدم مسبقاً");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("تم إنشاء الحساب بنجاح");
  window.location.href = "login.html";
}

// تسجيل الدخول
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert("تم تسجيل الدخول بنجاح");
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "index.html"; // أو أي صفحة داخل الموقع
  } else {
    alert("خطأ في البريد أو كلمة المرور");
  }
}

