const form = document.getElementById('leadForm');
const result = document.getElementById('formResult');
if (form && result) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const summary = [
      'ملخص طلب اجتماع نهر',
      '',
      `الجهة: ${data.org || ''}`,
      `القطاع: ${data.sector || ''}`,
      `المسؤول: ${data.name || ''}`,
      `الجوال: ${data.phone || ''}`,
      `الإيميل: ${data.email || ''}`,
      `عدد المشاركين: ${data.participants || ''}`,
      `الاحتياج: ${data.need || ''}`,
      '',
      'الخطوة التالية: ترتيب اجتماع فهم، وبعده يرسل العرض الفني والمالي.'
    ].join('\n');
    result.textContent = summary + '\n\nتم تجهيز الملخص. انسخه وأرسله للفريق لإكمال المتابعة.';
    result.classList.add('ready');
    try { await navigator.clipboard.writeText(summary); } catch (_) {}
  });
}
