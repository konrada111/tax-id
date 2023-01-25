import apiClient from "shared/utils/api-client"

export const getVat = async (vat_number: string) => {
  try {
    const { data } = await apiClient.get("", {
      params: { vat_number },
    })
    return data
  } catch (e) {
    console.log(e)
  }
}
