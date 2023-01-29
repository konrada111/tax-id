import { TaxPayerType } from "Home/redux/slice"

export const handleStoreTaxPayers = (payer: TaxPayerType) => {
  const data = localStorage.getItem("taxPayers")

  if (data) {
    const taxPayers: TaxPayerType[] = JSON.parse(data)

    localStorage.setItem(
      "taxPayers",
      taxPayers.length > 2
        ? JSON.stringify([payer, ...taxPayers].slice(0, 3))
        : JSON.stringify([payer, ...taxPayers])
    )
  } else {
    localStorage.setItem("taxPayers", JSON.stringify([payer]))
  }
}
