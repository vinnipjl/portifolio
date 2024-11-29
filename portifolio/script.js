document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    alert('Obrigado pelo seu contato, ' + document.getElementById('name').value + '!');
  });

  