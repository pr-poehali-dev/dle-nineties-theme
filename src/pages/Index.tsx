import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visitorCount] = useState(Math.floor(Math.random() * 99999));

  const newsItems = [
    { id: 1, title: 'Добро пожаловать на наш сайт!', date: '01.01.2025', views: 1337 },
    { id: 2, title: 'Обновление дизайна в стиле 90-х', date: '02.01.2025', views: 2048 },
    { id: 3, title: 'Новый раздел форума открыт', date: '03.01.2025', views: 999 }
  ];

  const articles = [
    { id: 1, title: 'История интернета в 90-х', author: 'Admin', category: 'История' },
    { id: 2, title: 'Ностальгия по старым сайтам', author: 'WebMaster', category: 'Культура' },
    { id: 3, title: 'Как создавался DLE', author: 'Developer', category: 'Технологии' }
  ];

  const forumTopics = [
    { id: 1, title: 'Приветствие новичков', posts: 42, author: 'Admin' },
    { id: 2, title: 'Ваши любимые сайты 90-х', posts: 156, author: 'OldSchool' },
    { id: 3, title: 'Помощь в создании сайта', posts: 89, author: 'Helper' }
  ];

  const galleryImages = [
    { id: 1, title: 'Компьютер 90-х' },
    { id: 2, title: 'Дискета 3.5"' },
    { id: 3, title: 'CD-ROM диск' },
    { id: 4, title: 'Модем' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4 animate-float">
              <h1 className="font-retro text-4xl md:text-6xl text-primary retro-text-shadow">
                <span className="blink">★</span> WELCOME <span className="blink">★</span>
              </h1>
              <p className="text-2xl text-accent">
                Добро пожаловать на наш ретро-портал!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-4 border-primary pixel-corners animate-pulse-glow">
                <h2 className="font-retro text-xl text-secondary mb-4 flex items-center gap-2">
                  <Icon name="Newspaper" size={24} />
                  ПОСЛЕДНИЕ НОВОСТИ
                </h2>
                <div className="space-y-3">
                  {newsItems.slice(0, 3).map((item) => (
                    <div key={item.id} className="border-2 border-primary p-3 hover:bg-primary/10 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-foreground text-lg">{item.title}</span>
                        <Badge className="bg-accent text-black font-bold">{item.views}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{item.date}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card border-4 border-secondary pixel-corners animate-pulse-glow">
                <h2 className="font-retro text-xl text-accent mb-4 flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} />
                  ГОРЯЧИЕ ТЕМЫ
                </h2>
                <div className="space-y-3">
                  {forumTopics.map((topic) => (
                    <div key={topic.id} className="border-2 border-secondary p-3 hover:bg-secondary/10 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-foreground text-lg">{topic.title}</span>
                        <Badge className="bg-secondary text-black font-bold">{topic.posts}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">Автор: {topic.author}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="border-4 border-accent bg-accent/20 p-4 pixel-corners">
              <div className="overflow-hidden">
                <p className="marquee text-2xl font-bold text-accent whitespace-nowrap">
                  🌟 НОВЫЙ РАЗДЕЛ ОТКРЫТ! 🌟 ПОДПИСЫВАЙТЕСЬ НА НОВОСТИ! 🌟 АКТИВНОСТЬ НА ФОРУМЕ! 🌟
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
            <div className="space-y-4">
              {newsItems.map((item) => (
                <Card key={item.id} className="p-6 bg-card border-4 border-primary pixel-corners hover:translate-x-1 hover:translate-y-1 transition-transform">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-retro text-xl text-secondary">{item.title}</h3>
                    <Badge className="bg-accent text-black font-bold flex items-center gap-1">
                      <Icon name="Eye" size={16} />
                      {item.views}
                    </Badge>
                  </div>
                  <p className="text-foreground text-lg mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">📅 {item.date}</span>
                    <Button className="retro-button bg-primary text-background">
                      ЧИТАТЬ
                    </Button>
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
                <Card key={article.id} className="p-6 bg-card border-4 border-secondary pixel-corners hover:scale-105 transition-transform">
                  <Badge className="bg-accent text-black font-bold mb-3">{article.category}</Badge>
                  <h3 className="font-retro text-lg text-primary mb-3">{article.title}</h3>
                  <p className="text-foreground text-lg mb-4">
                    Увлекательная статья о {article.title.toLowerCase()}. Погрузитесь в мир ностальгии!
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Icon name="User" size={16} />
                      {article.author}
                    </span>
                    <Button className="retro-button bg-secondary text-background">
                      ОТКРЫТЬ
                    </Button>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="p-4 bg-card border-4 border-accent pixel-corners hover:animate-pulse-glow transition-all cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-3 pixel-corners">
                    <Icon name="Image" size={48} className="text-background" />
                  </div>
                  <p className="text-foreground text-center font-bold">{image.title}</p>
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
                <Card key={topic.id} className="p-6 bg-card border-4 border-secondary pixel-corners hover:translate-x-1 hover:translate-y-1 transition-transform">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-retro text-xl text-primary flex items-center gap-2">
                      <Icon name="MessageCircle" size={24} />
                      {topic.title}
                    </h3>
                    <Badge className="bg-accent text-black font-bold text-lg px-4 py-2">
                      {topic.posts} сообщений
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Автор: {topic.author}
                    </span>
                    <Button className="retro-button bg-secondary text-background">
                      ВОЙТИ
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6 max-w-2xl mx-auto">
            <h1 className="font-retro text-4xl text-primary retro-text-shadow text-center mb-8">
              КОНТАКТЫ
            </h1>
            <Card className="p-8 bg-card border-4 border-primary pixel-corners">
              <form className="space-y-6">
                <div>
                  <label className="text-accent font-bold text-xl mb-2 block">ИМЯ:</label>
                  <Input 
                    className="border-4 border-primary bg-input text-foreground text-lg p-3"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="text-accent font-bold text-xl mb-2 block">E-MAIL:</label>
                  <Input 
                    type="email"
                    className="border-4 border-primary bg-input text-foreground text-lg p-3"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-accent font-bold text-xl mb-2 block">СООБЩЕНИЕ:</label>
                  <Textarea 
                    className="border-4 border-primary bg-input text-foreground text-lg p-3 min-h-[150px]"
                    placeholder="Напишите ваше сообщение..."
                  />
                </div>
                <Button className="retro-button bg-primary text-background w-full text-xl py-4">
                  ОТПРАВИТЬ
                </Button>
              </form>
            </Card>

            <Card className="p-6 bg-card border-4 border-secondary pixel-corners">
              <h2 className="font-retro text-xl text-secondary mb-4">НАШИ КОНТАКТЫ:</h2>
              <div className="space-y-3 text-lg">
                <p className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span className="text-foreground">info@retro90s.ru</span>
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span className="text-foreground">8-800-555-35-35</span>
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <span className="text-foreground">Москва, ул. Интернет, д. 90</span>
                </p>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent pixel-corners animate-pulse-glow" />
              <h1 className="font-retro text-2xl md:text-3xl text-primary retro-text-shadow">
                RETRO<span className="text-secondary">90s</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-accent text-black font-bold text-lg px-4 py-2 flex items-center gap-2">
                <Icon name="Users" size={16} />
                {visitorCount.toLocaleString()}
              </Badge>
            </div>
          </div>

          <nav className="flex flex-wrap gap-2">
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
                    ? 'bg-primary text-background'
                    : 'bg-secondary text-background'
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>

      <footer className="border-t-4 border-primary bg-card/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4 bg-card border-2 border-primary pixel-corners">
              <h3 className="font-retro text-sm text-primary mb-2">ОНЛАЙН:</h3>
              <p className="text-accent text-2xl font-bold flex items-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full blink" />
                42
              </p>
            </Card>
            <Card className="p-4 bg-card border-2 border-secondary pixel-corners">
              <h3 className="font-retro text-sm text-secondary mb-2">СЕГОДНЯ:</h3>
              <p className="text-accent text-2xl font-bold">1337</p>
            </Card>
            <Card className="p-4 bg-card border-2 border-accent pixel-corners">
              <h3 className="font-retro text-sm text-accent mb-2">ВСЕГО:</h3>
              <p className="text-accent text-2xl font-bold">{visitorCount.toLocaleString()}</p>
            </Card>
          </div>

          <div className="text-center space-y-2">
            <p className="text-foreground text-lg">
              © 2025 RETRO90s • Все права защищены
            </p>
            <p className="text-muted-foreground">
              Сделано с <span className="text-destructive blink">♥</span> в стиле 90-х
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Badge className="bg-primary text-background font-bold">HTML 3.2</Badge>
              <Badge className="bg-secondary text-background font-bold">Best viewed 800x600</Badge>
              <Badge className="bg-accent text-black font-bold">IE 4.0+</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
