searchButton.addEventListener("click", async () => {
    const query = searchQueryInput.value.trim();
    if (query === "") {
      showMessage("Vui lòng nhập từ khóa tìm kiếm.", "error");
      return;
    }
  
    currentQuery = query;
    offset = 0;
    hasMore = true;
    tracksList.innerHTML = "";
    searchTracks(query, true);
  });
  // Hàm hiển thị và ẩn thông báo trạng thái khi có sự kiện loading
function showLoading(show) {
    if (show) {
      statusDiv.style.display = "block"; // Hiển thị khi loading
    } else {
      setTimeout(() => {
        statusDiv.style.display = "none"; // Ẩn sau một khoảng thời gian
      }, 300); // Thời gian ẩn sau khi tải xong (ví dụ 300ms)
    }
  }
  
  // Khi có lỗi
  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type === "success" ? "success" : "error-message";
    setTimeout(() => {
      messageDiv.textContent = "";
      messageDiv.className = "";
    }, 5000);
  }
  
  // Cập nhật lại phần khi tìm kiếm
  searchButton.addEventListener("click", async () => {
    const query = searchQueryInput.value.trim();
    if (query === "") {
      showMessage("Vui lòng nhập từ khóa tìm kiếm.", "error");
      return;
    }
  
    currentQuery = query;
    offset = 0;
    hasMore = true;
    tracksList.innerHTML = "";
    showMessage("", "");
    showLoading(true); // Hiển thị thông báo khi bắt đầu tải
    searchTracks(query, true);
  });
  

  let currentBannerIndex = 0;
  const banners = document.querySelectorAll('.banner-slide');
  const totalBanners = banners.length;
  
  function changeBanner() {
    console.log("Changing banner"); // Kiểm tra xem hàm có được gọi không
    
    // Ẩn banner hiện tại
    banners[currentBannerIndex].style.left = '-100%';
    
    // Cập nhật chỉ mục banner hiện tại
    currentBannerIndex = (currentBannerIndex + 1) % totalBanners;
    
    // Hiển thị banner tiếp theo
    banners[currentBannerIndex].style.left = '0'; // Di chuyển vào vị trí 0
  }
  
  // Thay đổi banner mỗi 2 giây
  setInterval(changeBanner, 2000);
  
  // Ban đầu hiển thị banner đầu tiên
  banners[currentBannerIndex].style.left = '2'; // Đảm bảo banner đầu tiên hiển thị
  