let seher = prompt('oldugunuz seheri qeyd edin:')
let teyinat = prompt('Getmek istediyiniz  seheri qeyd edin:')
let suret = prompt('masinin  suretini qeyd edin:')
let mesafe = prompt('Yolun mesafesini qeyd edin:')
let saat = mesafe/suret
let result = 'Siz ' + ' ' + seher + ' ' + ' seherinden ' + ' ' + teyinat + ' ' +' seherine olan ' + ' ' + mesafe + ' km mesafeni ' + suret + ' km\saat liq masinla ' + saat + ' saata catarsiz.'


document.getElementById('result').innerHTML = result