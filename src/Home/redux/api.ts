import axios, { AxiosError } from "axios"
import apiClient from "shared/utils/api-client"
import { TaxPayerType } from "./slice"

export const getVat = async (vat_number: string) => {
  try {
    const { data } = await apiClient.get<TaxPayerType>("", {
      params: { vat_number },
    })
    return data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return (e as AxiosError).response?.data
    }
  }
  return "Something went wrong ... "
}
