var area = document.getElementById('search');//select宣告
var list = document.querySelector('.locationList');//li宣告
var place = document.querySelector('.place');//區域標題宣告
var data = [
  {
    Name: "杯子",
    Price: "NT100",
    photo: " "
  },
  {
    Name: "杯子",
    Price: "NT150",
    Photo: "https://d.ecimg.tw/items/DEBW1IA9007I9K6/000001_1619591656.jpg"
  },
  {
    Name: "杯子",
    Price: "NT100",
    Photo: "https://img.my-best.tw/press_eye_catches/e17f4215af433bc4786718384a2373c6.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=1400&h=787&fit=crop"
  },
  {
    Name: "杯子",
    Price: "NT100",
    Photo: "https://www.starbucks.com.tw/common/objects/images/shop/product/20200309180812783.jpg"
  },

  {
    Name: "盤子",
    Price: "NT100",
    photo: ""

  },
  {
    Name: "盤子",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "盤子",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "盤子",
    Price: "NT100",
    photo: ""

  },
  {
    Name: "盤子",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "碗",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "碗",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "碗",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "碗",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "碗",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "叉子",
    Price: "NT100",
    photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E5%8F%891.jpg"
  },
  {
    Name: "叉子",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "叉子",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "叉子",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "叉子",
    Price: "NT100",
    photo: ""
  },
  {
    Name: "叉子",
    Price: "NT100",
    photo: ""
  }

]

var len = data.length;//獲取country陣列數
// console.log(len)//確認有無抓到數值程式對不對
function updateList(e) {
  //顯示資料
  var search = e.target.value;//了解目前所在元素位置
  var str = '';

  //內容區
  for (var i = 0; i < len; i++) {
    if (search == data[i].Name) {
      str +=
        ` 
      <li> 
        <div class="place_list">
        <img src="${data[i].Picture1}" alt="商品照片" width=100% height=250px;>
          <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p> 
        </div>
      </li>`
    }
  }
  list.innerHTML = str;//插入內容  

}

var el = document.querySelector(".popularplace1");//苓雅區按鈕
el.addEventListener('click', function (e) {
  var search = e.target.value;//了解目前所在元素位置
  var str = '';

  //內容區
  for (var i = 0; i < len; i++) {
    if (search == data[i].Name) {
      str +=
        ` 
      <li> 
        <div class="place_list">
        <img src="${data[i].Picture1}" alt="商品照片" width=100% height=250px;>
          <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p> 
        </div>
      </li>`
    }
  }
  list.innerHTML = str;//插入內容  

})
var el = document.querySelector(".popularplace2");//三民區按鈕
el.addEventListener('click', function (e) {
  var search = e.target.value;//了解目前所在元素位置
  var str = '';

  //內容區
  for (var i = 0; i < len; i++) {
    if (search == data[i].Name) {
      str +=
        ` 
      <li> 
        <div class="place_list">
        <img src="${data[i].Picture1}" alt="商品照片" width=100% height=250px;>
          <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p> 
        </div>
      </li>`
    }
  }
  list.innerHTML = str;//插入內容   

})
var el = document.querySelector(".popularplace3");//美濃區按鈕
el.addEventListener('click', function (e) {
  var search = e.target.value;//了解目前所在元素位置
  var str = '';

  //內容區
  for (var i = 0; i < len; i++) {
    if (search == data[i].Name) {
      str +=
        ` 
    <li> 
      <div class="place_list">
      <img src="${data[i].Picture1}" alt="商品照片" width=100% height=250px;>
        <p>
        ${data[i].Name}</p>
        <p>
        ${data[i].Price}</p> 
      </div>
    </li>`
    }
  }
  list.innerHTML = str;//插入內容  

})
var el = document.querySelector(".popularplace4");//茂林區按鈕
el.addEventListener('click', function (e) {
  var search = e.target.value;//了解目前所在元素位置
  var str = '';

  //內容區
  for (var i = 0; i < len; i++) {
    if (search == data[i].Name) {
      str +=
        ` 
      <li> 
        <div class="place_list">
        <img src="${data[i].Picture1}" alt="商品照片" width=100% height=250px;>
          <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p> 
        </div>
      </li>`
    }
  }
  list.innerHTML = str;//插入內容  

})
// 圖片


area.addEventListener('change', updateList)//事件監聽