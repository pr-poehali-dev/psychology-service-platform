import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [diaryEntry, setDiaryEntry] = useState("");

  // Mock data for demonstration
  const practiceHistory = [
    { date: "2024-07-15", practice: "Утренняя медитация", completed: true, feedback: "Отличное начало дня!" },
    { date: "2024-07-14", practice: "Дыхательная практика", completed: true, feedback: "Чувствую спокойствие" },
    { date: "2024-07-13", practice: "Благодарность", completed: true, feedback: "Настроение улучшилось" },
    { date: "2024-07-12", practice: "Визуализация целей", completed: false, feedback: "" },
  ];

  const favoritesPractices = [
    { id: 1, name: "Утренняя медитация", module: "Общий", duration: "10 мин" },
    { id: 2, name: "Дыхание 4-7-8", module: "Здоровье", duration: "5 мин" },
    { id: 3, name: "Благодарность", module: "Общий", duration: "3 мин" },
  ];

  const currentModule = {
    name: "Общий модуль",
    progress: 53,
    currentDay: 15,
    totalDays: 28,
    todayPractice: "Практика осознанности",
    nextReminder: "14:30"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 font-body">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => window.history.back()}>
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-nature-forest rounded-full flex items-center justify-center">
                <Icon name="Leaf" size={16} className="text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-nature-forest">Личный кабинет</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram
            </Button>
            <Avatar>
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-nature-sage text-white">АП</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-nature-forest mb-2">
            Добро пожаловать, Анна! 👋
          </h2>
          <p className="text-gray-600">
            Продолжайте свой путь трансформации. Сегодня у вас новая практика!
          </p>
        </div>

        {/* Current Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 border-nature-sage/30">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-nature-forest font-heading">
                    {currentModule.name}
                  </CardTitle>
                  <CardDescription>
                    День {currentModule.currentDay} из {currentModule.totalDays}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-nature-sage/20 text-nature-forest">
                  Активный
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Общий прогресс</span>
                  <span className="text-sm text-gray-600">{currentModule.progress}%</span>
                </div>
                <Progress value={currentModule.progress} className="h-3" />
              </div>
              
              <div className="bg-gradient-to-r from-nature-forest/10 to-nature-sage/10 p-4 rounded-lg">
                <h4 className="font-semibold text-nature-forest mb-2">Сегодняшняя практика</h4>
                <p className="text-gray-700 mb-3">{currentModule.todayPractice}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-nature-forest hover:bg-nature-moss">
                    <Icon name="Play" size={16} className="mr-2" />
                    Начать практику
                  </Button>
                  <Button variant="outline" className="border-nature-forest text-nature-forest">
                    <Icon name="Clock" size={16} className="mr-2" />
                    Напомнить в {currentModule.nextReminder}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-nature-sage/30">
            <CardHeader>
              <CardTitle className="text-nature-forest font-heading text-lg">
                Статистика
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-nature-forest">15</div>
                <div className="text-sm text-gray-600">дней подряд</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-nature-forest">84</div>
                  <div className="text-xs text-gray-600">практик выполнено</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-nature-forest">12</div>
                  <div className="text-xs text-gray-600">в избранном</div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                Подробная статистика
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              Календарь
            </TabsTrigger>
            <TabsTrigger value="diary" className="flex items-center gap-2">
              <Icon name="BookOpen" size={16} />
              Дневник
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Icon name="Heart" size={16} />
              Избранное
            </TabsTrigger>
            <TabsTrigger value="modules" className="flex items-center gap-2">
              <Icon name="Grid3x3" size={16} />
              Модули
            </TabsTrigger>
          </TabsList>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-nature-sage/30">
                <CardHeader>
                  <CardTitle className="text-nature-forest font-heading">Календарь практик</CardTitle>
                  <CardDescription>Отслеживайте свой прогресс по дням</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card className="border-nature-sage/30">
                <CardHeader>
                  <CardTitle className="text-nature-forest font-heading">История практик</CardTitle>
                  <CardDescription>Последние выполненные упражнения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {practiceHistory.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-3 h-3 rounded-full mt-2 ${item.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-gray-800">{item.practice}</h4>
                            <span className="text-xs text-gray-500">{item.date}</span>
                          </div>
                          {item.feedback && (
                            <p className="text-sm text-gray-600 italic">"{item.feedback}"</p>
                          )}
                          {!item.completed && (
                            <Badge variant="outline" className="mt-2">Пропущено</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Diary Tab */}
          <TabsContent value="diary" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-nature-sage/30">
                <CardHeader>
                  <CardTitle className="text-nature-forest font-heading">Новая запись</CardTitle>
                  <CardDescription>Поделитесь своими инсайтами и переживаниями</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Что вы открыли для себя сегодня? Какие изменения заметили?"
                    value={diaryEntry}
                    onChange={(e) => setDiaryEntry(e.target.value)}
                    className="min-h-[120px]"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Smile" size={16} className="mr-2" />
                        Настроение
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Tag" size={16} className="mr-2" />
                        Теги
                      </Button>
                    </div>
                    <Button className="bg-nature-forest hover:bg-nature-moss">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-nature-sage/30">
                <CardHeader>
                  <CardTitle className="text-nature-forest font-heading text-lg">Мои дневники</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Инсайты", "Эмоции", "Цели", "Благодарность"].map((diary, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start p-3 h-auto"
                      >
                        <Icon name="BookOpen" size={16} className="mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{diary}</div>
                          <div className="text-xs text-gray-500">
                            {Math.floor(Math.random() * 20) + 5} записей
                          </div>
                        </div>
                      </Button>
                    ))}
                    
                    <Button variant="outline" className="w-full border-dashed">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Новый дневник
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            <Card className="border-nature-sage/30">
              <CardHeader>
                <CardTitle className="text-nature-forest font-heading">Избранные практики</CardTitle>
                <CardDescription>Ваши любимые упражнения для быстрого доступа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favoritesPractices.map((practice) => (
                    <Card key={practice.id} className="border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-gray-800">{practice.name}</h4>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                            <Icon name="Heart" size={16} />
                          </Button>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {practice.module}
                          </Badge>
                          <span className="text-sm text-gray-500">{practice.duration}</span>
                        </div>
                        <Button size="sm" className="w-full bg-nature-forest hover:bg-nature-moss">
                          <Icon name="Play" size={14} className="mr-2" />
                          Выполнить сейчас
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modules Tab */}
          <TabsContent value="modules" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* General Module - Active */}
              <Card className="border-nature-forest/50 bg-gradient-to-br from-nature-forest/5 to-nature-sage/5">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-nature-forest rounded-full flex items-center justify-center">
                      <Icon name="Zap" size={24} className="text-white" />
                    </div>
                    <Badge className="bg-nature-forest">Активный</Badge>
                  </div>
                  <CardTitle className="text-nature-forest font-heading">Общий модуль</CardTitle>
                  <CardDescription>Базовые практики энергии и позитива</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress value={53} className="h-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>День 15 из 28</span>
                      <span>53%</span>
                    </div>
                    <Button className="w-full bg-nature-forest hover:bg-nature-moss">
                      Продолжить
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Other modules - locked */}
              {[
                { name: "Здоровье", icon: "Heart", color: "green" },
                { name: "Отношения", icon: "Users", color: "pink" },
                { name: "Деньги", icon: "DollarSign", color: "yellow" },
                { name: "Работа", icon: "Briefcase", color: "blue" },
                { name: "Трансперсональный", icon: "Star", color: "purple" }
              ].map((module, index) => (
                <Card key={index} className="border-gray-200 opacity-60">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 bg-${module.color}-500 rounded-full flex items-center justify-center opacity-50`}>
                        <Icon name={module.icon as any} size={24} className="text-white" />
                      </div>
                      <Badge variant="outline">Заблокирован</Badge>
                    </div>
                    <CardTitle className="text-gray-500 font-heading">{module.name}</CardTitle>
                    <CardDescription>Откроется после завершения общего модуля</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" disabled className="w-full">
                      <Icon name="Lock" size={16} className="mr-2" />
                      Недоступен
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;