"use server";

import {COOKIES_STORAGE_KEYS} from "@/const/values";
import {cookies} from "next/headers";
import {LoginResponseData} from "@/types/types";
import {SigninFormValues} from "@/cartons/login/GuestForm";
import {getErrorMessageByCode} from "@/util/util";

/**
 * Signin user and add to cookies.
 * @param request
 * @constructor
 */
const POST = async (request: Request) => {
  const inputValues: SigninFormValues = await request.json();

  // to test error ;)
  if (inputValues.nickname && inputValues.nickname.toLowerCase() === "bob") {
    return Response.json(
      {error: "we don't like a bob here :P (this to check error, don't take it personal <3)"},
      {status: 401}
    );
  }

  if (!inputValues.nickname) {
    return Response.json({error: getErrorMessageByCode(401)}, {status: 401});
  }

  /**
   * in the future make a backend api call auth user, validate response token and add to cookies.
   */

  cookies().set(COOKIES_STORAGE_KEYS.user, inputValues.nickname);
  const responseData: LoginResponseData = {isAuth: true, displayName: inputValues.nickname};
  return Response.json(responseData);
}


/**
 * Logout user
 * remove access token and redirect to home.
 */
const DELETE = async () => {
  cookies().delete(COOKIES_STORAGE_KEYS.user);
  return Response.json("logged out");
}

export {POST, DELETE};

