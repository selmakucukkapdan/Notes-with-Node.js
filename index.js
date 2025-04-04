const fs = require('fs').promises;
const path = "notlar.json"; //Kullanıcı tarafından kaydedilen notlar bu yol üzerinden kaydolur.
async function readFile() {//Dosyayı okumak için asenkron bir fonksiyon oluşturuyoruz.
    try {//try catch bloğu ile hataları almak için kullanıyorum.
        const data = await fs.readFile(path, "utf8"); //dosyayı okurken bekletiyorum ki başka bir işlem yapmasın.readFile
        console.log("dosya başarılı bir şekilde okundu");//console mesajı
        return JSON.parse(data);//datayı parse eder.
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}
async function writeFile(notlar) { //notları json dosyama yazacak.
    await fs.writeFile(path, JSON.stringify(notlar, null, 2));
}
async function addNote(note) { //notları dosya yoluma ekleyecek.
    const notlar = await readFile();//İlk önce dosyayı okuyacak
    const newNot = { id: notlar.length + 1, metin: note }; //Dosyayı oluşturacak.
    notlar.push(newNot); //note eklenecek.
    await writeFile(notlar); //tekrar güncellenmiş şekilde oluşturacak.
    console.log('Başarılı');
}
async function noteList() { //notları forEach ile listeleyecek.
    const notlar = await readFile();
    notlar.forEach(not => console.log(`${not.id} - ${not.metin}`)); //Önce id daha sonra metini gösterecek.
}
async function deleteNote(id) { //Notları silecek.
    const notlar = await readFile(); //Önce dosyayı okuyacak
    const guncelNotlar = notlar.filter(not => not.id !== parseInt(id));
    await writeFile(guncelNotlar); //dosyanın güncellenmiş halini okuyacak.
    console.log(`${id} notu silindi.`);
}
const args = process.argv.slice(2);
const komut = args[0];
const data = args[1];

async function komutIsle(komut, veri) {
    try {
        switch (komut) {
            case 'ekle':
                await addNote(veri);
                break;
            case 'listele':
                await noteList();
                break;
            case 'sil':
                await deleteNote(veri);
                break;
            default:
                console.log('Komut girişi yapınız.');
        }
    } catch (error) {
        console.log('Error', error);
    }
}

komutIsle(komut, data);