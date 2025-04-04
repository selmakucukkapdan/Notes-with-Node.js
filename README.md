# **📌 Node.js Notlar Uygulaması**  

Bu proje, **Node.js ve `fs` modülü** kullanarak **dosya okuma, yazma, ekleme ve silme** işlemlerini gerçekleştiren basit bir komut satırı uygulamasıdır.  

## **📌 Proje Açıklaması**  
Bu uygulama ile:  
✅ Kullanıcıdan alınan metin **ID ile `notlar.json` içine eklenir.**  
✅ **Kayıtlı notlar listelenebilir.**  
✅ **Belirli bir ID'ye sahip not silinebilir.**  

---

## **📌 Kullanılan Teknolojiler**  
- **Node.js**  
- **fs (File System) modülü**  

---

## **📌 Kurulum**  

### **1️⃣ Node.js'i İndir**  
Eğer sisteminizde **Node.js yüklü değilse**, aşağıdaki linkten yükleyin:  
🔗 [Node.js Download](https://nodejs.org/)  

### **2️⃣ Bu Repoyu Klonlayın**  
GitHub üzerinden projeyi bilgisayarınıza indirin:  
```bash
git clone https://github.com/kullanici-adi/nodejs-notlar-uygulamasi.git
cd nodejs-notlar-uygulamasi
```

### **3️⃣ Projeyi Çalıştırın**  
Komut satırında aşağıdaki komutları çalıştırarak uygulamayı test edebilirsiniz:  

**📌 Yeni Not Ekleme:**  
```bash
node index.js ekle "Yeni bir not eklendi!"
```

**📌 Tüm Notları Listeleme:**  
```bash
node index.js listele
```

**📌 Belirli Bir Notu Silme (ID ile):**  
```bash
node index.js sil 2
```

---

## **📌 Örnek Çalışma**  
**1️⃣ Yeni Not Ekleme**  
Komut:  
```bash
node index.js ekle "Bu benim ilk notum!"
```
JSON formatında kaydedilen veri (`notlar.json`):  
```json
[
  { "id": 1, "not": "Bu benim ilk notum!" }
]
```

**2️⃣ Yeni Not Eklediğimizde**  
Komut:  
```bash
node index.js ekle "İkinci not burada!"
```
JSON dosyası (`notlar.json`) güncellenir:  
```json
[
  { "id": 1, "not": "Bu benim ilk notum!" },
  { "id": 2, "not": "İkinci not burada!" }
]
```

**3️⃣ Notları Listeleme**  
Komut:  
```bash
node index.js listele
```
Beklenen Çıktı:  
```bash
1 - Bu benim ilk notum!
2 - İkinci not burada!
```

**4️⃣ Belirli Bir Notu Silme**  
Komut:  
```bash
node index.js sil 1
```
Eğer `1` ID’li not silinirse, yeni dosya şu şekilde olur:  
```json
[
  { "id": 2, "not": "İkinci not burada!" }
]
```

---

## **📌 Hata Yönetimi**  
Kodda **try/catch** yapısı kullanılarak hata yönetimi sağlanmıştır. Eğer `notlar.json` okunamazsa veya dosya yoksa otomatik olarak oluşturulur.  

---

