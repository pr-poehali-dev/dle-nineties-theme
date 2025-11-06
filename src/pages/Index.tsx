import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visitorCount] = useState(Math.floor(Math.random() * 99999));

  const newsItems = [
    { id: 1, title: 'Добро пожаловать на наш сайт!', date: '01.01.2025', views: 1337, image: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/308ff8a1-479b-440e-970d-55b05d657aca.jpg' },
    { id: 2, title: 'Обновление дизайна в стиле 90-х', date: '02.01.2025', views: 2048, image: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/7fe473d7-0166-475f-a91d-293722c6a5aa.jpg' },
    { id: 3, title: 'Новый раздел форума открыт', date: '03.01.2025', views: 999, image: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/a824d0e6-c429-4832-80a8-4d9a66b2124a.jpg' }
  ];

  const articles = [
    { id: 1, title: 'История интернета в 90-х', author: 'Admin', category: 'История', image: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/308ff8a1-479b-440e-970d-55b05d657aca.jpg' },
    { id: 2, title: 'Ностальгия по старым сайтам', author: 'WebMaster', category: 'Культура', image: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/7fe473d7-0166-475f-a91d-293722c6a5aa.jpg' },
    { id: 3, title: 'Как создавался DLE', author: 'Developer', category: 'Технологии', image: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/a824d0e6-c429-4832-80a8-4d9a66b2124a.jpg' }
  ];

  const forumTopics = [
    { id: 1, title: 'Приветствие новичков', posts: 42, author: 'Admin' },
    { id: 2, title: 'Ваши любимые сайты 90-х', posts: 156, author: 'OldSchool' },
    { id: 3, title: 'Помощь в создании сайта', posts: 89, author: 'Helper' }
  ];

  const galleryImages = [
    { id: 1, title: 'Компьютер 90-х', url: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/308ff8a1-479b-440e-970d-55b05d657aca.jpg' },
    { id: 2, title: 'Интернет-кафе', url: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/7fe473d7-0166-475f-a91d-293722c6a5aa.jpg' },
    { id: 3, title: 'Vaporwave', url: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/a824d0e6-c429-4832-80a8-4d9a66b2124a.jpg' },
    { id: 4, title: 'Ретро-сетап', url: 'https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/308ff8a1-479b-440e-970d-55b05d657aca.jpg' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/734b8672-7730-41ca-955c-5a979857172c/files/a824d0e6-c429-4832-80a8-4d9a66b2124a.jpg"
                alt="Hero"
                className="w-full h-[400px] object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-background/50 to-background">
                <div className="text-center space-y-4 animate-float">
                  <h1 className="font-retro text-4xl md:text-6xl text-primary retro-text-shadow px-4">
                    <span className="blink">★</span> NINETIES.RU <span className="blink">★</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-accent font-bold">
                    Добро пожаловать в ностальгию!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-effect border-2 border-primary/30 overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="p-6">
                  <h2 className="font-retro text-xl text-primary mb-4 flex items-center gap-2 retro-text-shadow">
                    <Icon name="Newspaper" size={24} />
                    ПОСЛЕДНИЕ НОВОСТИ
                  </h2>
                  <div className="space-y-4">
                    {newsItems.slice(0, 3).map((item) => (
                      <div key={item.id} className="glass-effect p-3 rounded hover:bg-primary/10 transition-colors">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="text-foreground text-lg font-bold mb-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">📅 {item.date}</p>
                          </div>
                          <Badge className="retro-button bg-accent text-accent-foreground font-bold shrink-0">
                            <Icon name="Eye" size={14} className="mr-1" />
                            {item.views}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="glass-effect border-2 border-secondary/30 overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="p-6">
                  <h2 className="font-retro text-xl text-secondary mb-4 flex items-center gap-2 retro-text-shadow">
                    <Icon name="MessageSquare" size={24} />
                    ГОРЯЧИЕ ТЕМЫ
                  </h2>
                  <div className="space-y-4">
                    {forumTopics.map((topic) => (
                      <div key={topic.id} className="glass-effect p-3 rounded hover:bg-secondary/10 transition-colors">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="text-foreground text-lg font-bold mb-1">{topic.title}</h3>
                            <p className="text-muted-foreground text-sm flex items-center gap-1">
                              <Icon name="User" size={14} />
                              {topic.author}
                            </p>
                          </div>
                          <Badge className="retro-button bg-secondary text-secondary-foreground font-bold shrink-0">
                            {topic.posts}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="glass-effect border-2 border-accent/30 p-6 rounded-lg overflow-hidden retro-grid">
              <div className="overflow-hidden">
                <p className="marquee text-2xl font-bold text-accent whitespace-nowrap">
                  🌟 НОВЫЙ РАЗДЕЛ ОТКРЫТ! 🌟 ПОДПИСЫВАЙТЕСЬ НА НОВОСТИ! 🌟 АКТИВНОСТЬ НА ФОРУМЕ! 🌟 RETRO VIBES! 🌟
                </p>
              </div>
            </div>
          </div>
        );

      case 'news':
        return (
          <div className="space-y-6">
            <h1 className="font-retro text-4xl text-primary retro-text-shadow text-center mb-8">
              НОВОСТИ
            </h1>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="glass-effect border-2 border-primary/30 overflow-hidden hover:scale-[1.01] transition-transform">
                  <div className="md:flex">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full md:w-64 h-48 object-cover"
                    />
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-retro text-xl text-secondary">{item.title}</h3>
                        <Badge className="retro-button bg-accent text-accent-foreground font-bold flex items-center gap-1 shrink-0 ml-3">
                          <Icon name="Eye" size={16} />
                          {item.views}
                        </Badge>
                      </div>
                      <p className="text-foreground text-lg mb-4">
                        Погрузитесь в атмосферу 90-х! Узнайте больше о {item.title.toLowerCase()} и откройте для себя мир ностальгии.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">📅 {item.date}</span>
                        <Button className="retro-button bg-primary text-primary-foreground">
                          ЧИТАТЬ ДАЛЕЕ
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'articles':
        return (
          <div className="space-y-6">
            <h1 className="font-retro text-4xl text-secondary retro-text-shadow text-center mb-8">
              СТАТЬИ
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="glass-effect border-2 border-secondary/30 overflow-hidden hover:scale-[1.02] transition-transform">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge className="retro-button bg-accent text-accent-foreground font-bold mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="font-retro text-lg text-primary mb-3">{article.title}</h3>
                    <p className="text-foreground text-base mb-4 leading-relaxed">
                      Увлекательная статья о {article.title.toLowerCase()}. Погрузитесь в мир ностальгии и узнайте интересные факты!
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="User" size={16} />
                        {article.author}
                      </span>
                      <Button className="retro-button bg-secondary text-secondary-foreground">
                        ОТКРЫТЬ
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-6">
            <h1 className="font-retro text-4xl text-accent retro-text-shadow text-center mb-8">
              ГАЛЕРЕЯ
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="glass-effect border-2 border-accent/30 overflow-hidden hover:scale-[1.02] transition-all cursor-pointer group">
                  <div className="relative">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-retro text-xl text-primary retro-text-shadow">{image.title}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'forum':
        return (
          <div className="space-y-6">
            <h1 className="font-retro text-4xl text-secondary retro-text-shadow text-center mb-8">
              ФОРУМ
            </h1>
            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <Card key={topic.id} className="glass-effect border-2 border-secondary/30 p-6 hover:scale-[1.01] transition-transform">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h3 className="font-retro text-xl text-primary flex items-center gap-3 retro-text-shadow">
                      <Icon name="MessageCircle" size={24} className="shrink-0" />
                      {topic.title}
                    </h3>
                    <Badge className="retro-button bg-accent text-accent-foreground font-bold text-base px-4 py-2 shrink-0">
                      {topic.posts} сообщений
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Автор: {topic.author}
                    </span>
                    <Button className="retro-button bg-secondary text-secondary-foreground">
                      ВОЙТИ В ТЕМУ
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="font-retro text-4xl text-primary retro-text-shadow text-center mb-8">
              КОНТАКТЫ
            </h1>
            <Card className="glass-effect border-2 border-primary/30 p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-accent font-bold text-lg mb-2 block">ИМЯ:</label>
                  <Input 
                    className="bg-input/50 text-foreground text-lg p-4 border-2 border-primary/30 focus:border-primary transition-colors"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="text-accent font-bold text-lg mb-2 block">E-MAIL:</label>
                  <Input 
                    type="email"
                    className="bg-input/50 text-foreground text-lg p-4 border-2 border-primary/30 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-accent font-bold text-lg mb-2 block">СООБЩЕНИЕ:</label>
                  <Textarea 
                    className="bg-input/50 text-foreground text-lg p-4 min-h-[180px] border-2 border-primary/30 focus:border-primary transition-colors"
                    placeholder="Напишите ваше сообщение..."
                  />
                </div>
                <Button className="retro-button bg-primary text-primary-foreground w-full text-xl py-6">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </Button>
              </form>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="glass-effect border-2 border-accent/30 p-6 text-center hover:scale-105 transition-transform">
                <Icon name="Mail" size={32} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold text-accent mb-2">EMAIL</h3>
                <p className="text-foreground">info@nineties.ru</p>
              </Card>
              <Card className="glass-effect border-2 border-accent/30 p-6 text-center hover:scale-105 transition-transform">
                <Icon name="Phone" size={32} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold text-accent mb-2">ТЕЛЕФОН</h3>
                <p className="text-foreground">8-800-555-35-35</p>
              </Card>
              <Card className="glass-effect border-2 border-accent/30 p-6 text-center hover:scale-105 transition-transform">
                <Icon name="MapPin" size={32} className="text-accent mx-auto mb-3" />
                <h3 className="font-bold text-accent mb-2">АДРЕС</h3>
                <p className="text-foreground">Москва, ул. Интернет, д. 90</p>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="retro-grid fixed inset-0 opacity-20 pointer-events-none" />
      <MusicPlayer />
      
      <header className="glass-effect border-b-2 border-primary/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/cec63d1a-6b6b-46b9-b5f8-6e861803a68c.png" 
                alt="Nineties.ru"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center gap-4">
              <Badge className="retro-button bg-accent text-accent-foreground font-bold text-base px-4 py-2 flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span className="blink">●</span>
                {visitorCount.toLocaleString()}
              </Badge>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'home', label: 'ГЛАВНАЯ', icon: 'Home' },
              { id: 'news', label: 'НОВОСТИ', icon: 'Newspaper' },
              { id: 'articles', label: 'СТАТЬИ', icon: 'FileText' },
              { id: 'gallery', label: 'ГАЛЕРЕЯ', icon: 'Image' },
              { id: 'forum', label: 'ФОРУМ', icon: 'MessageSquare' },
              { id: 'contact', label: 'КОНТАКТЫ', icon: 'Mail' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`retro-button flex items-center gap-2 text-sm md:text-base ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/80 text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {renderSection()}
      </main>

      <footer className="glass-effect border-t-2 border-primary/30 mt-12 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="glass-effect border-2 border-primary/30 p-4 text-center">
              <h3 className="font-retro text-xs text-primary mb-2">ОНЛАЙН:</h3>
              <p className="text-accent text-3xl font-bold flex items-center justify-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full blink" />
                42
              </p>
            </Card>
            <Card className="glass-effect border-2 border-secondary/30 p-4 text-center">
              <h3 className="font-retro text-xs text-secondary mb-2">СЕГОДНЯ:</h3>
              <p className="text-accent text-3xl font-bold">1337</p>
            </Card>
            <Card className="glass-effect border-2 border-accent/30 p-4 text-center">
              <h3 className="font-retro text-xs text-accent mb-2">ВСЕГО:</h3>
              <p className="text-accent text-3xl font-bold">{visitorCount.toLocaleString()}</p>
            </Card>
            <Card className="glass-effect border-2 border-primary/30 p-4 text-center">
              <h3 className="font-retro text-xs text-primary mb-2">УЧАСТНИКОВ:</h3>
              <p className="text-accent text-3xl font-bold">2048</p>
            </Card>
          </div>

          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Button className="retro-button bg-primary text-primary-foreground px-6 py-2">
                <Icon name="Mail" size={16} className="mr-2" />
                RSS
              </Button>
              <Button className="retro-button bg-secondary text-secondary-foreground px-6 py-2">
                <Icon name="Bell" size={16} className="mr-2" />
                УВЕДОМЛЕНИЯ
              </Button>
            </div>
            
            <p className="text-foreground text-lg font-bold">
              © 1995-2025 NINETIES.RU • Все права защищены
            </p>
            <p className="text-muted-foreground">
              Сделано с <span className="text-destructive blink">♥</span> в стиле настоящих 90-х
            </p>
            <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
              <Badge className="retro-button bg-primary text-primary-foreground font-bold">HTML 3.2</Badge>
              <Badge className="retro-button bg-secondary text-secondary-foreground font-bold">Netscape 4.0+</Badge>
              <Badge className="retro-button bg-accent text-accent-foreground font-bold">Best viewed 800x600</Badge>
              <Badge className="retro-button bg-primary text-primary-foreground font-bold">IE 4.0 Compatible</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;