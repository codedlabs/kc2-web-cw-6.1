function travel(x = "زمردة") {
  console.log("أود السفر إلى كوكب " + x);
}

let planet = prompt("اذكر اسم الكوكب الذي تود الذهاب إليه");

travel(planet); // استدعاء الدالة من خلال الكود
travel(); // اختبار المعامل الافتراضي

// الاستدعاء الذاتي
(function travel(x = "زمردة") {
  console.log("أود السفر إلى كوكب " + x);
})(planet);

(function travel(x = "زمردة") {
  console.log("أود السفر إلى كوكب " + x);
})();
