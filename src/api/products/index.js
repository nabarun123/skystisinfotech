import { AxiosInstance } from "../../util/AxiosInstance";

export const getAllProducts = async () => {
  // 2. add the URI
  const URI = "/products";

  try {
    const response = await // mention the method here
    AxiosInstance.get(URI);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
