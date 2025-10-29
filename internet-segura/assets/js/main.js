document.addEventListener('DOMContentLoaded', function() {
  // Contador de visitas simples (localStorage)
  function updateVisitCounter() {
    // Contador total de visitas
    let visits = parseInt(localStorage.getItem('siteVisits') || '0');
    visits++;
    localStorage.setItem('siteVisits', visits);
    
    // Contador de sessões diárias
    const today = new Date().toDateString();
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    let dailySessions = parseInt(localStorage.getItem('dailySessions') || '0');
    
    if (lastVisitDate !== today) {
      // Novo dia, resetar contador diário
      dailySessions = 1;
      localStorage.setItem('lastVisitDate', today);
    } else {
      // Mesmo dia, incrementar
      dailySessions++;
    }
    localStorage.setItem('dailySessions', dailySessions);
    
    // Atualizar elementos na página
    const counterElement = document.getElementById('visit-counter');
    const sessionElement = document.getElementById('session-counter');
    
    if (counterElement) {
      counterElement.textContent = visits.toLocaleString('pt-BR');
    }
    
    if (sessionElement) {
      sessionElement.textContent = dailySessions.toLocaleString('pt-BR');
    }
    
    console.log(`📊 Estatísticas atualizadas: ${visits} visitas totais, ${dailySessions} sessões hoje`);
  }
  
  // Chama o contador ao carregar a página
  updateVisitCounter();

  const modals = {
    solutions: document.getElementById('solutionModal'),
    tips: document.getElementById('modal')
  };

  const solutionContent = {
    'whatsapp-ia': {
      icon: '🤖',
      title: 'Clonagem de WhatsApp com IA',
      description: 'Criminosos usam inteligência artificial para clonar vozes e aplicar golpes mais convincentes.',
      steps: [
        'Ative a verificação em duas etapas no WhatsApp',
        'Desconfie de áudios ou chamadas suspeitas',
        'Confirme pessoalmente pedidos de dinheiro',
        'Não compartilhe códigos recebidos por SMS',
        'Use um PIN forte na verificação em duas etapas'
      ],
      tips: 'ALERTA 2025: Os golpistas agora usam IA para imitar vozes com perfeição. Sempre confirme pessoalmente!'
    },
    'investimento': {
      icon: '📈',
      title: 'Falso Investimento',
      description: 'Ofertas de investimentos milagrosos com retornos irreais e garantidos.',
      steps: [
        'Desconfie de retornos muito acima do mercado',
        'Verifique se a empresa é regulamentada pela CVM',
        'Não invista por indicação de desconhecidos',
        'Pesquise sobre a empresa e seus responsáveis',
        'Evite pressão para investir rapidamente'
      ],
      tips: 'CUIDADO: Em 2025, esse golpe já causou prejuízo de R$2.5 bilhões. Se parece bom demais, provavelmente é golpe!'
    },
    // Dicas de segurança
    'senha': {
      icon: '🔒',
      title: 'Senhas Seguras',
      description: 'Use 8+ caracteres, misture maiúsculas, minúsculas, números e símbolos.',
      steps: [
        'Use letras maiúsculas e minúsculas',
        'Adicione números em posições aleatórias',
        'Inclua símbolos como @, !, _, #',
        'Evite sequências óbvias',
        'Nunca use a mesma senha em vários serviços'
      ],
      tips: 'EXEMPLO: Troque "Maria2025" por "M@r!a_2O25" para maior segurança.'
    },
    'pix': {
      icon: '❓',
      title: 'Falsos Comprovantes de Pix',
      description: 'Golpistas criam comprovantes falsos de Pix usando templates e ferramentas de edição de imagem.',
      steps: [
        'Sempre confira o recebimento no app do seu banco',
        'Não confie em screenshots ou imagens de comprovantes',
        'Aguarde a confirmação oficial da transação',
        'Configure notificações do seu banco',
        'Em caso de golpe, registre um boletim de ocorrência'
      ],
      tips: 'ATENÇÃO: A confirmação do Pix é instantânea. Se o dinheiro não apareceu na conta, não foi feito!'
    },
    '2fa': {
      icon: '🔐',
      title: 'Autenticação em 2 Passos',
      description: 'Ative a verificação em duas etapas para maior segurança em todas suas contas.',
      steps: [
        'Abra as configurações do app',
        'Procure por "Segurança" ou "Privacidade"',
        'Ative a verificação em duas etapas',
        'Configure um PIN de segurança',
        'Salve um e-mail de recuperação'
      ],
      tips: 'CONFIGURAÇÃO: No WhatsApp, vá em Configurações → Conta → Verificação em duas etapas'
    },
    'update': {
      icon: '📱',
      title: 'Atualize Seu Aparelho',
      description: 'Mantenha seu celular sempre atualizado para proteção contra falhas de segurança.',
      steps: [
        'Conecte-se a uma rede Wi-Fi',
        'Verifique se há atualizações',
        'Faça backup dos seus dados',
        'Instale as atualizações',
        'Reinicie o aparelho quando solicitado'
      ],
      tips: 'ONDE ENCONTRAR: Acesse Configurações → Sistema → Atualização do sistema'
    },
    'wifi': {
      icon: "📶",
      title: "Wi-Fi Seguro",
      description: "Evite redes desconhecidas. Use dados móveis para transações importantes.",
      steps: [
        'Prefira redes conhecidas e confiáveis',
        'Evite fazer transações em Wi-Fi público',
        'Use dados móveis para apps bancários',
        'Mantenha o Wi-Fi desligado quando não usar',
        'Não salve senhas em redes públicas'
      ],
      tips: 'SEGURANÇA: Nunca faça operações bancárias ou compras em redes Wi-Fi públicas!'
    },
    'emprego': {
      icon: "💼",
      title: "Falsa Vaga de Emprego",
      description: "Golpistas criam vagas falsas para roubar dados pessoais ou dinheiro das vítimas.",
      steps: [
        'Pesquise a empresa no Google e redes sociais',
        'Desconfie de propostas muito vantajosas',
        'Nunca pague por "materiais de treinamento"',
        'Não forneça dados bancários em entrevistas',
        'Verifique o CNPJ da empresa'
      ],
      tips: 'ATENÇÃO: Empresas sérias nunca pedem pagamento para participar de processos seletivos!'
    },
    'premio': {
      icon: "🎯",
      title: "Falso Prêmio",
      description: "Mensagens sobre prêmios, sorteios ou promoções que você não participou.",
      steps: [
        'Ignore mensagens de sorteios desconhecidos',
        'Não clique em links de promoções',
        'Desconfie de prêmios muito altos',
        'Bloqueie remetentes suspeitos',
        'Nunca pague taxas para receber prêmios'
      ],
      tips: 'IMPORTANTE: Se você não participou de nenhum sorteio, não tem como ter ganhado!'
    },
    'ajuda': {
      icon: "🆘",
      title: "Pedido de Ajuda Falso",
      description: "Criminosos se passam por parentes ou amigos pedindo dinheiro emergencial.",
      steps: [
        'Ligue para o número original do contato',
        'Confirme a história com outros familiares',
        'Não faça transferências precipitadas',
        'Verifique se o número é o mesmo de sempre',
        'Pergunte detalhes que só a pessoa saberia'
      ],
      tips: 'CUIDADO: Sempre ligue para o número conhecido do seu contato para confirmar pedidos de dinheiro!'
    },
    'namoro': {
      icon: "❤️",
      title: "Golpe do Romance",
      description: "Golpistas criam perfis falsos em sites de relacionamento para extorquir dinheiro.",
      steps: [
        'Desconfie de estrangeiros muito interessados',
        'Nunca envie dinheiro para desconhecidos',
        'Pesquise as fotos do perfil no Google',
        'Evite compartilhar informações pessoais',
        'Não abra links enviados pelo contato'
      ],
      tips: 'ALERTA: Se alguém que você nunca viu pessoalmente pede dinheiro, é golpe!'
    },
    'sms': {
      icon: '🔗',
      title: 'Links Maliciosos por SMS',
      description: 'Mensagens SMS com links para sites falsos que roubam dados pessoais e bancários.',
      steps: [
        'Nunca clique em links recebidos por SMS',
        'Não forneça dados pessoais por mensagem',
        'Digite manualmente os endereços dos sites que precisa acessar',
        'Mantenha seu antivírus atualizado',
        'Reporte SMS suspeitos para sua operadora'
      ],
      tips: 'DICA: Bancos e empresas oficiais não enviam links por SMS. Sempre acesse os sites oficiais digitando o endereço.'
    },
    'whatsapp-clonado': {
      icon: '⚠️',
      title: 'WhatsApp Clonado',
      description: 'Golpistas tentam roubar sua conta do WhatsApp através de códigos de verificação.',
      steps: [
        'Nunca compartilhe códigos recebidos por SMS',
        'Ative a verificação em duas etapas',
        'Não clique em links suspeitos',
        'Faça logout de sessões web suspeitas',
        'Contate o suporte do WhatsApp se necessário'
      ],
      tips: 'ALERTA: Se suspeitar de clonagem, faça logout de sessões web e contate o suporte do WhatsApp imediatamente!'
    },
    'boleto': {
      icon: '❗',
      title: 'Boleto Falso',
      description: 'Golpistas enviam cobranças falsas através de boletos adulterados.',
      steps: [
        'Sempre confirme via app do banco',
        'Verifique no site oficial antes de pagar',
        'Confira o beneficiário do boleto',
        'Desconfie de cobranças inesperadas',
        'Verifique se os valores estão corretos'
      ],
      tips: 'IMPORTANTE: Desconfie de cobranças inesperadas ou valores diferentes do usual. Sempre confirme no app do seu banco!'
    },
    'entrega': {
      icon: '📦',
      title: 'Entrega Falsa',
      description: 'Golpistas se passam por empresas de entrega para roubar dados.',
      steps: [
        'Não clique em links de tracking desconhecidos',
        'Use apenas sites oficiais das transportadoras',
        'Verifique o remetente do email/SMS',
        'Nunca instale apps por links suspeitos',
        'Confira o código de rastreio no site oficial'
      ],
      tips: 'CUIDADO: Use apenas os sites oficiais das transportadoras para rastrear suas encomendas!'
    },
    'telefone': {
      icon: '📞',
      title: 'Golpes por Telefone',
      description: 'Golpistas ligam se passando por bancos para roubar dados pessoais.',
      steps: [
        'Nunca forneça senhas por telefone',
        'Bancos não pedem dados pessoais',
        'Desligue se pedirem informações sensíveis',
        'Bloqueie números suspeitos',
        'Procure ajuda em caso de dúvida'
      ],
      tips: 'ATENÇÃO: Bancos NUNCA ligam pedindo senhas ou dados pessoais. Em caso de dúvida, bloqueie o número e procure ajuda!'
    },
    'compras': {
      icon: '🛒',
      title: 'Golpes em Compras Online',
      description: 'Sites falsos que imitam lojas conhecidas para roubar dados de cartão e dinheiro.',
      steps: [
        'Verifique se o site tem "https://" e cadeado na URL',
        'Pesquise a reputação da loja em sites confiáveis',
        'Desconfie de preços muito abaixo do mercado',
        'Use cartões virtuais para compras online',
        'Guarde todos os comprovantes e prints das compras'
      ],
      tips: 'PROTEÇÃO: Prefira sites conhecidos e evite ofertas enviadas por WhatsApp ou redes sociais.'
    }
  };

  // Gerenciar modais de solução
  const solutionModal = modals.solutions;
  const closeButtons = document.querySelectorAll('.close-modal');
  
  // Abrir modal ao clicar nos golpes
  document.querySelectorAll('.threat-item').forEach(button => {
    button.addEventListener('click', () => {
      const content = solutionContent[button.dataset.modal];
      console.log('Clicou no golpe:', button.dataset.modal); // Debug
      
      // Preencher conteúdo do modal
      solutionModal.querySelector('.solution-icon').textContent = content.icon;
      solutionModal.querySelector('.solution-title').textContent = content.title;
      
      // Criar conteúdo da solução
      solutionModal.querySelector('.solution-description').textContent = content.description;
      
      // Criar lista de passos
      const stepsHtml = `
        <h4>Como se proteger:</h4>
        <ol>
          ${content.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      `;
      solutionModal.querySelector('.solution-steps').innerHTML = stepsHtml;
      
      // Adicionar dicas
      solutionModal.querySelector('.solution-tips').textContent = content.tips;
      
      // Mostrar modal
      solutionModal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    });
  });
  
  // Fechar modais
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.solution-modal').style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaurar scroll
    });
  });
  
  // Fechar modal ao clicar fora
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('solution-modal')) {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Manipulação dos modais de dicas
  const modalContent = {
    'senha': {
      title: 'Como Criar Senhas Seguras',
      steps: [
        'Use pelo menos 8 caracteres',
        'Combine letras maiúsculas e minúsculas',
        'Adicione números e símbolos',
        'Evite informações pessoais',
        'Use senhas diferentes para cada serviço'
      ]
    },
    '2fa': {
      title: 'Ativar Verificação em Duas Etapas',
      steps: [
        'Abra as configurações do WhatsApp',
        'Acesse "Conta"',
        'Selecione "Verificação em duas etapas"',
        'Configure um PIN de 6 dígitos',
        'Adicione um e-mail de recuperação (opcional)'
      ]
    },
    'update': {
      title: 'Manter o Celular Atualizado',
      steps: [
        'Abra as Configurações do celular',
        'Procure por "Atualização do sistema"',
        'Toque em "Verificar atualizações"',
        'Se houver update, faça backup antes',
        'Instale a atualização e reinicie'
      ]
    },
    'wifi': {
      title: 'Usar Wi-Fi com Segurança',
      steps: [
        'Evite redes públicas para operações sensíveis',
        'Verifique se a rede tem senha',
        'Use dados móveis para apps bancários',
        'Mantenha o Wi-Fi desligado quando não usar',
        'Não salve senhas em redes públicas'
      ]
    }
  };

  // Criar o modal no HTML
  const modalHTML = `
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h3 id="modal-title"></h3>
        <ul id="modal-steps"></ul>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Adicionar estilos do modal
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 1000;
    }
    .modal-content {
      background-color: white;
      margin: 15% auto;
      padding: 2rem;
      border-radius: 0.5rem;
      max-width: 500px;
      position: relative;
    }
    .close-modal {
      position: absolute;
      right: 1rem;
      top: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
    #modal-steps {
      list-style-position: inside;
      padding-left: 0;
    }
    #modal-steps li {
      margin-bottom: 0.5rem;
    }
  `;
  document.head.appendChild(styleSheet);

  // Gerenciar os modais
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSteps = document.getElementById('modal-steps');
  const closeModal = document.querySelector('.close-modal');

  // Abrir modal
  document.querySelectorAll('.ver-mais').forEach(button => {
    button.addEventListener('click', () => {
      const content = modalContent[button.dataset.modal];
      modalTitle.textContent = content.title;
      modalSteps.innerHTML = content.steps
        .map(step => `<li>${step}</li>`)
        .join('');
      modal.style.display = 'block';
    });
  });

  // Fechar modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Validação do formulário
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Aqui você pode adicionar sua lógica de envio do formulário
      alert('Mensagem enviada com sucesso!');
      form.reset();
    });
  }
});