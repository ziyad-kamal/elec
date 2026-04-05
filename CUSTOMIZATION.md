# 🎯 دليل التخصيص والتعديل

هذا الدليل يساعدك على تعديل الموقع وجعله خاصاً بك 100%

## 1️⃣ تغيير الاسم والمعلومات الأساسية

### في `index.html`:

#### الشعار والاسم:

```html
<!-- ابحث عن هذا السطر -->
<span class="logo-text">ديزاين ستوديو</span>

<!-- غيّره إلى اسمك -->
<span class="logo-text">أنس مصمم جرافيك</span>
```

#### معلومات البريد الإلكتروني والهاتف:

```html
<!-- ابحث عن هذه الأقسام وغيّرها -->
<p>design@studio.com</p>
→
<p>your-email@example.com</p>
<p>+965 99999999</p>
→
<p>+966 50XX XXXX</p>
```

#### معلومات "حولي":

```html
<!-- استبدل هذا النص بقصتك -->
مع أكثر من 8 سنوات من الخبرة...
```

## 2️⃣ إضافة صورك الحقيقية

### استبدال المشاريع في المعرض:

#### الطريقة 1: استخدام صور من الإنترنت

```html
<!-- بدلاً من -->
<div
    class="placeholder"
    style="background: linear-gradient(...);"
>
    <i class="fas fa-star"></i>
</div>

<!-- استخدم -->
<img
    src="https://your-image-url.jpg"
    alt="اسم المشروع"
    style="width:100%; height:100%; object-fit:cover;"
/>
```

#### الطريقة 2: استخدام صور محلية

ضع صور في مجلد `images` وأضف:

```html
<img
    src="images/project1.jpg"
    alt="اسم المشروع"
    style="width:100%; height:100%; object-fit:cover;"
/>
```

#### الطريقة 3: استخدام الألوان من صورك

استخدم أداة مثل ColorPick لاستخراج لون من صورتك:

```css
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

## 3️⃣ تحديث قائمة المهارات

في قسم `About`:

```html
<!-- أضف أو عدّل المهارات -->
<div class="skill-item">
    <i class="fas fa-check-circle"></i>
    <span>اسم المهارة</span>
</div>
```

### أيقونات إضافية من Font Awesome:

- `fa-palette` 🎨 (الألوان)
- `fa-pencil-alt` ✏️ (الرسم)
- `fa-layer-group` 📦 (التصميم)
- `fa-image` 🖼️ (الصور)
- `fa-star` ⭐ (التقييمات)

## 4️⃣ تخصيص الألوان

### الطريقة الأساسية: عديل `:root` في CSS

في `styles.css` ابحث عن:

```css
:root {
    --primary-color: #667eea; /* اللون الأساسي */
    --secondary-color: #764ba2; /* اللون الثانوي */
    --accent-color: #f5576c; /* لون التمييز */
    --text-dark: #2d3748;
    --text-light: #718096;
    --bg-light: #f7fafc;
    --border-color: #e2e8f0;
}
```

### أمثلة على مجموعات ألوان:

#### مجموعة حديثة (أزرق - بنفسجي):

```css
--primary-color: #667eea;
--secondary-color: #764ba2;
--accent-color: #f5576c;
```

#### مجموعة جريئة (برتقالي - وردي):

```css
--primary-color: #ff9a56;
--secondary-color: #ff6a88;
--accent-color: #fa709a;
```

#### مجموعة سماوية (أزرق):

```css
--primary-color: #4facfe;
--secondary-color: #00f2fe;
--accent-color: #30cfd0;
```

#### مجموعة كلاسيكية (أسود - رمادي):

```css
--primary-color: #2d3748;
--secondary-color: #4a5568;
--accent-color: #1a202c;
```

## 5️⃣ تغيير الخطوط

في البداية من `index.html`:

```html
<!-- الخط الحالي -->
<meta charset="UTF-8" />
<!-- إضف هذا لخط عربي أفضل -->
<link
    href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap"
    rel="stylesheet"
/>
```

في `styles.css`:

```css
body {
    font-family: "Tajawal", "Segoe UI", sans-serif;
}
```

## 6️⃣ إضافة روابط التواصل الاجتماعي

ابحث عن:

```html
<div class="social-links">
    <a
        href="#"
        class="social-link"
        ><i class="fab fa-instagram"></i
    ></a>
    <a
        href="#"
        class="social-link"
        ><i class="fab fa-behance"></i
    ></a>
    ...
</div>
```

وغيّرها إلى روابطك:

```html
<a
    href="https://instagram.com/yourusername"
    class="social-link"
    ><i class="fab fa-instagram"></i
