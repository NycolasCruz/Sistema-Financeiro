import { GlobalType } from "../types/GlobalType";

enum categoriesName {
    Food = 1,
    Salary = 2,
    College = 3,
    Credit_Card = 4,
    Investments = 5
};

export const CategoriesEnum: GlobalType = {
    [categoriesName.Food]: 1,
    [categoriesName.Salary]: 2,
    [categoriesName.College]: 3,
    [categoriesName.Credit_Card]: 4,
    [categoriesName.Investments]: 5
};
