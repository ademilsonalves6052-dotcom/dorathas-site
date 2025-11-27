/**
 * Blog Scheduler - Sistema de Automação de Publicação Semanal
 * 
 * Este módulo gerencia a publicação automática de artigos do blog
 * com uma frequência semanal (toda segunda-feira às 9h da manhã)
 */

class BlogScheduler {
  constructor() {
    this.publishedArticles = this.loadPublishedArticles();
    this.scheduleNextPublication();
  }

  /**
   * Carrega a lista de artigos já publicados do localStorage
   */
  loadPublishedArticles() {
    const stored = localStorage.getItem('publishedBlogArticles');
    return stored ? JSON.parse(stored) : [];
  }

  /**
   * Salva a lista de artigos publicados no localStorage
   */
  savePublishedArticles() {
    localStorage.setItem('publishedBlogArticles', JSON.stringify(this.publishedArticles));
  }

  /**
   * Calcula o próximo horário de publicação (segunda-feira às 9h)
   */
  getNextPublicationTime() {
    const now = new Date();
    const nextMonday = new Date(now);
    
    // Calcula o próximo dia útil (segunda-feira)
    const dayOfWeek = nextMonday.getDay();
    const daysUntilMonday = (1 - dayOfWeek + 7) % 7 || 7;
    nextMonday.setDate(nextMonday.getDate() + daysUntilMonday);
    
    // Define a hora para 9h da manhã
    nextMonday.setHours(9, 0, 0, 0);
    
    return nextMonday;
  }

  /**
   * Agenda a próxima publicação
   */
  scheduleNextPublication() {
    const nextPublicationTime = this.getNextPublicationTime();
    const now = new Date();
    const timeUntilPublication = nextPublicationTime.getTime() - now.getTime();

    console.log(`Próxima publicação agendada para: ${nextPublicationTime.toLocaleString('pt-BR')}`);

    // Configura o timeout para a próxima publicação
    setTimeout(() => {
      this.publishWeeklyArticle();
      // Reagenda para a próxima semana
      this.scheduleNextPublication();
    }, timeUntilPublication);
  }

  /**
   * Publica um artigo semanal
   */
  publishWeeklyArticle() {
    const articles = this.getArticles();
    
    if (articles.length === 0) {
      console.log('Nenhum artigo disponível para publicação');
      return;
    }

    // Seleciona o próximo artigo a ser publicado (rotação)
    const nextArticleIndex = this.publishedArticles.length % articles.length;
    const articleToPublish = articles[nextArticleIndex];

    // Marca como publicado
    this.publishedArticles.push({
      id: articleToPublish.id,
      publishedDate: new Date().toISOString(),
      weekNumber: this.getWeekNumber(new Date())
    });

    this.savePublishedArticles();

    // Notifica sobre a publicação
    this.notifyPublication(articleToPublish);
    
    console.log(`Artigo publicado: ${articleToPublish.title}`);
  }

  /**
   * Obtém a lista de artigos disponíveis
   */
  getArticles() {
    // Esta função seria chamada para buscar os artigos do arquivo JSON
    // ou de uma API externa
    return [
      {
        id: 'inovacoes-usinagem',
        title: 'Inovações em Usinagem CNC: Transformando a Produção Industrial'
      },
      {
        id: 'sustentabilidade-plasticos',
        title: 'Sustentabilidade na Indústria de Plásticos: O Papel dos Moinhos Fresa'
      },
      {
        id: 'moldes-precisao',
        title: 'Desenvolvimento de Moldes de Precisão: A Base da Qualidade em Injeção'
      }
    ];
  }

  /**
   * Calcula o número da semana do ano
   */
  getWeekNumber(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  }

  /**
   * Notifica sobre a publicação (pode ser integrado com email, SMS, etc)
   */
  notifyPublication(article) {
    // Aqui você pode adicionar lógica para:
    // - Enviar email para inscritos
    // - Postar nas redes sociais
    // - Atualizar feed RSS
    // - Notificar via push
    
    const notification = {
      type: 'blog_published',
      article: article,
      timestamp: new Date().toISOString(),
      message: `Novo artigo publicado: ${article.title}`
    };

    // Dispara evento customizado
    window.dispatchEvent(new CustomEvent('blogArticlePublished', { detail: notification }));
  }

  /**
   * Obtém os artigos publicados em uma determinada semana
   */
  getPublishedArticlesForWeek(weekNumber) {
    return this.publishedArticles.filter(article => article.weekNumber === weekNumber);
  }

  /**
   * Obtém o histórico de publicações
   */
  getPublicationHistory() {
    return this.publishedArticles;
  }

  /**
   * Reseta o agendador (útil para testes)
   */
  reset() {
    this.publishedArticles = [];
    this.savePublishedArticles();
    this.scheduleNextPublication();
  }
}

// Exporta a instância única do scheduler
export const blogScheduler = new BlogScheduler();

export default BlogScheduler;

