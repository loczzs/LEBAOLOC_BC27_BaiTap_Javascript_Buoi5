function baitap1() {
  var diemChuan = +document.getElementById("diemchuan").value;
  var diem1El = +document.getElementById("diem1").value;
  var diem2El = +document.getElementById("diem2").value;
  var diem3El = +document.getElementById("diem3").value;
  var khuVuc = document.getElementById("khuvuc").value;
  var doiTuong = document.getElementById("doituong").value;

  var diemDoituong = tinhdiemdoituong(doiTuong);
  var diemKhuvuc = tinhdiemKhuvuc(khuVuc);
  var tongDiem = diem1El + diem2El + diem3El
  var diemTongket = tongDiem + diemDoituong + diemKhuvuc;
  
  // if ((diem1El <=0 && diem2El <= 0) || (diem1El <= 0 && diem3El <= 0) ||(diem2El<= 0 && diem3El <= 0)){
  //   document.getElementById("result").innerHTML = `bạn đã rớt do có môn nhỏ hơn hoặc bằng 0 `
  // }else if (diem1El <= 0 || diem2El <= 0 || diem3El <= 0){
  //   document.getElementById("result").innerHTML = `bạn đã rớt do có môn nhỏ hơn hoặc bằng 0 `
  // }else if (diemTongket > diemChuan ){
  //   document.getElementById("result").innerHTML = `bạn đã đậu. Tổng điểm ${diemTongket} `
  // }else if (diemTongket < diemChuan){
  //   document.getElementById("result").innerHTML = `bạn đã rớt. Tổng điểm ${diemTongket} `
  // }
     hienThi(diem1El,diem2El,diem3El,diemTongket,diemChuan);
}

function hienThi(diem1El,diem2El, diem3El,diemTongket,diemChuan) {
// var diemTongket = diem1El + diem2El + diem3El + diemDoituong + diemKhuvuc;
 if ((diem1El <=0 && diem2El <= 0) || (diem1El <= 0 && diem3El <= 0) ||(diem2El<= 0 && diem3El <= 0)){
    document.getElementById("result").innerHTML = `bạn đã rớt do có môn nhỏ hơn hoặc bằng 0 `
  }else if (diem1El <= 0 || diem2El <= 0 || diem3El <= 0){
    document.getElementById("result").innerHTML = `bạn đã rớt do có môn nhỏ hơn hoặc bằng 0 `
  }else if (diemTongket > diemChuan ){
    document.getElementById("result").innerHTML = `bạn đã đậu. Tổng điểm ${diemTongket} `
  }else if (diemTongket < diemChuan){
    document.getElementById("result").innerHTML = `bạn đã rớt. Tổng điểm ${diemTongket} `
  }
}
function tinhdiemdoituong(doiTuong) {
  switch (doiTuong) {
    case "A1":
      return 2.5;
    case "B2":
      return 1.5;
    case "C3":
      return 1;
    default:
      return 0;
  }
}
function tinhdiemKhuvuc(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}
