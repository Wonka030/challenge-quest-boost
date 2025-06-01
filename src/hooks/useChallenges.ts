
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Challenge {
  id: string;
  title: string;
  sponsored_by: string | null;
  prize: number | null;
  deadline: string | null;
  is_active: boolean | null;
  image_url: string | null;
  video_url: string | null;
  summary: string | null;
  details: string | null;
  reward_type: string | null;
  reward_top: number | null;
  reward_per_view: number | null;
  reward_top_count: number | null;
  reward_performance: string | null;
  reward_fixed: string | null;
  reward_notes: string | null;
  created_at: string | null;
}

export const useChallenges = () => {
  return useQuery({
    queryKey: ['challenges'],
    queryFn: async () => {
      console.log('Fetching challenges from Supabase...');
      const { data, error } = await supabase
        .from('challenges')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching challenges:', error);
        throw error;
      }

      console.log('Fetched challenges:', data);
      return data as Challenge[];
    },
  });
};
