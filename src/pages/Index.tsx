import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 font-body">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-nature-forest rounded-full flex items-center justify-center">
              <Icon name="Leaf" size={16} className="text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-nature-forest">ПсихХаб</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#modules" className="text-gray-600 hover:text-nature-forest transition-colors">Модули</a>
            <a href="#features" className="text-gray-600 hover:text-nature-forest transition-colors">Возможности</a>
            <a href="#pricing" className="text-gray-600 hover:text-nature-forest transition-colors">Тарифы</a>
          </nav>
          <Button className="bg-nature-forest hover:bg-nature-moss">
            Войти в кабинет
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/97b1904a-7d12-49f2-9672-726a374b1b3a.jpg" 
            alt="Nature background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-nature-forest mb-6">
              Трансформация через
              <span className="text-nature-sage"> практики</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Модульная система психологических практик с персональным наставником и интеграцией в Telegram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-nature-forest hover:bg-nature-moss text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Начать практики
              </Button>
              <Button size="lg" variant="outline" className="border-nature-forest text-nature-forest hover:bg-nature-forest/10 text-lg px-8 py-4">
                <Icon name="Calendar" size={20} className="mr-2" />
                Личный кабинет
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-nature-forest">28+</div>
                <div className="text-sm text-gray-600">практик в месяц</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-nature-forest">5</div>
                <div className="text-sm text-gray-600">модулей развития</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-nature-forest">24/7</div>
                <div className="text-sm text-gray-600">поддержка в Telegram</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-nature-forest mb-4">
              Модули практик
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый модуль — это структурированный путь к достижению конкретных целей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* General Module */}
            <Card className="border-nature-sage/30 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-nature-forest to-nature-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <CardTitle className="text-nature-forest font-heading">Общий модуль</CardTitle>
                <CardDescription>Базовые практики для энергии и позитива</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Прогресс</span>
                    <Badge variant="secondary">15/28 дней</Badge>
                  </div>
                  <Progress value={53} className="h-2" />
                  <p className="text-sm text-gray-600">
                    1 практика в день, 5 напоминаний через Telegram
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Health Module */}
            <Card className="border-nature-sage/30 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-nature-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <CardTitle className="text-nature-forest font-heading">Здоровье</CardTitle>
                <CardDescription>Практики для физического и ментального благополучия</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Статус</span>
                    <Badge variant="outline">Доступен после общего</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    Медитации, дыхательные практики, работа с телом
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Relationships Module */}
            <Card className="border-nature-sage/30 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-nature-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-nature-forest font-heading">Отношения</CardTitle>
                <CardDescription>Гармония в личных и рабочих отношениях</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Статус</span>
                    <Badge variant="outline">Заблокирован</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    Эмпатия, границы, коммуникативные навыки
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Money Module */}
            <Card className="border-nature-sage/30 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-nature-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="DollarSign" size={32} className="text-white" />
                </div>
                <CardTitle className="text-nature-forest font-heading">Деньги</CardTitle>
                <CardDescription>Здоровые отношения с финансами</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Статус</span>
                    <Badge variant="outline">Заблокирован</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    Устранение блоков, целеполагание, мотивация
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Module */}
            <Card className="border-nature-sage/30 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-nature-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Briefcase" size={32} className="text-white" />
                </div>
                <CardTitle className="text-nature-forest font-heading">Работа</CardTitle>
                <CardDescription>Карьерный рост и профессиональная реализация</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Статус</span>
                    <Badge variant="outline">Заблокирован</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    Лидерство, продуктивность, баланс работы и жизни
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transpersonal Module */}
            <Card className="border-nature-sage/30 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-nature-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Star" size={32} className="text-white" />
                </div>
                <CardTitle className="text-nature-forest font-heading">Трансперсональный</CardTitle>
                <CardDescription>Духовное развитие и самопознание</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Статус</span>
                    <Badge variant="outline">Заблокирован</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    Символ-драма, работа с подсознанием, ИИ-практики
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-nature-forest mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Всё необходимое для эффективной трансформации в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Telegram Integration */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="MessageCircle" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-nature-forest mb-2">
                Интеграция с Telegram
              </h3>
              <p className="text-gray-600">
                Получайте практики и напоминания прямо в мессенджер
              </p>
            </div>

            {/* Personal Cabinet */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="User" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-nature-forest mb-2">
                Личный кабинет
              </h3>
              <p className="text-gray-600">
                Отслеживайте прогресс и ведите дневники практик
              </p>
            </div>

            {/* Progress Calendar */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Calendar" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-nature-forest mb-2">
                Календарь прогресса
              </h3>
              <p className="text-gray-600">
                Визуализация вашего пути и достижений
              </p>
            </div>

            {/* Coaching */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="UserCheck" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-nature-forest mb-2">
                Персональный коучинг
              </h3>
              <p className="text-gray-600">
                Индивидуальный подбор практик с наставником
              </p>
            </div>

            {/* Diary System */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="BookOpen" size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-nature-forest mb-2">
                Система дневников
              </h3>
              <p className="text-gray-600">
                Фиксация инсайтов и важных переживаний
              </p>
            </div>

            {/* AI Practices */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Bot" size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-nature-forest mb-2">
                ИИ-практики
              </h3>
              <p className="text-gray-600">
                Интерактивная проработка с искусственным интеллектом
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nature-forest to-nature-sage">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Начните свою трансформацию сегодня
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Присоединяйтесь к сообществу людей, которые выбрали путь осознанного развития
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-nature-forest hover:bg-gray-100 text-lg px-8 py-4">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Подключиться к Telegram
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Icon name="Play" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-nature-forest rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={16} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">ПсихХаб</h3>
              </div>
              <p className="text-gray-400">
                Платформа для психологического развития и трансформации личности
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Модули</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-nature-sage transition-colors">Общий модуль</a></li>
                <li><a href="#" className="hover:text-nature-sage transition-colors">Здоровье</a></li>
                <li><a href="#" className="hover:text-nature-sage transition-colors">Отношения</a></li>
                <li><a href="#" className="hover:text-nature-sage transition-colors">Деньги</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-nature-sage transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-nature-sage transition-colors">Telegram-бот</a></li>
                <li><a href="#" className="hover:text-nature-sage transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-nature-sage transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nature-forest transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nature-forest transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nature-forest transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ПсихХаб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;