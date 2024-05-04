$(document).ready(function(){
    $("#txttentaikhoan").blur(function(e) {
        e.preventDefault();
        let tendangnhap = $("#txttentaikhoan").val();
        let reg_tendangnhap = /^[a-zA-Z0-9]+$/; // khac rong

        if (tendangnhap == "") {
            $("#loitentaikhoan").html("Tên đăng nhập không được để trống");
            $("#txttentaikhoan").focus();
        } else if (!reg_tendangnhap.test(tendangnhap)) {
            $("#loitentaikhoan").html("Tên đăng nhập phải ít nhất 1 ký tự, không được chứa khoảng trắng");
            $("#txttentaikhoan").focus();
        } else {
            $("#loitentaikhoan").html("");
        }
    });
    $("#txtmk").blur(function (e) { 
        e.preventDefault();
        let mk = $("#txtmk").val();
        let reMK = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/
        if(mk==""){
            $("#loimk").html("Mật khẩu không được để trống");
            $("#txtmk").focus();
        }else if(!reMK.test(mk)){
            $("#loimk").html("Từ 8 ký tự trở lên, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ");
            $("#txtmk").focus();
        }else{
            $("#loimk").html("");
        }
    });
    $("#txtxnmk").blur(function (e) { 
        e.preventDefault();
        let xnmk = $("#txtxnmk").val();
        let mk = $("#txtmk").val();
        if(xnmk==""){
            $("#loixnmk").html("Xác nhận mật khẩu không được rỗng");
            $("#loixnmk").focus();
        }else if(xnmk!=mk){
            $("#loixnmk").html("Vui lòng xác nhận lại mật khẩu");
            $("#txtxnmk").focus();
        }else{
            $("#loixnmk").html("");
        }
    });
    $("#txthoten").blur(function (e) { 
        e.preventDefault();
        let name = $("#txthoten").val();
        let rename = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/
        if(name==""){
            $("#loihoten").html("Họ tên không được rỗng");
        }else if(!rename.test(name)){
            $("#loihoten").html("Ít nhất 2 từ, viết hoa chữ cái mỗi từ, mỗi từ cách nhau dấu cách");
            $("#txthoten").focus();
        }else{
            $("#loihoten").html("*");
        }
    });
    $("#txtdiachi").blur(function (e) { 
        e.preventDefault();
        let dc = $("#txtdiachi").val();
        if(dc==""){
            $("#loidiachi").html("Địa chỉ không được để trống");
            $("#txtdiachi").focus();
        }else{
            $("#loidiachi").html("");
        }
    });
    $("#txtsdt").blur(function (e) { 
        e.preventDefault();
        let dt = $("#txtsdt").val();
        let reDt = /^(0[2-7]|(09))[0-9]{8}$/
        if(dt==""){
            $("#loisdt").html("SĐT không được rỗng");
            $("#txtsdt").focus();
        }else if(!reDt.test(dt)){
            $("#loisdt").html("Phải bắt đầu là 02,03,04,05,06,07 hoặc 09, gồm 10 số");
            $("#txtsdt").focus();
        }else{
            $("#loisdt").html("");
        }
    });
    $("#txtemail").blur(function (e) { 
        e.preventDefault();
        let email = $("#txtemail").val();
        let reEmail = /^[a-zA-Z0-9]+\@[a-zA-Z]+\.(com)$/
        if(email==""){
            $("#loiemail").html("Email không được rỗng");
            $("#txtemail").focus();
        }else if(!reEmail.test(email)){
            $("#loiemail").html("Phải đúng định dạng");
            $("#txtemail").focus();
        }else{
            $("#loiemail").html("");
        }
    });

  
    $("#btn-dk").click(function (e) { 
        e.preventDefault();
        
        
        let username,password,hoten,gioitinh,email,sodienthoai,diachi, anhdaidien;
        username = $("#txttentaikhoan").val();
        password = $("#txtmk").val();
        hoten = $("#txthoten").val();
        gioitinh=$("input[type='radio']:checked").val();
        email = $("#txtemail").val();
        sodienthoai = $("#txtsdt").val();
        diachi = $("#txtdiachi").val();
        var inputImg = $("#avatar")[0];
        

        if (inputImg.files && inputImg.files.length > 0) {
            anhdaidien = inputImg.files[0].name;
        }
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("hoten", hoten);
        localStorage.setItem("gioitinh", gioitinh);
        localStorage.setItem("email", email);
        localStorage.setItem("sodienthoai",sodienthoai)
        localStorage.setItem("diachi", diachi);
        localStorage.setItem("anhdaidien", anhdaidien);
        alert("Đăng kí thành công");
        window.location.href = "thongTinDangKi.html";
    });

    // đăng nhập khi đã có tài khoản

    $("#btn-dn").click(function (e) { 
        e.preventDefault();
        let username = $("#txtemail-dn").val();
        let password = $("#txtmk-dn").val();
        // Kiểm tra xem tài khoản có tồn tại trong localStorage không
        if(localStorage.getItem("username") && localStorage.getItem("password") === password) {
            // Nếu tìm thấy và password khớp, chuyển hướng đến trang mua sắm
            window.location.href = "GioiThieu.html";
        } else {
            // Nếu không tìm thấy hoặc password không khớp, hiển thị thông báo lỗi
            $("#loiDangNhap").html("Tên đăng nhập hoặc mật khẩu không đúng.");
        }
    });
})