></a>
<a
    href="https://behance.net/yourusername"
    class="social-link"
    ><i class="fab fa-behance"></i
></a>
```

### أيقونات التواصل الاجتماعي:

- `fa-instagram` - Instagram
- `fa-ail` - Twitter
- `fa-linkedin` - LinkedIn
- `fa-dribbble` - Dribbble
- `fa-behance` - Behance
- `fa-facebook` - Facebook
- `fa-youtube` - YouTube
- `fa-tiktok` - TikTok

## 7️⃣ توصيل نموذج الاتصال

### للبريد الإلكتروني (استخدام FormSubmit):

في `index.html` عدّل نموذج كالتالي:

```html
<form
    action="https://formspree.io/f/YOUR_FORM_ID"
    method="POST"
    class="contact-form"
    id="contactForm"
>
    <div class="form-group">
        <input
            type="text"
            name="name"
            placeholder="اسمك الكامل"
            required
            class="form-input"
        />
    </div>
    <div class="form-group">
        <input
            type="email"
            name="email"
            placeholder="بريدك الإلكتروني"
            required
            class="form-input"
        />
    </div>
    ...
    <button
        type="submit"
        class="btn btn-primary btn-submit"
    >
        إرسال الرسالة
    </button>
</form>
```

1. اذهب إلى [formspree.io](https://formspree.io)
2. اختر إنشاء نموذج جديد
3. أدخل بريدك الإلكتروني
4. استخرج معرف النموذج وأدرجه في الكود

## 8️⃣ إضافة صفحات إضافية

### مثال: صفحة شروط الاستخدام

أنشئ ملف `terms.html`:

```html
<!DOCTYPE html>
<html
    lang="ar"
    dir="rtl"
>
    <head>
        <meta charset="UTF-8" />
        <title>شروط الاستخدام</title>
        <link
            rel="stylesheet"
            href="styles.css"
        />
    </head>
    <body>
        <!-- استخدم نفس الـ navbar و footer -->
        <nav class="navbar">...</nav>

        <section
            class="container"
            style="padding: 80px 20px;"
        >
            <h1>شروط الاستخدام</h1>
            <p>أضف محتواك هنا...</p>
        </section>

        <footer class="footer">...</footer>
    </body>
</html>
```

## 9️⃣ تحسينات الأداء

### تقليل حجم الملفات:

1. اضغط الصور باستخدام [TinyPNG](https://tinypng.com)
2. أزل CSS و JS الذي لا تستخدمه
3. استخدم WebP بدل JPG

### تسريع التحميل:

- استخدم CDN للخطوط والأيقونات (الموقع يستخدمه بالفعل)
- ضع الـ CSS في رؤوس `<head>`
- ضع الـ JS قبل `</body>`

## 🔟 تحسينات SEO

أضف هذه الوسوم في `<head>`:

```html
<meta
    name="description"
    content="وصف قصير عن عملك"
/>
<meta
    name="keywords"
    content="جرافيك, تصميم, هوية بصرية"
/>
<meta
    property="og:title"
    content="اسمك - مصمم جرافيك"
/>
<meta
    property="og:description"
    content="وصفك"
/>
<meta
    property="og:image"
    content="صورتك"
/>
```

## 📝 نموذج تعديل شامل

إليك قائمة بالتعديلات الأساسية:

- [ ] تغيير الاسم واللوجو
- [ ] تحديث البريد والهاتف
- [ ] كتابة "حولي" الخاص بك
- [ ] اختيار نوع مشاريعك
- [ ] جمع صور المشاريع
- [ ] اختيار مجموعة ألوان مناسبة
- [ ] إضافة روابط التواصل الاجتماعي
- [ ] توصيل نموذج الاتصال
- [ ] اختبار الموقع على أجهزة مختلفة
- [ ] نشر الموقع على الإنترنت

## 🎨 أدوات مساعدة مفيدة

| الأداة             | الرابط                                                   | الاستخدام       |
| ------------------ | -------------------------------------------------------- | --------------- |
| ColorPick          | [chir.mm/projects/TooManySecrets/](https://chir.mm/)     | استخراج الألوان |
| Gradient Generator | [colorspace.io/](https://colorspace.io/)                 | إنشاء تدرجات    |
| Google Fonts       | [fonts.google.com/](https://fonts.google.com/)           | خطوط جميلة      |
| TinyPNG            | [tinypng.com](https://tinypng.com)                       | ضغط الصور       |
| Favicon Converter  | [favicon-generator.org/](https://favicon-generator.org/) | إنشاء الأيقونة  |

---

**نصيحة ذهبية**: احفظ نسخة أصلية من الملفات قبل البدء بالتعديلات! 💾
