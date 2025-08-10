import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award, Trophy } from "lucide-react"

interface TimelineItem {
  year: string
  title: string
  description: string
  status: "completed" | "current"
  icon: React.ReactNode
  color: string
}

export default function AcademicTimeline() {
  const timelineData: TimelineItem[] = [
    {
      year: "2021",
      title: "Baccalauréat",
      description: "Obtention du diplôme du baccalauréat avec mention",
      status: "completed",
      icon: <Award className="w-6 h-6" />,
      color: "from-pink-400 to-rose-500",
    },
    {
      year: "2023",
      title: "Diplôme Technicien Supérieur (DTS)",
      description: "Formation technique spécialisée en développement",
      status: "completed",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-400 to-violet-500",
    },
    {
      year: "2024",
      title: "Licence",
      description: "Diplôme de licence obtenu avec succès",
      status: "completed",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500",
    },
    {
      year: "2024-2025",
      title: "Master 1 Informatique Professionnelle",
      description: "Actuellement en cours - Spécialisation développement web",
      status: "current",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
          Un parcours progressif et structuré vers l'excellence en développement web
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 rounded-full"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full shadow-lg flex items-center justify-center text-white ${item.status === "current" ? "ring-4 ring-purple-200 animate-pulse" : ""}`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card
                  className={`border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ${item.status === "current" ? "ring-2 ring-purple-300" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white shadow-sm`}
                        >
                          {item.year}
                        </span>
                        {item.status === "current" && (
                          <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                            En cours
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 leading-tight">{item.title}</h3>

                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Year Label on opposite side */}
              <div
                className={`absolute ${index % 2 === 0 ? "right-0 pr-4" : "left-0 pl-4"} top-1/2 transform -translate-y-1/2`}
              >
                <div className="text-6xl font-bold text-purple-100 select-none">{item.year.split("-")[0]}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline End */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
          <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <p className="text-gray-600 font-medium">Années d'études</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-purple-50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              3
            </div>
            <p className="text-gray-600 font-medium">Diplômes obtenus</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              M1
            </div>
            <p className="text-gray-600 font-medium">Niveau actuel</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
