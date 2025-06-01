import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Play, 
  Heart, 
  Eye,
  DollarSign,
  Target,
  Zap,
  Star,
  Calendar,
  BarChart3,
  PlusCircle,
  Filter
} from "lucide-react";
import { toast } from "sonner";
import { useChallenges } from "@/hooks/useChallenges";
import { ChallengeCard } from "@/components/ChallengeCard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const [userType, setUserType] = useState<"creator" | "company" | null>(null);
  const { data: challenges, isLoading, error } = useChallenges();

  const featuredChallenges = [
    {
      id: 1,
      title: "Summer Skincare Routine",
      company: "GlowBeauty",
      logo: "GB",
      prize: "2,500€",
      deadline: "15 Tage",
      participants: 234,
      category: "Beauty",
      platform: "TikTok",
      engagement: "125K Views",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Fitness Transformation",
      company: "FitTech",
      logo: "FT",
      prize: "5,000€",
      deadline: "8 Tage",
      participants: 567,
      category: "Fitness",
      platform: "Instagram",
      engagement: "300K Views",
      difficulty: "Pro"
    },
    {
      id: 3,
      title: "Gaming Setup Tour",
      company: "TechGear",
      logo: "TG",
      prize: "1,800€",
      deadline: "22 Tage",
      participants: 89,
      category: "Tech",
      platform: "YouTube",
      engagement: "89K Views",
      difficulty: "Intermediate"
    }
  ];

  const topCreators = [
    { name: "Sarah K.", level: 15, badges: 12, earnings: "€3,245" },
    { name: "Max R.", level: 12, badges: 8, earnings: "€2,890" },
    { name: "Luna M.", level: 18, badges: 15, earnings: "€4,567" }
  ];

  const handleJoinChallenge = (challengeId: number) => {
    toast.success("Challenge beigetreten! Viel Erfolg beim Content erstellen 🚀");
  };

  const handleCreateChallenge = () => {
    toast.success("Challenge-Builder geöffnet! Erstelle deine erste Kampagne 🎯");
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-12 w-12 text-yellow-400 mr-3" />
              <h1 className="text-5xl font-bold text-white">BountyBoost</h1>
            </div>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Die Plattform, die Creator und Unternehmen zusammenbringt. 
              Verdiene Geld mit authentischem Content oder finde die perfekten Creator für deine Marke.
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-transparent hover:border-yellow-400 transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-sm text-white" 
                  onClick={() => setUserType("creator")}>
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Ich bin Creator</CardTitle>
                <CardDescription className="text-purple-100">
                  Entdecke Challenges, erstelle Content und verdiene Geld
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-100">
                  <li className="flex items-center"><Trophy className="h-4 w-4 mr-2 text-yellow-400" /> Geld verdienen mit Content</li>
                  <li className="flex items-center"><Target className="h-4 w-4 mr-2 text-yellow-400" /> Personalisierte Challenges</li>
                  <li className="flex items-center"><Star className="h-4 w-4 mr-2 text-yellow-400" /> Level-System & Badges</li>
                  <li className="flex items-center"><BarChart3 className="h-4 w-4 mr-2 text-yellow-400" /> Performance Analytics</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                  Als Creator starten
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-yellow-400 transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-sm text-white"
                  onClick={() => setUserType("company")}>
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Ich bin Unternehmen</CardTitle>
                <CardDescription className="text-purple-100">
                  Erstelle Kampagnen und finde die besten Creator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-100">
                  <li className="flex items-center"><Target className="h-4 w-4 mr-2 text-yellow-400" /> Zielgruppen definieren</li>
                  <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-yellow-400" /> Creator-Netzwerk nutzen</li>
                  <li className="flex items-center"><BarChart3 className="h-4 w-4 mr-2 text-yellow-400" /> ROI Analytics</li>
                  <li className="flex items-center"><DollarSign className="h-4 w-4 mr-2 text-yellow-400" /> Flexible Preisgestaltung</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                  Als Unternehmen starten
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                BountyBoost
              </span>
              <Badge variant="secondary" className="ml-2">
                {userType === "creator" ? "Creator Dashboard" : "Business Dashboard"}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setUserType(null)}>
                Wechseln
              </Button>
              <Avatar>
                <AvatarFallback>{userType === "creator" ? "CR" : "BU"}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:inline-flex">
            <TabsTrigger value="discover" className="flex items-center space-x-2">
              <Target className="h-4 w-4" />
              <span>Entdecken</span>
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="create" className="flex items-center space-x-2">
              <PlusCircle className="h-4 w-4" />
              <span>{userType === "creator" ? "Meine Einreichungen" : "Challenge erstellen"}</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center space-x-2">
              <Trophy className="h-4 w-4" />
              <span>Rangliste</span>
            </TabsTrigger>
          </TabsList>

          {/* Discover Tab */}
          <TabsContent value="discover" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Challenges entdecken</h2>
                <p className="text-gray-600">Finde die perfekte Challenge für deinen Content</p>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>

            {isLoading && (
              <div className="text-center py-8">
                <p className="text-gray-600">Challenges werden geladen...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <p className="text-red-600">Fehler beim Laden der Challenges</p>
                <p className="text-sm text-gray-500 mt-2">Zeige Mock-Daten als Fallback</p>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {challenges && challenges.length > 0 ? (
                challenges.map((challenge) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))
              ) : (
                // Fallback zu Mock-Daten wenn keine echten Challenges vorhanden
                featuredChallenges.map((challenge) => (
                  <Card key={challenge.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                              {challenge.logo}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{challenge.title}</CardTitle>
                            <CardDescription>{challenge.company}</CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{challenge.platform}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-semibold">{challenge.prize}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span>{challenge.deadline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span>{challenge.participants} Teilnehmer</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4 text-orange-600" />
                          <span>{challenge.engagement}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{challenge.category}</Badge>
                        <Badge variant={challenge.difficulty === "Pro" ? "destructive" : challenge.difficulty === "Intermediate" ? "default" : "secondary"}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        onClick={() => handleJoinChallenge(challenge.id)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Challenge beitreten
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {userType === "creator" ? "Creator Dashboard" : "Business Analytics"}
              </h2>
              <p className="text-gray-600">
                {userType === "creator" ? "Verfolge deine Performance und Earnings" : "Analysiere deine Kampagnen und ROI"}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>
                    {userType === "creator" ? "Gesamte Earnings" : "Ausgaben diese Woche"}
                  </CardDescription>
                  <CardTitle className="text-2xl">€2,847</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span>+23% vs. letzte Woche</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>
                    {userType === "creator" ? "Aktive Challenges" : "Laufende Kampagnen"}
                  </CardDescription>
                  <CardTitle className="text-2xl">7</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <Target className="h-4 w-4" />
                    <span>3 enden diese Woche</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Gesamte Views</CardDescription>
                  <CardTitle className="text-2xl">1.2M</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-purple-600">
                    <Eye className="h-4 w-4" />
                    <span>+892K diese Woche</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>
                    {userType === "creator" ? "Creator Level" : "Creator erreicht"}
                  </CardDescription>
                  <CardTitle className="text-2xl">
                    {userType === "creator" ? "Level 12" : "2,456"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {userType === "creator" ? (
                    <Progress value={75} className="h-2" />
                  ) : (
                    <div className="flex items-center space-x-2 text-sm text-orange-600">
                      <Users className="h-4 w-4" />
                      <span>+156 neue Creator</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {userType === "creator" && (
              <Card>
                <CardHeader>
                  <CardTitle>Deine Badges & Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center space-x-1">
                      <Trophy className="h-3 w-3" />
                      <span>Top 10 Beauty</span>
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>500K Views Club</span>
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>Community Favorite</span>
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>€1K+ Earned</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Create Tab */}
          <TabsContent value="create" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {userType === "creator" ? "Meine Einreichungen" : "Neue Challenge erstellen"}
              </h2>
              <p className="text-gray-600">
                {userType === "creator" ? "Verwalte deine eingereichten Contents" : "Erstelle eine neue Kampagne für Creator"}
              </p>
            </div>

            {userType === "company" ? (
              <Card className="max-w-2xl">
                <CardHeader>
                  <CardTitle>Challenge-Builder</CardTitle>
                  <CardDescription>Erstelle eine neue Challenge in wenigen Schritten</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Challenge Titel</label>
                      <input 
                        className="w-full p-2 border rounded-md" 
                        placeholder="z.B. Summer Fitness Challenge"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preisgeld (€)</label>
                      <input 
                        className="w-full p-2 border rounded-md" 
                        placeholder="z.B. 2500"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Beschreibung</label>
                    <textarea 
                      className="w-full p-2 border rounded-md h-24" 
                      placeholder="Beschreibe deine Challenge..."
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Plattform</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>TikTok</option>
                        <option>Instagram</option>
                        <option>YouTube</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Kategorie</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Beauty</option>
                        <option>Fitness</option>
                        <option>Tech</option>
                        <option>Lifestyle</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Laufzeit (Tage)</label>
                      <input 
                        className="w-full p-2 border rounded-md" 
                        placeholder="30"
                        type="number"
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                    onClick={handleCreateChallenge}
                  >
                    Challenge veröffentlichen
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Summer Beauty Routine
                      <Badge className="bg-green-100 text-green-800">Eingereicht</Badge>
                    </CardTitle>
                    <CardDescription>GlowBeauty Challenge • TikTok</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Performance:</span>
                      <span className="font-medium">45.2K Views • 3.1K Likes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Ranking:</span>
                      <span className="font-medium text-yellow-600">#3 von 234</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="text-xs text-gray-500">Challenge endet in 12 Tagen</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Tech Setup Tour
                      <Badge variant="outline">In Bewertung</Badge>
                    </CardTitle>
                    <CardDescription>TechGear Challenge • YouTube</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Performance:</span>
                      <span className="font-medium">12.8K Views • 892 Likes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Ranking:</span>
                      <span className="font-medium text-blue-600">#8 von 89</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    <div className="text-xs text-gray-500">Challenge endet in 19 Tagen</div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {userType === "creator" ? "Top Creator Rangliste" : "Performance Ranking"}
              </h2>
              <p className="text-gray-600">Die besten Performer dieser Woche</p>
            </div>

            <div className="grid gap-4">
              {topCreators.map((creator, index) => (
                <Card key={index} className={`${index === 0 ? 'border-yellow-400 bg-yellow-50' : ''}`}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                        ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'}`}>
                        {index + 1}
                      </div>
                      <Avatar>
                        <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{creator.name}</div>
                        <div className="text-sm text-gray-500">Level {creator.level}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-600">{creator.earnings}</div>
                      <div className="text-sm text-gray-500">{creator.badges} Badges</div>
                    </div>
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

export default Index;
