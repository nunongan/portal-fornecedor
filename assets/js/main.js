$(document).ready(function () {
  //📈 Gráficos 📈
  // Criação de Gráficos

  $(function () {
    var xValues = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio", // Definição dos valores do eixo horizontal (X)
      "Junho", // Sendo eles os meses.
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    var yValues = [160, 175, 175, 155, 190]; // 📅 Valores do eixo vertical (Y). Cada número corresponde a um mês. Existem meses sem registo.
    var lineColor = "#5660ed"; // 📈  Variável para a cor da linha do gráfico
    var transparentBackground = "transparent"; // 🎨   Variável para a cor de fundo do gráfico

    var ctx = $("#myChart");
    if ($("#myChart").length) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: xValues,
          datasets: [
            {
              label: "Fornecedores Registados por Mês", // Atribuição de uma etiqueta
              borderColor: lineColor, // Definição da cor da borda da etiqueta
              backgroundColor: transparentBackground, // Definição da cor de fundo
              data: yValues, // Associação dos dados a serem analisados (Eixo Y)
            },
          ],
        },
        options: {
          legend: {
            display: true, // Mostrar legenda
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true, // Valor minimo ser 0
                  max: 200, // Valor máximo da tabela ser 200
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "#000000",
                  fontSize: 14,
                  stepSize: 1,
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  });

  $(function () {
    var ctx = $("#nrAdjChart");
    if ($("#nrAdjChart").length) {
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            // 🏷️ Criação das Etiquetas
            "AD Simplificado",
            "AD Regime Geral",
            "AD Critérios Materiais",
            "Concurso Público",
            "Consulta Prévia",
          ],
          datasets: [
            {
              backgroundColor: [
                // 🎨 Atribuição de cores para cada etiqueta
                "#fbbb3d",
                "#2fabe9",
                "#fa5832",
                "#2488ba",
                "#79cd51",
              ],
              data: [9691, 464, 145, 155, 402], //📈 Dados de cada etiqueta
            },
          ],
        },
        options: {
          legend: {
            position: "bottom", // ⬇️ Definida a posição da legenda
          },
          canvas: {
            height: 500, // 📏 Altura do Gráfico
            width: 500, // 📏 Largura do Gráfico
          },
        },
      });
    }
  });

  $(function () {
    var ctx = $("#valAdjChart");
    if ($("#valAdjChart").length) {
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            "AD Regime Geral",
            "AD Critérios Materiais",
            "AD Simplificado",
            "Concurso Público",
            "Consulta Prévia",
          ],
          datasets: [
            {
              backgroundColor: [
                "#fbbb3d",
                "#2fabe9",
                "#fa5832",
                "#2488ba",
                "#79cd51",
              ],
              data: [
                6176503.08, 10656386.96, 8396560.89, 40594545.87, 14306192.53,
              ],
            },
          ],
        },
        options: {
          legend: {
            position: "bottom",
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var value = data.datasets[0].data[tooltipItem.index];
                return (
                  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €" // ❓ Expressão Regular para adicionar o separador de milhares e adicionar o símbolo de "€" no fim do número
                );
              },
            },
          },
        },
      });
    }
  });

  // ❓ Definição de algumas variáveis globais ❓

  var popup = $("#popup");
  var popupEnter = $(".popupEnter");
  var triggerCard = $(".accessBtn");
  var closeCard = $(".closeCard");
  var hamburger = $("#hamburgerMenu");
  var button = $("nav:not(.tabs) button");
  var otherButton = $("button.registerBtn");

  // ⚙️ Função de Botões - Index ⚙️
  // ✅ Regista qual foi o botão que foi clicado
  // ❌ Remove a class "active" do botão anteriormente ativo
  // ✅ Adiciona a class "active" ao novo botão clicado

  $(button).click(function () {
    var $clickedButton = $(this);

    if (!$clickedButton.hasClass("active")) {
      $("button.active").removeClass("active");
    }

    if (
      $clickedButton.hasClass("btn-primary") ||
      $clickedButton.hasClass("btn-secondary") ||
      $clickedButton.hasClass("registerBtn")
    ) {
      $clickedButton.addClass("active");
    }
  });

  // 🏠 Botão de Registo - Index 🏠
  // ✅ Regista qual foi o botão que foi clicado
  // ❌ Remove a class "active" do botão anteriormente ativo
  // ✅ Adiciona a class "active" ao novo botão clicado

  $(otherButton).click(function () {
    var $clickedButton = $(this);

    if (!$clickedButton.hasClass("active")) {
      $("button.active").removeClass("active");
    }

    if ($clickedButton.hasClass("registerBtn")) {
      $clickedButton.addClass("active");
    }
  });

  // ⚙️ Menu Hamburger - Mobile ⚙️
  // ✅ Regista qual foi o botão que foi clicado
  // ❌ Remove a class "active" do botão anteriormente ativo

  $(hamburger).click(function () {
    var $clickedButton = $(this);

    if (!$clickedButton.hasClass("active")) {
      $("button.active").removeClass("active");
    }
  });

  // 💬 Função de Trigger Pop Up 💬
  // Se não estiver no index.html, aparece um card de login flutuante.
  // Se estiver no index.html, dá scroll até à área de login

  if ($("body").attr("id") !== "index") {
    $(triggerCard).click(function () {
      triggerCard.attr("aria-expanded", "true");
      triggerCard.addClass("active");
      popup.css("visibility", "visible");
      popup.css("opacity", "100%");

      $(popupEnter).click(function () {
        popupEnter.addClass("active");
      });
    });
  }

  if ($("body").attr("id") === "index") {
    var input = $("input#nifnipc1");

    $(triggerCard).click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#loginCard").offset().top,
        },
        "slow"
      );

      input.focus();
    });
  }

  // ⚙️ Botão de Fechar Pop Up ⚙️

  $(closeCard).click(function () {
    triggerCard.removeClass("active");
    triggerCard.attr("aria-expanded", "false");
    if (popupEnter.hasClass("active")) {
      popupEnter.removeClass("active");
    }
    popup.css("visibility", "hidden");
    popup.css("opacity", "0%");

    $("#nifnipc, #passwordPopUp").val("").removeClass("is-invalid"); // apaga qualquer texto inserido nos inputs do pop up
    $("#popup label").removeClass("text-danger"); // apaga qualquer texto inserido nos inputs do pop up
    $("#popup .invalid-feedback").remove(); // apaga qualquer texto inserido nos inputs do pop up
  });

  // 🧹 Botão de Limpar Pesquisa 🧹

  $(".clean").click(function () {
    var obj = $("input#objContrato");
    var type = $("select#tipoPub");
    var ref = $("input#refPub");
    var from = $("input#dataPubDe");
    var to = $("input#dataPubAte");
    var situation = $("select#situacao");
    var entCont = $("input#entCont");
    var tipoCont = $("select#tipoCont");

    obj.val("");
    type.val("");
    ref.val("");
    from.val(""); // define o texto de todos os inputs a vazio
    to.val("");
    situation.val("");
    entCont.val("");
    tipoCont.val("");
  });

  // 🏳️ Banner Inicial 🏳️

  $(".banner2").css("display", "none"); // Define o 2º slide do banner como invisível, para ser mostrado apenas um

  let flag = false; // Criação de variável para o temporizador
  let interval = null; // Criação de uma variável para definição de intervalo entre slides
  let isPaused = false; // Variable to track the pause state

  // 📏Banner Height 📏
  // Vai buscar todos os containers da banner e compara as suas alturas
  // O que tiver maior altura irá ser o min-height de todas as banners.

  var bannerContainers = $(".banner-container");

  // Variável que guarda a altura maior
  var maxHeight = 0;

  // Ciclo para precorrer todas as banners
  bannerContainers.each(function () {
    // Obter a altura de uma banner
    var height = $(this).height();

    // Comparar alturas
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  // Definir altura da maior banner como o min-height
  bannerContainers.css("min-height", maxHeight + "px");

  // 🎠 Função de Reprodução Automática do Banner 🎠

  function bannerAutoplay() {
    interval = setInterval(function () {
      if (!flag) {
        $(".banner1").animate({ opacity: 0 }, 500);
        $(".banner2").animate({ opacity: 1 }, 500);
      } else {
        $(".banner2").animate({ opacity: 0 }, 500);
        $(".banner1").animate({ opacity: 1 }, 500);
      }
      flag = !flag;
    }, 5000);
  }
  bannerAutoplay();

  // ⏯️ Play and Pause ⏯️
  $(".controller-pausePlay").click(function () {
    if (!isPaused) {
      clearInterval(interval);
      interval = null;
      isPaused = true;
      $(this).text("Continue Slide");
    } else {
      bannerAutoplay();
      isPaused = false;
      $(this).text("Pause Slide");
    }
  });

  // ⏩ Next Slide ⏩
  $(".controller-next").click(function () {
    if (!flag) {
      $(".banner1").animate({ opacity: 0 }, 500);
      $(".banner2").animate({ opacity: 1 }, 500);
    } else {
      $(".banner2").animate({ opacity: 0 }, 500);
      $(".banner1").animate({ opacity: 1 }, 500);
    }
    flag = !flag;
  });

  // ⏪ Previous Slide ⏪
  $(".controller-prev").click(function () {
    if (flag) {
      $(".banner2").animate({ opacity: 0 }, 500);
      $(".banner1").animate({ opacity: 1 }, 500);
    } else {
      $(".banner1").animate({ opacity: 0 }, 500);
      $(".banner2").animate({ opacity: 1 }, 500);
    }
    flag = !flag;
  });
  // ✅ Validação de Formulários ✅

  // 🔘 Grupos de Botões 🔘

  function checkRadioGroupValidity(radioGroupName) {
    return $(`input[name="${radioGroupName}"]:required`).is(":checked"); // Verifica se, num grupo de botões, um deles está selecionado.
  }

  // 📨 Botão de Envio 📨

  $("form").submit(function () {
    var valid = true;
    $(this)
      .find(".form-control[required]")
      .each(function () {
        if ($(this).val() == "") {
          $(this).addClass("is-invalid");
          valid = false;
        } else {
          $(this).removeClass("is-invalid");
        }
      });
    return valid;
  });

  // ✅ Validação por Tabs ✅

  // Como o formulário presente é dividido em várias tabs, é feita uma validação Tab a Tab, não permitindo o utilizador seguir em frente com campos inválidos, mas
  // permitindo-o sempre voltar atrás um Tab, para rever.

  function validateTabContent(tabContent) {
    var valid = true; // É invocada uma variável bool "valid" que começa a true

    // Para todos os inputs com a class "form-control"

    tabContent.find(".form-control[required]").each(function () {
      // Procura todos os elementos do documento que tenham a class "form-control" e sejam "required"

      var fieldName = $(this).parent().find("label span.labelText").text(); // Encontra o nome de cada campo
      var invalidFeedback = $(this).parent().find(".invalid-feedback"); // Variável para a mensagem de alerta dos Screen Readers

      if (
        // Foi criado uma condição IF para o caso de o elemento em questão for um select para dia, mês ou ano,
        $(this).is("select#dia") || // uma vez que são dividos em 3 selects, serão 3 campos obrigatórios.
        $(this).is("select#mes") || // É colocado o operador lógico OU, para o caso de UM deles estar errado.
        $(this).is("select#ano")
      ) {
        invalidFeedback = $(this)
          .parent()
          .parent()
          .find("div.divValidade .invalid-feedback");

        if ($(this).val() == "" || $(this).val() == null) {
          // Validação de inputs
          $(this).addClass("is-invalid");
          $(this).parent().find("label").addClass("text-danger");
          if (invalidFeedback.length > 0) {
            invalidFeedback.text("Data Inválida"); // Prevenir que seja invocada a mensagem de erro mais do que uma vez
          } else {
            $(this).parent().parent().find("div.divValidade").append(
              '<span role="alert" class="invalid-feedback d-block">Data Inválida</span>' // Mensagem de erro a ser apresentada
            );
          }
          valid = false; // Se algum campo for inválido, a variável valid passa a false.
        } else {
          $(this).removeClass("is-invalid");
          $(this).parent().find("label").removeClass("text-danger");
          invalidFeedback.remove();
        }
      } else if ($(this).val() == "" || $(this).val() == null) {
        $(this).addClass("is-invalid");
        $(this).parent().find("label").addClass("text-danger");
        if (invalidFeedback.length > 0) {
          invalidFeedback.text(
            'Campo "' + fieldName + '" incorreto ou não preenchido.' // Validação para todos os outros inputs que tenham a class "form-control"
          );
        } else {
          $(this)
            .parent()
            .append(
              '<span role="alert" class="invalid-feedback">Campo "' +
                fieldName +
                '" incorreto ou não preenchido.</span>'
            );
        }
        valid = false;
      } else {
        $(this).removeClass("is-invalid");
        $(this).parent().find("label").removeClass("text-danger");
        invalidFeedback.remove();
      }
    });

    // Para todos os inputs do tipo "radio" que sejam "required"

    tabContent.find("input:radio[required]").each(function () {
      var fieldName = $(this).parent().find("label span.labelText").text();
      var invalidFeedback = $(this)
        .parent()
        .parent()
        .parent()
        .find(".invalid-feedback");
      if (!$(this).is(":checked")) {
        $(this).addClass("is-invalid");
        $(this).parent().find("label").addClass("text-danger");
        if (invalidFeedback.length > 0) {
          invalidFeedback.text(
            "Para prosseguir, esta opção deve ser selecionada."
          );
        } else {
          $(this)
            .parent()
            .parent()
            .parent()
            .append(
              '<div class="col-12 inputDiv"><span role="alert" class="invalid-feedback d-block">Para prosseguir, esta opção deve ser selecionada.</span></div>'
            );
        }
        valid = false;
      } else {
        $(this).removeClass("is-invalid");
        $(this).parent().parent().find("label").removeClass("text-danger");
        invalidFeedback.remove();
      }
    });

    // Para todos os grupos de inputs do tipo "radio" e "required", onde apenas 1 pode ser selecionado

    tabContent.find(".radio-group[data-required=true]").each(function () {
      var radioGroup = $(this);
      var radioChecked = radioGroup.find("input[type=radio]:checked").length;
      var fieldName = radioGroup.find("label span.labelText").text();
      var invalidFeedback = $(this).parent().find(".invalid-feedback");

      if (!radioChecked) {
        radioGroup.find("input[type=radio]").addClass("is-invalid");
        radioGroup.find("label").addClass("text-danger");
        if (invalidFeedback.length > 0) {
          invalidFeedback.text("Por favor, escolha uma das opções.");
        } else {
          radioGroup
            .parent()
            .append(
              '<span role="alert" class="invalid-feedback d-block">Por favor, escolha uma das opções. <span>'
            );
        }
        valid = false;
      } else {
        radioGroup.find("input[type=radio]").removeClass("is-invalid");
        radioGroup.find("label").removeClass("text-danger");
        invalidFeedback.remove();
      }
    });

    return valid;
  }

  // ✅ Validação de formulário de Login do Pop Up ✅

  // Efetua exatamente a mesma validação acima, porém especificamente para os campos do pop up

  function validatePopupFields() {
    var valid = true;

    var nifnipc = $("#nifnipc");
    var nifnipcLabel = nifnipc.parent().find("label span.labelText").text();
    var nifnipcFeedback = nifnipc.parent().find(".invalid-feedback");

    if (nifnipc.val() == "" || nifnipc.val() == null) {
      nifnipc.addClass("is-invalid");
      nifnipc.parent().find("label").addClass("text-danger");
      if (nifnipcFeedback.length > 0) {
        nifnipcFeedback.text(
          'Campo "' + nifnipcLabel + '" incorreto ou não preenchido.'
        );
      } else {
        nifnipc
          .parent()
          .append(
            '<span role="alert" class="invalid-feedback">Campo "' +
              nifnipcLabel +
              '" incorreto ou não preenchido.</span>'
          );
      }
      valid = false;
    } else {
      nifnipc.removeClass("is-invalid");
      nifnipc.parent().find("label").removeClass("text-danger");
      nifnipcFeedback.remove();
    }

    var password = $("#passwordPopUp");
    var passwordLabel = password.parent().find("label span.labelText").text();
    var passwordFeedback = password.parent().find(".invalid-feedback");
    if (password.val() == "" || password.val() == null) {
      password.addClass("is-invalid");
      password.parent().find("label").addClass("text-danger");
      if (passwordFeedback.length > 0) {
        passwordFeedback.text(
          'Campo "' + passwordLabel + '" incorreto ou não preenchido.'
        );
      } else {
        password
          .parent()
          .append(
            '<span role="alert" class="invalid-feedback">Campo "' +
              passwordLabel +
              '" incorreto ou não preenchido.</span>'
          );
      }
      valid = false;
    } else {
      password.removeClass("is-invalid");
      password.parent().find("label").removeClass("text-danger");
      passwordFeedback.remove();
    }

    return valid;
  }

  $(".popupEnter").click(function () {
    if (validatePopupFields()) {
      alert("Logging In... Please close this alert."); // Função de submit do form de login -- O alert será substituido quando ligado ao backend
    }
  });

  // 🚨 Evento de Tabs do Bootstrap 🚨

  // Previne que o utilizador navegue entre tabs, caso a atual esteja com campos inválidos ou incompletos.
  // Chama a função de validação do tab atual quando o utilizador clica numa Tab que não a atual.
  // Caso todos os campos de todas as tabs antes da tab clicada sejam válidos, prossegue para a tab clicada
  // Caso pelo menos um dos campos de uma tab seja inválido, a(s) tab(s) cujo(s) campo(s) é/são inválido(s) apresentam-se a vermelho.

  // $('nav.tabs button[data-bs-toggle="tab"]').on("show.bs.tab", function (e) {
  //   var clickedTab = $(e.target);
  //   var clickedIndex = clickedTab.index();
  //   var currentTab = $("button.nav-link.active");
  //   var currentIndex = currentTab.index();

  //   var tabs = $('button[data-bs-toggle="tab"]');

  //   var allValid = true;

  //   for (var i = 0; i < clickedIndex; i++) {
  //     var tabContent = $($(tabs[i]).data("bs-target"));
  //     if (!validateTabContent(tabContent)) {
  //       $(tabs[i]).addClass("text-danger");
  //       clickedTab.addClass("text-danger");
  //       allValid = false;
  //     }
  //   }

  //   if (!allValid) {
  //     e.preventDefault();
  //     return;
  //   }

  //   tabs.removeClass("text-danger");
  //   invalidFeedback.remove();
  // });

  // function clearValidation() {
  //   $('input.is-invalid, select.is-invalid, textarea.is-invalid').removeClass('is-invalid');
  //   $('input.text-danger, select.text-danger, label.text-danger').removeClass('text-danger');
  //   $('span.invalid-feedback').remove();
  // }

  $('nav.tabs button[data-bs-toggle="tab"]').on("show.bs.tab", function (e) {
    var clickedTab = $(e.target);
    var clickedIndex = clickedTab.index();
    var currentTab = $("button.nav-link.active");
    var currentIndex = currentTab.index();
    var invalidFeedback = $(this).parent().find(".invalid-feedback");

    var tabs = $('button[data-bs-toggle="tab"]');
    var allValid = true;

    for (var i = 0; i < clickedIndex; i++) {
      var tabContent = $($(tabs[i]).data("bs-target"));
      if (!validateTabContent(tabContent)) {
        $(tabs[i]).addClass("text-danger");
        clickedTab.addClass("text-danger");
        allValid = false;
      }
    }

    if (!allValid) {
      e.preventDefault();
      return;
    }

    tabs.removeClass("text-danger");
    invalidFeedback.remove();

    clearValidation(currentIndex);
  });

  function clearValidation(currentIndex) {
    $("input.is-invalid, select.is-invalid, textarea.is-invalid")
      .not(`.tab-pane:eq(${currentIndex})`)
      .removeClass("is-invalid");
    $("input.text-danger, select.text-danger, label.text-danger")
      .not(`.tab-pane:eq(${currentIndex})`)
      .removeClass("text-danger");
    $("span.invalid-feedback").not(`.tab-pane:eq(${currentIndex})`).remove();
  }

  // ⏭️ Botão Seguinte ⏭️
  // Chama a função de validação e se tudo estiver correto, passa para o tab seguinte.

  $(".next").click(function () {
    var currentTabContent = $(".tab-pane.active.show");
    var currentTab = $("button.nav-link.active");

    if (validateTabContent(currentTabContent)) {
      currentTab.next().tab("show");
      currentTab.next().focus();
    }
  });

  // ⏪ Botão Anterior ⏪
  // Volta para o tab anterior.

  $(".previous").click(function () {
    var currentTab = $("button.nav-link.active");
    currentTab.prev().tab("show");
  });

  // 🎛️ Botão de Rádio "Outro" 🎛️

  // Função específica para o botão que diz respeito ao cargo do Representante de uma entidade seja "outro" que não os listados.
  // Ao acionar este botão, uma caixa de texto inicialmente não clicavél é ativada e de preenchimento obrigatório.

  $("input:radio").change(function () {
    var radio = $(this);

    var input = $("#outroText");

    if (radio.val() == "outro") {
      input.removeAttr("disabled");
      input.removeClass("bg-muted");
      input.attr("required", "");
      input
        .parent()
        .append(
          '<span class="sr-only" role="alert"> Especifique o cargo do representante </span>'
        );
      input.focus();
    } else {
      input.removeClass("is-invalid");
      input.removeAttr("required");
      input.attr("disabled", "true");
    }
  });

  // 🔢 Contador de caracteres 🔢

  // Faz a contagem dos caracteres de uma caixa de texto específica.

  $(".countCharacters").each(countCharacters);
  $(".countCharacters").keyup(countCharacters);

  function countCharacters() {
    var max = $(this).attr("maxlength");
    var length = $(this).val().length;
    var current = length;
    var helperCurrent = $(this).parent().find(".current-characters");
    // Switch to the singular if there's exactly 1 character remaining

    helperCurrent.text(current + "/" + max);
  }

  // 📨 Botão de Envio total de Registo 📨

  $(".submit").click(function (e) {
    var currentTabContent = $(".tab-pane.active.show");
    var currentTab = $("button.nav-link.active");
    var submitBtn = $("button.submitRegister");

    if ($(this).is("button.submitRegister")) {
      e.preventDefault();
      submitBtn.prop("disabled", true);
      submitBtn.text("");
      submitBtn.append(
        '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
      );

      if (validateTabContent(currentTabContent)) {
        setTimeout(function () {
          submitBtn.find("div.spinner-border").fadeOut(200, function () {
            submitBtn.prop("disabled", false);
            submitBtn.text("Registo Enviado!");
            submitBtn.addClass("disabled");
          });
        }, 3000);
      }
    } else {
      if (validateTabContent(currentTabContent)) {
        alert("Validado e Enviado!");
      }
    }
  });

  // 📜 Função de Paginação 📜

  $(".pagination").on("click", "button", function (event) {
    event.preventDefault();

    var datapage = $(this).data("page"); // 🔍 Dentro da paginação, procura elementos onde o atributo data-page está presente

    if (datapage == "first") {
      $(this).parent().first().next().find(`button`).trigger("click"); // ⚙️ Se o atributo data-page tiver o valor "first"
      return; // ⚙️ Uma vez que o primeiro botão da paginação e também "first" é o botão "<<"
    }

    if (datapage == "last") {
      $(this).parent().last().prev().find(`button`).trigger("click"); // ⚙️ Se o atributo data-page tiver o valor "last"
      return; // ⚙️ Uma vez que o ultimo botão da paginação e também "last" é o botão ">>"
    }

    var targetTable = "#table" + $(this).data("page"); // 🔍 Identifica a tabela (tabela1, tabela2, tabela3), pegando no ID da tabela e juntando o sufixo da data-page

    $("table").not(targetTable).addClass("d-none"); // 🌫️ Para todas as tabelas que são as que não foi clicada (na paginação),
    $(targetTable).removeClass("d-none"); // 🌫️ adiciona a class d-none para meter o display de todas a "none" e remove da tabela correspondente ao número de páginação
    $(this)
      .closest("li") // ⚙️ Para o elemento <li> mais próximo da paginação,
      .addClass("active") // ⚙️ adiciona-se a class "active", para ficar com a cor de um botão ativo
      .siblings() // ⚙️ Para todos os restantes <li> da paginação,
      .removeClass("active"); // ⚙️ remove-se a class "active", para ficarem com a cor de um botão não ativo.
  });

  //Quando o modal de Reset Password aparece

  $("#resetPasswordModal").on("shown.bs.modal", function () {
    $(this).find("input").eq(0).focus(); // Foca no primeiro input do Modal, quando o mesmo aparecer
  });

  $("#resetPasswordLink").click(function (event) {
    event.preventDefault();

    $("#resetPasswordModal").modal("show");

    // Add animation class when showing the modal
    $("#resetPasswordModal").on("shown.bs.modal", function () {
      $(this).find(".modal-dialog").addClass("fade");
    });
  });

  $("#closeModal").click(function () {
    // Remove animation class when hiding the modal
    $("#resetPasswordModal").on("hidden.bs.modal", function () {
      $(this).find(".modal-dialog").removeClass("fade");
    });

    $("#resetPasswordModal").modal("hide");
  });
});
