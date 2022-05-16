const btn = document.getElementById("btn-signal");
var punctuationRegEx = /[!-/:-@[-`{-~¡-©«-¬®-±´¶-¸»¿×÷˂-˅˒-˟˥-˫˭˯-˿͵;΄-΅·϶҂՚-՟։-֊־׀׃׆׳-״؆-؏؛؞-؟٪-٭۔۩۽-۾܀-܍߶-߹।-॥॰৲-৳৺૱୰௳-௺౿ೱ-ೲ൹෴฿๏๚-๛༁-༗༚-༟༴༶༸༺-༽྅྾-࿅࿇-࿌࿎-࿔၊-၏႞-႟჻፠-፨᎐-᎙᙭-᙮᚛-᚜᛫-᛭᜵-᜶។-៖៘-៛᠀-᠊᥀᥄-᥅᧞-᧿᨞-᨟᭚-᭪᭴-᭼᰻-᰿᱾-᱿᾽᾿-῁῍-῏῝-῟῭-`´-῾\u2000-\u206e⁺-⁾₊-₎₠-₵℀-℁℃-℆℈-℉℔№-℘℞-℣℥℧℩℮℺-℻⅀-⅄⅊-⅍⅏←-⏧␀-␦⑀-⑊⒜-ⓩ─-⚝⚠-⚼⛀-⛃✁-✄✆-✉✌-✧✩-❋❍❏-❒❖❘-❞❡-❵➔➘-➯➱-➾⟀-⟊⟌⟐-⭌⭐-⭔⳥-⳪⳹-⳼⳾-⳿⸀-\u2e7e⺀-⺙⺛-⻳⼀-⿕⿰-⿻\u3000-〿゛-゜゠・㆐-㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉃㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꘍-꘏꙳꙾꜀-꜖꜠-꜡꞉-꞊꠨-꠫꡴-꡷꣎-꣏꤮-꤯꥟꩜-꩟﬩﴾-﴿﷼-﷽︐-︙︰-﹒﹔-﹦﹨-﹫！-／：-＠［-｀｛-･￠-￦￨-￮￼-�]|\ud800[\udd00-\udd02\udd37-\udd3f\udd79-\udd89\udd90-\udd9b\uddd0-\uddfc\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc00-\udc7e]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83-\udd84\udd8c-\udda9\uddae-\udddd\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83c[\udc00-\udc2b\udc30-\udc93]/g;
const electron = require('electron');
const path = require('path');
const dialog = electron.remote.dialog;

btn.addEventListener("click",function(){
    // If the platform is 'win32' or 'Linux'
    if (process.platform !== 'darwin') {
        // Resolves to a Promise<Object>
        dialog.showOpenDialog({
            title: 'Select the File to be uploaded',
            defaultPath: path.join(__dirname, '../assets/'),
            buttonLabel: 'Upload',
            // Restricting the user to only Text Files.
            filters: [
                {
                    name: 'Text Files',
                    extensions: ['txt', 'docx']
                }, ],
            // Specifying the File Selector Property
            properties: ['openFile']
        }).then(file => {
            // Stating whether dialog operation was
            // cancelled or not.
            console.log(file.canceled);
            if (!file.canceled) {
              // Updating the GLOBAL filepath variable 
              // to user-selected file.
              global.filepath = file.filePaths[0].toString();
              console.log(global.filepath);
            }  
        }).catch(err => {
            console.log(err)
        });
    }
    else {
        // If the platform is 'darwin' (macOS)
        dialog.showOpenDialog({
            title: 'Select the File to be uploaded',
            defaultPath: path.join(__dirname, '../assets/'),
            buttonLabel: 'Upload',
            filters: [
                {
                    name: 'Text Files',
                    extensions: ['txt', 'docx']
                }, ],
            // Specifying the File Selector and Directory 
            // Selector Property In macOS
            properties: ['openFile', 'openDirectory']
        }).then(file => {
            console.log(file.canceled);
            if (!file.canceled) {
              global.filepath = file.filePaths[0].toString();
              console.log(global.filepath);
            }  
        }).catch(err => {
            console.log(err)
        });
    }
})
















// btn.addEventListener("click",function(){
//     // window.api.readTorontoSoldCSV()
//     // Owner = "this is test owner";
//     // PropertyAddress = "1712-125 Redpath Ave";
//     // City = "Toronto";
//     // State = "Ontario";
//     // ZipCode = "M4S 0B5";

//     // FullAddressCleaned = (PropertyAddress+City+State+ZipCode).replaceAll(punctuationRegEx, '').replace(/(\s){2,}/g, '$1').toLowerCase().replaceAll(/\s/g,'');
//     // window.api.create_Sold_Toronto(Owner, PropertyAddress, City, State, ZipCode, FullAddressCleaned);
// })