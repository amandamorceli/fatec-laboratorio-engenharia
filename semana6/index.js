document.addEventListener('DOMContentLoaded', () => {
    const calculadora = document.querySelector('.calculadora');

    //display
    const display = document.createElement('input');
    display.type = 'text';
    display.className = 'display';
    display.disabled = true;
    calculadora.appendChild(display);
    
    //botões
    const botoesContainer = document.createElement('div');
    botoesContainer.className = 'botoes';
    calculadora.appendChild(botoesContainer);
    
    const botoes = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];
    
    botoes.forEach(botao => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = botao;
        
        // Adiciona classes específicas baseadas no tipo de botão
        if (!isNaN(botao)) {
            btn.classList.add('btn-numero');
        } else if (botao === 'C') {
            btn.classList.add('btn-limpar');
        } else if (botao === '=') {
            btn.classList.add('btn-igual');
        } else {
            btn.classList.add('btn-operador');
        }
        
        // Adiciona evento de clique
        btn.addEventListener('click', function() {
            if (botao === 'C') {
                display.value = '';
            } else if (botao === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Erro';
                }
            } else {
                display.value += botao;
            }
        });
        
        botoesContainer.appendChild(btn);
    });
});