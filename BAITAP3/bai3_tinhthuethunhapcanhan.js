function baitap3(){
var hoTen = document.getElementById("hoten").value
var thuNhap = + document.getElementById("thunhap").value
var phuThuoc = + document.getElementById("phuthuoc").value  

 hienThi(hoTen,thuNhap,phuThuoc)


}
function hienThi(hoTen,thuNhap,phuThuoc){
    var chiuThue = thuNhap - 4*10**6 - phuThuoc*1.6*10**6 
    var pay = 0 
    if (chiuThue <= 0) {
        alert('Số tiền thu nhập không hợp lệ')
    }else if (thuNhap <= 60*10**6 ){
        pay += chiuThue * 0.05
        document.getElementById("result").innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${pay.toLocaleString()} VND`
    }else if (thuNhap > 60*10**6 && thuNhap <= 120*10**6){
        pay += chiuThue * 0.1
        document.getElementById("result").innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${pay.toLocaleString()} VND`
    }else if (thuNhap > 120*10**6 && thuNhap <= 210*10**6){
        pay += chiuThue * 0.15
        document.getElementById("result").innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${pay.toLocaleString()} VND`
    } else if (thuNhap > 210*10**6 && thuNhap <= 384*10**6){
        pay += chiuThue * 0.2
        document.getElementById("result").innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${pay.toLocaleString()} VND`  
    }else if (thuNhap > 384*10**6 && thuNhap <= 624*10**6){
        pay += chiuThue * 0.25
        document.getElementById("result").innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${pay.toLocaleString()} VND`
    }else if (thuNhap > 624*10**6 && thuNhap <= 960*10**6){
        pay += chiuThue * 0.3
        document.getElementById("result").innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${pay.toLocaleString()} VND`
    }else if (thuNhap > 960*10**6){
        pay += chiuThue * 0.35
        document.getElementById("result").innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${pay.toLocaleString()} VND`
    }    
}