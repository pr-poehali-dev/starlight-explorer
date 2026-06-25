import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Smartphone, Building2, Rocket, Target, Search } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Корпоративные сайты",
    description:
      "Создаём надёжные корпоративные сайты, которые отражают масштаб и ценности вашей компании. Удобная структура, презентация услуг и инструменты для работы с клиентами — всё для роста вашего бизнеса.",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description:
      "Разрабатываем удобные и быстрые мобильные приложения для iOS и Android. От идеи до публикации в сторах — мы создаём продукты, которыми пользуются каждый день.",
  },
  {
    icon: Layout,
    title: "Лендинги",
    description:
      "Проектируем продающие лендинги, которые превращают посетителей в клиентов с первого экрана. Яркий дизайн, понятные смыслы и формы захвата заявок, работающие на результат.",
  },
  {
    icon: Rocket,
    title: "Разработка сайтов",
    description:
      "Создаём современные, быстрые и масштабируемые сайты под любые задачи. Чистый код, адаптивность под все устройства и технологии, которые остаются актуальными годами.",
  },
  {
    icon: Target,
    title: "Результат",
    description:
      "В roboweb.team мы нацелены на успех. Наш подход всегда направлен на достижение измеримых результатов, способствующих росту вашего бизнеса. Вместе находим то, что действительно работает.",
  },
  {
    icon: Search,
    title: "SEO-оптимизация",
    description:
      "Видимость в поиске критически важна. Мы оптимизируем сайт с применением современных SEO-техник, чтобы вы были выше в Яндексе и Google, а целевая аудитория легко вас находила.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От концепции до запуска — мы трансформируем ваши цифровые амбиции в мощные онлайн-решения, приносящие результат.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}