import { ReactNode, createContext, useEffect, useState } from "react";

import { getItems } from "@/helpers";
import { ItemProps } from "@/types/ItemProps";

type DataContextType = {
	data: ItemProps[];
	setData: (data: ItemProps[]) => void;
};

type DataContextProviderProps = {
	children: ReactNode;
};

export const DataContext = createContext({} as DataContextType);

export function DataContextProvider({ children }: DataContextProviderProps) {
	const [data, setData] = useState<ItemProps[]>([]);

	useEffect(() => {
		async function getData() {
			setData(await getItems());
		}

		getData();
	}, []);

	return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
}
