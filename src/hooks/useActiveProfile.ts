import { useParams } from 'react-router-dom';
import { getProfile, type Profile } from '../data/profiles';

export function useActiveProfile(): Profile {
  const { slug } = useParams<{ slug: string }>();
  return getProfile(slug);
}
