خطوات تشغيل المشروع وتحويله إلى ملف APK:
1. فك الضغط عن مجلد الصور (almadinah-azraq_cropped_webp.zip) وضع جميع الصور (page_001.webp إلى page_624.webp) داخل المسار:
   quran-mobile-app/assets/pages/
2. للتجربة على المتصفح: افتح ملف index.html مباشرة أو باستخدام Live Server.
3. لتحويله إلى ملف APK مستقل للأندرويد:
   - افتح سطر الأوامر داخل مجلد quran-mobile-app
   - نفذ: npm install
   - نفذ: npx cap add android
   - نفذ: npx cap sync android
   - افتح مجلد android في Android Studio واختر Build > Build Bundle(s) / APK(s) > Build APK(s)
