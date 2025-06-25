// src/hooks/useTranslationData.ts
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { loadTranslationData } from '@/i18n/loadTranslations'

export const useTranslationData = <T>(fileName: string) => {
	const { i18n } = useTranslation()
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true)
				const result = await loadTranslationData<T>(fileName)
				setData(result)
			} catch (err) {
				setError(err as Error)
			} finally {
				setLoading(false)
			}
		}

		loadData()
	}, [fileName, i18n.language]) // Перезагружаем данные при смене языка

	return { data, loading, error }
}
