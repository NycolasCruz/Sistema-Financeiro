import { ReactNode, createContext, useEffect, useState } from "react";

import axios from "axios";

import { ItemProps } from "@/types/ItemProps";

type DataContextType = {
	data: ItemProps[];
};

type DataContextProviderProps = {
	children: ReactNode;
};

export const DataContext = createContext({} as DataContextType);

export function DataContextProvider({ children }: DataContextProviderProps) {
	const [data, setData] = useState<ItemProps[]>([]);

	useEffect(() => {
		async function getData() {
			const { data } = await axios.get<ItemProps[]>("http://localhost:3001/projects");

			setData(data);
		}

		getData();
	}, [data]);

	return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
}
