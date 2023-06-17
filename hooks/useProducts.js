import useSWR from 'swr'

export const useProducts = (url, config = {}) => {
  const { data, error, isLoading } = useSWR(`/api/${url}`, config)

  return {
    products: data || [],
    isLoading: !error & !data,
    isError: error
  }
}

