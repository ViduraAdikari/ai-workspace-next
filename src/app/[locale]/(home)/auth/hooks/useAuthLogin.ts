import {useEffect, useState} from "react";
import {AUTH_FRONT_API} from "@/const/values";
import {LoginResponseData} from "@/types/types";
import {SigninFormValues} from "@/cartons/login/GuestForm";

export const useAuthLogin = (inputValues: SigninFormValues | null) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResponseData | null>(null);

  const requestAuth = async (inputValues: SigninFormValues) => {
    try {
      const response = await fetch(AUTH_FRONT_API, {
        method: "POST",
        body: JSON.stringify(inputValues),
      });

      const responseData = await response.json();
      if (responseData.error) {
        setError(responseData.error);
        return;
      }
      setData({...responseData})
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!loading || !inputValues) {
      return;
    }

    void requestAuth(inputValues);
  }, [loading]); // eslint-disable-line

  useEffect(() => {
    if (!inputValues) {
      return;
    }

    setError(null);
    setLoading(true);
  }, [inputValues]); // eslint-disable-line


  return {loading, error, data: data};
}
