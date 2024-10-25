"use strict";

// Bai 2
// document.write("Bai2");
// document.write("Hi!How are you ?");
// end bai 2
// Bai3
var buttonBai3 = document.querySelector("[bai3]");

if (buttonBai3) {
  buttonBai3.addEventListener("click", function () {
    alert("Hi! Teacher");
  });
} // end Bai3
// Bai 4


var buttonsBai4 = document.querySelectorAll("[bai4]");

if (buttonsBai4.length > 0) {
  buttonsBai4.forEach(function (button, index) {
    button.addEventListener("click", function () {
      var action = button.getAttribute("bai4");

      switch (action) {
        case "confirm":
          confirm("Are you sure!");
          break;

        case "alert":
          alert("ok");
          break;

        case "wirte":
          document.write("Thank you!");
          break;

        default:
          break;
      }
    });
  });
} // end Bai 4
// bai 5


var formBai5 = document.querySelector("[formBai5]");

if (formBai5) {
  formBai5.addEventListener("submit", function (e) {
    e.preventDefault();
    var age = formBai5.querySelector("input[name='age']").value;

    if (age) {
      if (parseInt(age) >= 18) {
        alert("Thông tin hợp lệ!");
      } else {
        alert("Bạn chưa đủ tuổi");
      }
    } else {
      alert("Ban chua nhap ten va tuoi");
    }
  });
} // end bai 5
// bai 6


var formBai6 = document.querySelector("[formBai6]");

if (formBai6) {
  formBai6.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = eval(formBai6.querySelector("[bieuthuc]").value).toFixed(2);
    console.log(value);
    var span = formBai6.querySelector("[spanBai6]");
    span.innerHTML = value;
  });
} // end bai 6
// bai 7


var bai7 = document.querySelector("[bai7]");

if (bai7) {
  var changeSrceen = bai7.querySelector("input[type='checkbox']");
  changeSrceen.addEventListener("click", function () {
    if (changeSrceen.checked == false) {
      document.body.style.backgroundColor = "white"; //note
    } else {
      document.body.style.backgroundColor = "red"; //note
    }
  });
} // end bai 7
// bai 8


var formBai8 = document.querySelector("[bai8]");

if (formBai8) {
  var actionRadio = formBai8.querySelectorAll("[action]");
  var tat = formBai8.querySelector("input[action='tat']");
  var bat = formBai8.querySelector("input[action='bat']");
  actionRadio.forEach(function (item) {
    item.addEventListener("click", function () {
      //   if (item.checked) {
      //     item.checked = false;
      //   } else {
      //     item.checked = true;
      //   }
      var value = item.getAttribute("action");

      switch (value) {
        case "bat":
          if (item.checked == true) {
            document.body.style.backgroundColor = "red";
            tat.checked = false;
          }

          break;

        case "tat":
          if (item.checked) {
            document.body.style.backgroundColor = "white";
            bat.checked = false;
          }

          break;

        default:
          break;
      }
    });
  });
} // end bai 8
// bai 9


var formBai9 = document.querySelector("[formBai9]");

if (formBai9) {
  formBai9.addEventListener("submit", function (e) {
    e.preventDefault();
    var user = formBai9.querySelector(".fullname").value;
    var password = formBai9.querySelector(".password").value;

    if (!user && password) {
      alert("Bạn chưa nhập Username");
    }

    if (!password && user) {
      alert("Bạn chưa nhập password");
    }

    if (!user && !password) {
      alert("Bạn chưa nhập userName và password");
    }
  });
} //end bai 9
// bai 10


var formBai10 = document.querySelector("[formBai10]");

if (formBai10) {
  formBai10.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputInfors = formBai10.querySelectorAll("input"); // console.log(inputInfor);

    var inforArray = [];
    inputInfors.forEach(function (item) {
      inforArray.push(item.value);
    });

    if (inforArray.length > 0) {
      var formInfor = document.querySelector("[infor]");
      formInfor.classList.add("active");
      var spans = formInfor.querySelectorAll("span");
      spans.forEach(function (span, index) {
        span.innerHTML = inforArray[index] || "";
      });
    }
  });
} // end bai 10
// Bai 11


var genders = document.querySelectorAll("[gender]");

if (genders.length > 0) {
  var formBai11 = document.querySelector("[formBai11]"); // console.log(formBai11);

  var man = document.querySelector("#man");
  var wonman = document.querySelector("#wonman");
  var button = formBai11.querySelector("[buttonGender]");
  button.addEventListener("click", function () {
    var genders = formBai11.querySelectorAll("[gender]");
    var str = "";
    genders.forEach(function (item) {
      if (item.checked) {
        str = item.getAttribute("gender");
      }
    });

    if (str != "") {
      alert("Gi\u1EDBi t\xEDnh ".concat(str));
    }
  });
} // end Bai 11
// bai 12


var checkBoxZingMp3 = document.querySelector("[zingMp3]");

if (checkBoxZingMp3) {
  checkBoxZingMp3.addEventListener("change", function () {
    if (checkBoxZingMp3.checked === true) {
      setTimeout(function () {
        alert("Bạn vừa thích ZingMp3.vn");
      }, 200);
    } else {
      setTimeout(function () {
        alert("Bạn vừa bỏ thích ZingMp3.vn");
      }, 200);
    }
  });
} // end bai 12