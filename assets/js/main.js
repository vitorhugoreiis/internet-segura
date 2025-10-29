document.addEventListener('DOMContentLoaded', function() {
  // Gerenciamento de todos os modais
  const modals = {
    solutions: document.getElementById('solutionModal'),
    tips: document.getElementById('modal')
  };

  // Conteúdo das soluções para cada golpe e dica
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

  // ========================================
  // SISTEMA DE ANALYTICS SIMPLES E RÁPIDO
  // ========================================
  
  class SimpleAnalytics {
    constructor() {
      this.storageKey = 'internet-segura-analytics';
      this.data = this.loadData();
      this.init();
    }

    loadData() {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
      return {
        totalVisits: 0,
        dailyVisits: {},
        pageViews: 0,
        uniqueVisitors: 0,
        lastVisit: null,
        sessionStart: Date.now(),
        referrers: {},
        devices: {},
        browsers: {},
        countries: {},
        firstVisit: Date.now()
      };
    }

    saveData() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    init() {
      this.trackVisit();
      this.trackPageView();
      this.updateDisplay();
      this.trackDevice();
      this.trackBrowser();
      
      // Salvar dados a cada 30 segundos
      setInterval(() => this.saveData(), 30000);
      
      // Salvar ao fechar a página
      window.addEventListener('beforeunload', () => this.saveData());
    }

    trackVisit() {
      const today = new Date().toDateString();
      const now = Date.now();
      
      // Verificar se é uma nova sessão (mais de 30 minutos desde a última visita)
      const lastVisit = this.data.lastVisit;
      const isNewSession = !lastVisit || (now - lastVisit) > 30 * 60 * 1000;
      
      if (isNewSession) {
        this.data.totalVisits++;
        this.data.uniqueVisitors++;
        this.data.lastVisit = now;
        
        // Contar visitas diárias
        if (!this.data.dailyVisits[today]) {
          this.data.dailyVisits[today] = 0;
        }
        this.data.dailyVisits[today]++;
        
        // Rastrear referrer
        const referrer = document.referrer || 'Direct';
        if (!this.data.referrers[referrer]) {
          this.data.referrers[referrer] = 0;
        }
        this.data.referrers[referrer]++;
      }
    }

    trackPageView() {
      this.data.pageViews++;
    }

    trackDevice() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const device = isMobile ? 'Mobile' : 'Desktop';
      
      if (!this.data.devices[device]) {
        this.data.devices[device] = 0;
      }
      this.data.devices[device]++;
    }

    trackBrowser() {
      const userAgent = navigator.userAgent;
      let browser = 'Unknown';
      
      if (userAgent.includes('Chrome')) browser = 'Chrome';
      else if (userAgent.includes('Firefox')) browser = 'Firefox';
      else if (userAgent.includes('Safari')) browser = 'Safari';
      else if (userAgent.includes('Edge')) browser = 'Edge';
      
      if (!this.data.browsers[browser]) {
        this.data.browsers[browser] = 0;
      }
      this.data.browsers[browser]++;
    }

    updateDisplay() {
      // Atualizar contadores principais
      const visitCounter = document.getElementById('visit-counter');
      const sessionCounter = document.getElementById('session-counter');
      const pageViewsCounter = document.getElementById('page-views');
      const uniqueVisitorsCounter = document.getElementById('unique-visitors');
      
      if (visitCounter) {
        visitCounter.textContent = this.data.totalVisits.toLocaleString('pt-BR');
      }
      
      if (sessionCounter) {
        const today = new Date().toDateString();
        const todayVisits = this.data.dailyVisits[today] || 0;
        sessionCounter.textContent = todayVisits.toLocaleString('pt-BR');
      }

      if (pageViewsCounter) {
        pageViewsCounter.textContent = this.data.pageViews.toLocaleString('pt-BR');
      }

      if (uniqueVisitorsCounter) {
        uniqueVisitorsCounter.textContent = this.data.uniqueVisitors.toLocaleString('pt-BR');
      }

      // Atualizar estatísticas detalhadas
      this.updateDetailedStats();
    }

    updateDetailedStats() {
      const stats = this.getStats();
      
      // Atualizar dispositivos
      const deviceStats = document.getElementById('device-stats');
      if (deviceStats) {
        deviceStats.innerHTML = Object.entries(stats.deviceStats)
          .map(([device, count]) => `<span class="device-item">${device}: ${count.toLocaleString('pt-BR')}</span>`)
          .join(' | ');
      }

      // Atualizar navegadores
      const browserStats = document.getElementById('browser-stats');
      if (browserStats) {
        browserStats.innerHTML = Object.entries(stats.browserStats)
          .map(([browser, count]) => `<span class="browser-item">${browser}: ${count.toLocaleString('pt-BR')}</span>`)
          .join(' | ');
      }

      // Atualizar média diária
      const averageDaily = document.getElementById('average-daily');
      if (averageDaily) {
        const statNumber = averageDaily.querySelector('.stat-number');
        if (statNumber) {
          statNumber.textContent = stats.averageVisitsPerDay.toLocaleString('pt-BR');
        }
      }

      // Atualizar última atualização
      const lastUpdate = document.getElementById('last-update');
      if (lastUpdate) {
        const timeText = lastUpdate.querySelector('.time-text');
        if (timeText) {
          timeText.textContent = new Date().toLocaleTimeString('pt-BR');
        }
      }
    }

    getStats() {
      const today = new Date().toDateString();
      const todayVisits = this.data.dailyVisits[today] || 0;
      const daysSinceFirst = Math.ceil((Date.now() - this.data.firstVisit) / (1000 * 60 * 60 * 24));
      
      return {
        totalVisits: this.data.totalVisits,
        todayVisits: todayVisits,
        pageViews: this.data.pageViews,
        uniqueVisitors: this.data.uniqueVisitors,
        averageVisitsPerDay: Math.round(this.data.totalVisits / Math.max(daysSinceFirst, 1)),
        topReferrers: Object.entries(this.data.referrers)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 5),
        deviceStats: this.data.devices,
        browserStats: this.data.browsers,
        lastVisit: this.data.lastVisit,
        firstVisit: this.data.firstVisit
      };
    }

    exportData() {
      const stats = this.getStats();
      const dataToExport = {
        ...stats,
        rawData: this.data,
        exportDate: new Date().toISOString(),
        projectName: 'Internet Segura e Sem Mistérios'
      };
      
      const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analytics-internet-segura-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    generateReport() {
      const stats = this.getStats();
      const report = `
RELATÓRIO DE ANALYTICS - INTERNET SEGURA
========================================

Período: ${new Date(stats.firstVisit).toLocaleDateString('pt-BR')} até ${new Date().toLocaleDateString('pt-BR')}

MÉTRICAS PRINCIPAIS:
• Total de Visitas: ${stats.totalVisits.toLocaleString('pt-BR')}
• Visitas Hoje: ${stats.todayVisits.toLocaleString('pt-BR')}
• Visualizações de Página: ${stats.pageViews.toLocaleString('pt-BR')}
• Visitantes Únicos: ${stats.uniqueVisitors.toLocaleString('pt-BR')}
• Média de Visitas/Dia: ${stats.averageVisitsPerDay.toLocaleString('pt-BR')}

DISPOSITIVOS:
${Object.entries(stats.deviceStats).map(([device, count]) => `• ${device}: ${count.toLocaleString('pt-BR')}`).join('\n')}

NAVEGADORES:
${Object.entries(stats.browserStats).map(([browser, count]) => `• ${browser}: ${count.toLocaleString('pt-BR')}`).join('\n')}

PRINCIPAIS REFERRERS:
${stats.topReferrers.map(([ref, count]) => `• ${ref}: ${count.toLocaleString('pt-BR')}`).join('\n')}

ÚLTIMA ATUALIZAÇÃO: ${new Date().toLocaleString('pt-BR')}
      `;
      
      return report;
    }
  }

  // Inicializar analytics
  window.analytics = new SimpleAnalytics();

  // Adicionar botões de controle (se existir a seção de stats)
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const controlsHTML = `
      <div class="analytics-controls" style="margin-top: 20px; text-align: center;">
        <button onclick="window.analytics.exportData()" class="export-btn" style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin: 5px; cursor: pointer;">
          📊 Exportar Dados
        </button>
        <button onclick="alert(window.analytics.generateReport())" class="report-btn" style="background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin: 5px; cursor: pointer;">
          📋 Gerar Relatório
        </button>
        <button onclick="window.analytics.updateDisplay()" class="refresh-btn" style="background: #ffc107; color: black; border: none; padding: 10px 20px; border-radius: 5px; margin: 5px; cursor: pointer;">
          🔄 Atualizar
        </button>
      </div>
    `;
    statsSection.insertAdjacentHTML('beforeend', controlsHTML);
  }

  // Atualizar display a cada 5 segundos
  setInterval(() => {
    if (window.analytics) {
      window.analytics.updateDisplay();
    }
  }, 5000);

  // Funções auxiliares para o dashboard
  window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Relatório copiado para a área de transferência!');
    }).catch(() => {
      // Fallback para navegadores mais antigos
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Relatório copiado para a área de transferência!');
    });
  };

  window.showDetailedStats = function() {
    const modal = document.getElementById('detailed-stats-modal');
    const content = document.getElementById('detailed-content');
    
    if (window.analytics) {
      const stats = window.analytics.getStats();
      
      content.innerHTML = `
        <div class="detailed-stats-content">
          <h4>📊 Resumo Executivo</h4>
          <div class="stats-summary">
            <p><strong>Período:</strong> ${new Date(stats.firstVisit).toLocaleDateString('pt-BR')} até ${new Date().toLocaleDateString('pt-BR')}</p>
            <p><strong>Total de Visitas:</strong> ${stats.totalVisits.toLocaleString('pt-BR')}</p>
            <p><strong>Visitas Hoje:</strong> ${stats.todayVisits.toLocaleString('pt-BR')}</p>
            <p><strong>Visualizações de Página:</strong> ${stats.pageViews.toLocaleString('pt-BR')}</p>
            <p><strong>Visitantes Únicos:</strong> ${stats.uniqueVisitors.toLocaleString('pt-BR')}</p>
            <p><strong>Média Diária:</strong> ${stats.averageVisitsPerDay.toLocaleString('pt-BR')} visitas/dia</p>
          </div>

          <h4>📱 Dispositivos Utilizados</h4>
          <div class="device-breakdown">
            ${Object.entries(stats.deviceStats).map(([device, count]) => 
              `<div class="device-bar">
                <span class="device-name">${device}</span>
                <div class="device-progress">
                  <div class="device-fill" style="width: ${(count / Math.max(...Object.values(stats.deviceStats))) * 100}%"></div>
                </div>
                <span class="device-count">${count.toLocaleString('pt-BR')}</span>
              </div>`
            ).join('')}
          </div>

          <h4>🌐 Navegadores</h4>
          <div class="browser-breakdown">
            ${Object.entries(stats.browserStats).map(([browser, count]) => 
              `<div class="browser-bar">
                <span class="browser-name">${browser}</span>
                <div class="browser-progress">
                  <div class="browser-fill" style="width: ${(count / Math.max(...Object.values(stats.browserStats))) * 100}%"></div>
                </div>
                <span class="browser-count">${count.toLocaleString('pt-BR')}</span>
              </div>`
            ).join('')}
          </div>

          <h4>🔗 Principais Referrers</h4>
          <div class="referrer-list">
            ${stats.topReferrers.map(([ref, count]) => 
              `<div class="referrer-item">
                <span class="referrer-name">${ref === 'Direct' ? 'Acesso Direto' : ref}</span>
                <span class="referrer-count">${count.toLocaleString('pt-BR')}</span>
              </div>`
            ).join('')}
          </div>

          <div class="export-actions">
            <button onclick="window.analytics.exportData()" class="export-btn">📊 Exportar Dados Completos</button>
            <button onclick="copyToClipboard(window.analytics.generateReport())" class="report-btn">📋 Copiar Relatório</button>
          </div>
        </div>
      `;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  window.closeDetailedStats = function() {
    const modal = document.getElementById('detailed-stats-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  // Fechar modal ao clicar fora
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('detailed-stats-modal');
    if (event.target === modal) {
      closeDetailedStats();
    }
  });
});