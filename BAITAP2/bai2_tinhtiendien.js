function baitap2() {
  var hotenEl = document.getElementById("hoten").value;
  var sokwEl = +document.getElementById("sokw").value;

  hienThi(sokwEl, hotenEl);
}
function hienThi(sokwEl, hotenEl) {
  var pay = 0;
  
  if (sokwEl <= 0){
    alert("vui lòng nhập lại số Kw")

  }else if(1 <= sokwEl && sokwEl <= 50) {
    pay += sokwEl * 500;
    document.getElementById(
      "result"
    ).innerHTML = `👉 Họ tên ${hotenEl} ; tiền điện ${pay.toLocaleString()} `;
  } else if (sokwEl <= 100) {
    pay += 50 * 500 + (sokwEl - 50) * 650;
    document.getElementById(
      "result"
    ).innerHTML = `👉 Họ tên ${hotenEl} ; tiền điện ${pay.toLocaleString()} `;
  }else if (sokwEl <= 200){
      pay += 50*500 + 50*650 + (sokwEl-100)*850
      document.getElementById("result").innerHTML = `👉 Họ tên ${hotenEl} ; tiền điện ${pay.toLocaleString()} `
  }else if (sokwEl <= 350){
      pay+= 50*500 + 50*650 + 100*850 +(sokwEl - 200)*1100
      document.getElementById("result").innerHTML = `👉 Họ tên ${hotenEl} ; tiền điện ${pay.toLocaleString()} `

  }else if (sokwEl > 350){
      pay += 50*500 + 50*650 + 100*850 + 150*1100 + (sokwEl - 350)*1300
      document.getElementById("result").innerHTML = `👉 Họ tên ${hotenEl} ; tiền điện ${pay.toLocaleString()} `
  }
  
}
