
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DollarSign, Calendar, Users, Eye, Play } from "lucide-react";
import { Challenge } from "@/hooks/useChallenges";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  challenge: Challenge;
}

export const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const navigate = useNavigate();

  const handleJoinChallenge = (e: React.MouseEvent) => {
    e.stopPropagation(); // Verhindert Navigation beim Klick auf Button
    toast.success("Challenge beigetreten! Viel Erfolg beim Content erstellen 🚀");
  };

  const handleCardClick = () => {
    navigate(`/challenge/${challenge.id}`);
  };

  // Korrigierte Tage-Berechnung
  const calculateDaysRemaining = (deadline: string | null) => {
    if (!deadline) return null;
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const daysRemaining = calculateDaysRemaining(challenge.deadline);

  // Generate company logo initials
  const getCompanyInitials = (company: string | null) => {
    if (!company) return "BB";
    return company.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                {getCompanyInitials(challenge.sponsored_by)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{challenge.title}</CardTitle>
              <CardDescription>{challenge.sponsored_by || "BountyBoost"}</CardDescription>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800">Challenge</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {challenge.summary && (
          <p className="text-sm text-gray-600 line-clamp-2">{challenge.summary}</p>
        )}
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="font-semibold">
              {challenge.prize ? `€${challenge.prize}` : "Preis verfügbar"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span>
              {daysRemaining !== null ? `${daysRemaining} Tage` : "Läuft"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-purple-600" />
            <span>Teilnehmer</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-orange-600" />
            <span>Views</span>
          </div>
        </div>

        {challenge.reward_type && (
          <div className="flex items-center justify-between">
            <Badge variant="outline">{challenge.reward_type}</Badge>
            <Badge variant={challenge.is_active ? "default" : "secondary"}>
              {challenge.is_active ? "Aktiv" : "Inaktiv"}
            </Badge>
          </div>
        )}

        <Button 
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          onClick={handleJoinChallenge}
        >
          <Play className="h-4 w-4 mr-2" />
          Challenge beitreten
        </Button>
      </CardContent>
    </Card>
  );
};
