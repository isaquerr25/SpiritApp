import { useState } from 'react';
import { useGetContasMtAuthQuery } from '../generated/graphql';




export const RefreshDb = async() => {
	const contasMt = useGetContasMtAuthQuery();
	const [infoAcconts,setInfoAcconts] = useState<any>();
    
	const response  = await contasMt.data?.GetContasMtAuth.contas;
	console.log('asdasdasdd',response);
};