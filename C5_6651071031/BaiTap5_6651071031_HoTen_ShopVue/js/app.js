const { createApp } = Vue;

createApp({
  data() {
    return {
      products: [
        { id: 1, ten: "Ốp lưng xanh điện",     anh: "../images/op-lung.svg",        gia: 250000, moTa: "Silicon mềm, chống sốc, ôm máy vừa vặn." },
        { id: 2, ten: "Tai nghe bluetooth",    anh: "../images/tai-nghe.svg",       gia: 450000, moTa: "Pin 20 giờ, âm bass mạnh, kết nối nhanh." },
        { id: 3, ten: "Đế sạc không dây",      anh: "../images/sac-khong-day.svg",  gia: 320000, moTa: "Sạc không dây 15W, đèn báo trạng thái." },
        { id: 4, ten: "Cáp sạc Type-C 1m",     anh: "../images/cap-sac.svg",        gia: 90000,  moTa: "Bọc dù chống đứt, hỗ trợ sạc nhanh." },
        { id: 5, ten: "Củ sạc nhanh 33W",      anh: "../images/sac-nhanh.svg",      gia: 280000, moTa: "Hai cổng USB, tự ngắt khi đầy pin." },
        { id: 6, ten: "Tai nghe TWS Active",   anh: "../images/airpods.svg",        gia: 590000, moTa: "Chống ồn chủ động, hộp sạc nhỏ gọn." },
        { id: 7, ten: "Giá đỡ điện thoại",     anh: "../images/gia-do.svg",         gia: 120000, moTa: "Gập gọn, xoay nhiều góc, đế chống trượt." },
        { id: 8, ten: "Pin dự phòng 10000mAh", anh: "../images/pin-du-phong.svg",   gia: 390000, moTa: "Mỏng nhẹ, 2 cổng ra, có đèn hiển thị." }
      ],
      cart: [],      // Mảng giỏ hàng
      tuKhoa: ""
    };
  },
  computed: {
    
    cartCount() {
      return this.cart.length;
    },

    // Tổng tiền: cộng giá của mọi sản phẩm trong giỏ
    tongTien() {
      return this.cart.reduce((tong, sp) => tong + sp.gia, 0);
    },
    danhSachLoc() {
      const k = this.tuKhoa.trim().toLowerCase();
      if (k === "") return this.products;
      return this.products.filter(sp => sp.ten.toLowerCase().includes(k));
    }
  },
  methods: {
    themVaoGio(sanPham) {
      this.cart.push(sanPham);
    },
    xoaKhoiGio(index) {
      this.cart.splice(index, 1);
    },

    dinhDangGia(so) {
      return so.toLocaleString("vi-VN") + " VND";
    }
  }
}).mount("#app");
