import { useQuery } from '@tanstack/react-query'
import { photoKeys } from '@/lib/queryKeys'
import { api } from '@/lib/api'

export function usePhotoDetail(id: string | undefined) {
  return useQuery({
    queryKey: photoKeys.detail(id),
    queryFn: () => api.getPhotoDetail(id),
    enabled: !!id,
  })
}
