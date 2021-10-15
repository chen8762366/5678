var area = document.getElementById('search'); //select宣告
var list = document.querySelector('.locationList'); //li宣告
var place = document.querySelector('.place'); //區域標題宣告
var data = [{
        Name: "杯子",
        Price: "NT100",
        photo: " https://raw.githubusercontent.com/chen8762366/5678/main/img/%E6%9D%AF1.jpg"
    },
    {
        Name: "杯子",
        Price: "NT150",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E6%9D%AF2.jpg"
    },
    {
        Name: "杯子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E6%9D%AF3.jpg"
    },
    {
        Name: "杯子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E6%9D%AF4.jpg"
    },

    {
        Name: "盤子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%9B%A41.jpg"

    },
    {
        Name: "盤子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%9B%A42.jpg"
    },
    {
        Name: "盤子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%9B%A43.jpg"
    },
    {
        Name: "盤子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%9B%A44.jpg"

    },
    {
        Name: "盤子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%9B%A45.jpg"
    },
    {
        Name: "碗",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%A2%971.jpg"
    },
    {
        Name: "碗",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%A2%972.jpg"
    },
    {
        Name: "碗",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%A2%973.jpg"
    },
    {
        Name: "碗",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%A2%974.jpg"
    },
    {
        Name: "碗",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E7%A2%975.jpg"
    },
    {
        Name: "叉子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E5%8F%891.jpg"
    },
    {
        Name: "叉子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E5%8F%892.jpg"
    },
    {
        Name: "叉子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E5%8F%893.jpg"
    },
    {
        Name: "叉子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E5%8F%894.jpg"
    },
    {
        Name: "叉子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E5%8F%895.jpg"
    },
    {
        Name: "叉子",
        Price: "NT100",
        photo: "https://raw.githubusercontent.com/chen8762366/5678/main/img/%E5%8F%896.jpg"
    }

]

var len = data.length; //獲取country陣列數
// console.log(len)//確認有無抓到數值程式對不對
function updateList(e) {
    //顯示資料
    var search = e.target.value; //了解目前所在元素位置
    var str = '';
    var search;
    if (!e) {
        search = ''
    } else {
        search = e.target.value;
    }
    //內容區
    for (var i = 0; i < len; i++) {
        if (search == data[i].Name) {
            str +=
                `
      <li>
        <div class="place_list">
        <a href="#p1" class="button">
        <img src="${data[i].photo}" alt="商品照片" width=100% height=250px;>
            </a>
        <a href="#" class="lightbox" id="p1">
            <img src="${data[i].photo}" width=60% height=auto;>
        </a>
        <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p>
        </div>
      </li>`
        }
    }
    list.innerHTML = str; //插入內容

}

var el = document.querySelector(".button1"); //盤子按鈕
el.addEventListener('click', function(e) {
    var search = e.target.value; //了解目前所在元素位置
    var str = '';

    //內容區
    for (var i = 0; i < len; i++) {
        if (search == data[i].Name) {
            str +=
                `
      <li>
        <div class="place_list">
        <a href="#p2" class="button">
        <img src="${data[i].photo}" alt="商品照片" width=100% height=250px;>
            </a>
        <a href="#" class="lightbox" id="p2">
            <img src="${data[i].photo}" width=60% height=auto;>
        </a>  <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p>
        </div>
      </li>`
        }
    }
    list.innerHTML = str; //插入內容

})
var el = document.querySelector(".button2"); //碗按鈕
el.addEventListener('click', function(e) {
    var search = e.target.value; //了解目前所在元素位置
    var str = '';

    //內容區
    for (var i = 0; i < len; i++) {
        if (search == data[i].Name) {
            str +=
                `
      <li>
        <div class="place_list">
       <a href="#p3" class="button">
        <img src="${data[i].photo}" alt="商品照片" width=100% height=250px;>
            </a>
        <a href="#" class="lightbox" id="p3">
            <img src="${data[i].photo}" width=60% height=auto;>
        </a>   <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p>
        </div>
      </li>`
        }
    }
    list.innerHTML = str; //插入內容

})
var el = document.querySelector(".button3"); //叉子按鈕
el.addEventListener('click', function(e) {
    var search = e.target.value; //了解目前所在元素位置
    var str = '';

    //內容區
    for (var i = 0; i < len; i++) {
        if (search == data[i].Name) {
            str +=
                `
    <li>
      <div class="place_list">
      <a href="#p4" class="button">
        <img src="${data[i].photo}" alt="商品照片" width=100% height=250px;>
            </a>
        <a href="#" class="lightbox" id="p4">
            <img src="${data[i].photo}" width=60% height=auto;>
        </a>
        <p>
        ${data[i].Name}</p>
        <p>
        ${data[i].Price}</p>
      </div>
    </li>`
        }
    }
    list.innerHTML = str; //插入內容

})
var el = document.querySelector(".button4"); //杯子按鈕
el.addEventListener('click', function(e) {
        var search = e.target.value; //了解目前所在元素位置
        var str = '';

        //內容區
        for (var i = 0; i < len; i++) {
            if (search == data[i].Name) {
                str +=
                    `
      <li>
        <div class="place_list">
        <a href="#p5" class="button">
        <img src="${data[i].photo}" alt="商品照片" width=100% height=250px;>
            </a>
        <a href="#" class="lightbox" id="p5">
            <img src="${data[i].photo}" width=60% height=auto;>
        </a> <p>
          ${data[i].Name}</p>
          <p>
          ${data[i].Price}</p>
        </div>
      </li>`
            }
        }
        list.innerHTML = str; //插入內容

    })
    // 圖片
area.addEventListener('change', updateList) //事件監聽