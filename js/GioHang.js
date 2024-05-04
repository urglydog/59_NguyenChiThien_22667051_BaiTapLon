$(document).ready(function () {
    // Khởi tạo giỏ hàng
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var i=0;
    $("#btn-gh-g1").click(function (e) {
        e.preventDefault();
        ++i;
        var productName = $(this).attr('name');
        var price = $(this).val();

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        var existingProductIndex = cart.findIndex(function(item) {
            return item.name === productName;
        });

        if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng
            cart[existingProductIndex].quantity++;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
            cart.push({
                name: productName,
                price: price,
                quantity: i
            });
        }

        // Lưu giỏ hàng vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng sản phẩm " + productName + " Giá: " + price + " với số lượng: "+i);

    });

    $("#btn-m-g1").click(function (e) {
        e.preventDefault();
        window.location.href = "GioHang.html";
    });
});
