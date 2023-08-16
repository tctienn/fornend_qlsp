// const name ='login_token';
export const taocock = (name,token,time) => {
    // console.log(name)
    document.cookie = name+"=" + token + ";   max-age="+ time +"; path=/"; //Thuộc tính httpOnly cho biết cookie không thể được truy cập bởi mã JavaScript, nhằm ngăn chặn các cuộc tấn công XSS
    //  thời gian tồn tại 600 phút
    //Thuộc tính secure cho biết cookie chỉ được gửi qua giao thức HTTPS, nhằm bảo vệ cookie khỏi bị đánh cắp bởi các bên thứ ba
}

export function getCookie(name) {
    // Lấy tất cả các cookie
    let cookies = document.cookie;
    // Tách chuỗi thành mảng các cặp khóa-giá trị
    let cookieArray = cookies.split(';');
    // Duyệt qua mảng để tìm khóa mong muốn
    for (let i = 0; i < cookieArray.length; i++) {
      // Loại bỏ khoảng trắng thừa
      let cookiePair = cookieArray[i].trim();
      // Kiểm tra xem khóa có khớp với tên không
      if (cookiePair.indexOf(name + '=') == 0) {
        // Trả về giá trị của cookie
        // console.log(cookiePair.substring(name.length + 1, cookiePair.length))
        return cookiePair.substring(name.length + 1, cookiePair.length);  // cắt chuỗi bỏ đi phần name 
      }
    }
    // Nếu không tìm thấy khóa, trả về null
    console.log('không tìm thấy khóa cookie nào cả ')
    return null;
  }


  