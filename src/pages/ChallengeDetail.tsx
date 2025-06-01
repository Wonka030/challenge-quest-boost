
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, DollarSign, Calendar, Users, Eye, Play, Zap } from "lucide-react";
import { useChallenges } from "@/hooks/useChallenges";
import { toast } from "sonner";

const ChallengeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: challenges, isLoading } = useChallenges();

  const challenge = challenges?.find(c => c.id === id);

  const handleJoinChallenge = () => {
    toast.success("Challenge beigetreten! Viel Erfolg beim Content erstellen 🚀");
  };

  const calculateDaysRemaining = (deadline: string | null) => {
    if (!deadline) return null;
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const getCompanyInitials = (company: string | null) => {
    if (!company) return "BB";
    return company.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <p className="text-gray-600">Challenge wird geladen...</p>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Challenge nicht gefunden</p>
          <Button onClick={() => navigate("/")}>Zurück zu den Challenges</Button>
        </div>
      </div>
    );
  }

  const daysRemaining = calculateDaysRemaining(challenge.deadline);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
              <Zap className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                BountyBoost
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Challenge Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg">
                      {getCompanyInitials(challenge.sponsored_by)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-3xl">{challenge.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {challenge.sponsored_by || "BountyBoost"}
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                  Challenge
                </Badge>
              </div>
            </CardHeader>
          </Card>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Summary */}
              {challenge.summary && (
                <Card>
                  <CardHeader>
                    <CardTitle>Zusammenfassung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{challenge.summary}</p>
                  </CardContent>
                </Card>
              )}

              {/* Details */}
              {challenge.details && (
                <Card>
                  <CardHeader>
                    <CardTitle>Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-wrap">{challenge.details}</p>
                  </CardContent>
                </Card>
              )}

              {/* Media */}
              {(challenge.image_url || challenge.video_url) && (
                <Card>
                  <CardHeader>
                    <CardTitle>Medien</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {challenge.image_url && (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Bild:</p>
                        <img 
                          src={challenge.image_url} 
                          alt="Challenge Bild" 
                          className="rounded-lg max-w-full h-auto"
                        />
                      </div>
                    )}
                    {challenge.video_url && (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Video:</p>
                        <video 
                          src={challenge.video_url} 
                          controls 
                          className="rounded-lg max-w-full h-auto"
                        >
                          Dein Browser unterstützt keine Videos.
                        </video>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Challenge Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Challenge Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Preisgeld</span>
                    </div>
                    <span className="font-bold text-green-600">
                      {challenge.prize ? `€${challenge.prize}` : "Verfügbar"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Verbleibend</span>
                    </div>
                    <span className="font-bold">
                      {daysRemaining !== null ? `${daysRemaining} Tage` : "Läuft"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Status</span>
                    </div>
                    <Badge variant={challenge.is_active ? "default" : "secondary"}>
                      {challenge.is_active ? "Aktiv" : "Inaktiv"}
                    </Badge>
                  </div>

                  {challenge.reward_type && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Eye className="h-5 w-5 text-orange-600" />
                        <span className="font-medium">Belohnungstyp</span>
                      </div>
                      <Badge variant="outline">{challenge.reward_type}</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Join Challenge */}
              <Card>
                <CardContent className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg py-6"
                    onClick={handleJoinChallenge}
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Challenge beitreten
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Info */}
              {challenge.reward_notes && (
                <Card>
                  <CardHeader>
                    <CardTitle>Zusätzliche Informationen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{challenge.reward_notes}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;
