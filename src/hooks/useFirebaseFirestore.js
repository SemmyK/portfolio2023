import { useState, useEffect } from 'react'
//firebase
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
//hooks
import { useDataContext } from './useDataContext'

const useFirebaseFirestore = () => {
	const firestore = db
	const { dataDispatch } = useDataContext()
	const [isCancelled, setIsCancelled] = useState(false)

	// GET SINGLE DOCUMENT BY ID
	const getDocById = async docId => {
		if (isCancelled === false) {
			dataDispatch({ type: 'LOADING' })
			try {
				const docRef = doc(firestore, 'projects', docId)
				const documentSnapshot = await getDoc(docRef)

				if (documentSnapshot.exists()) {
					dataDispatch({
						type: 'GET_SINGLE_DOC',
						payload: { id: docId, ...documentSnapshot.data() },
					})
				} else {
					dataDispatch({ type: 'ERROR', payload: 'Document not found' })
				}
			} catch (error) {
				dataDispatch({ type: 'ERROR', payload: error.message })
			}
		}
	}

	// UNMOUNT
	useEffect(() => {
		return () => setIsCancelled(true)
	}, [])

	return {
		getDocById,
		isCancelled,
	}
}

export default useFirebaseFirestore
