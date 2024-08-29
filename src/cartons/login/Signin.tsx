"use client";

import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import GuestForm, {SigninFormValues} from "@/cartons/login/GuestForm";
import {useAuthLogin} from "@/app/[locale]/(home)/auth/hooks/useAuthLogin";
import {redirectToDashboard} from "@/cartons/login/actions";
import {useAppDispatch} from "@/store/hooks";
import {setGuestNickName} from "@/store/features/workspace/workspaceSlice";

type SigninProps = {
  locale: string
}

const Signin: FC<SigninProps> = (props: PropsWithChildren<SigninProps>) => {

  const {locale} = props;

  const dispatch = useAppDispatch();

  const [authInputValues, setAuthInputValues] = useState<SigninFormValues | null>(null);

  const {loading, error, data} = useAuthLogin(authInputValues);

  const handleOnSubmit = (inputValues: SigninFormValues) => {
    setAuthInputValues(inputValues);
  }

  const handleRedirect = () => {
    void redirectToDashboard(locale);
  }

  useEffect(() => {
    if (!data || !data.isAuth) {
      return;
    }

    dispatch(setGuestNickName({nickname: data.displayName}));
    handleRedirect();
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <GuestForm isDataLoading={loading}
               authError={error}
               onSigninSubmit={handleOnSubmit}/>
  )
};

export default Signin;
