// Lấy phần tử nút và thêm sự kiện nhấp chuột
document.getElementById("toggleButton").addEventListener("click", function () {
  // Chuyển đổi class 'dark-mode' cho body
  document.body.classList.toggle("dark-mode");

  // Lưu trạng thái vào localStorage để duy trì chế độ khi tải lại trang
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Kiểm tra trạng thái đã lưu trong localStorage khi tải trang
window.addEventListener("load", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
