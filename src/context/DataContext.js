import { createContext, useEffect, useReducer } from 'react'
//firebase
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/config'

export const DataContext = createContext()

export const dataReducer = (state, action) => {
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				loading: true,
				success: null,
				error: null,
			}
		case 'ERROR':
			return {
				...state,
				data: null,
				error: action.payload,
				loading: false,
				success: false,
			}
		case 'INIT':
			return {
				...state,
				allData: action.payload,
				error: null,
				loading: false,
				success: true,
			}
		case 'GET_SINGLE_DOC':
			return {
				...state,
				data: action.payload,
				error: null,
				loading: false,
				success: true,
			}
		default:
			return state
	}
}

export const DataContextProvider = ({ children }) => {
	const [state, dataDispatch] = useReducer(dataReducer, {
		allData: null,
		data: null,
		error: null,
		loading: false,
		success: null,
	})

	useEffect(() => {
		//colection reference
		let collectionRef = collection(db, 'projects')

		const q = query(collectionRef, orderBy('createdAt', 'desc'))

		const unsub = onSnapshot(
			q,
			snapshot => {
				let results = []
				snapshot.docs.forEach(item =>
					results.push({ ...item.data(), id: item.id })
				)
				dataDispatch({ type: 'INIT', payload: results })
			},
			error => {
				console.log(error)
				dataDispatch({ type: 'ERROR', payload: error.message })
			}
		)

		return () => unsub()
	}, [])

	return (
		<DataContext.Provider value={{ ...state, dataDispatch }}>
			{children}
		</DataContext.Provider>
	)
}
