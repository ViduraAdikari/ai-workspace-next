import React, {PropsWithChildren} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {useTranslations} from "next-intl";
import {object, string} from "yup";
import {useFormik} from "formik";
import UIButton from "@/components/Buttons";

export type SigninFormValues = {
  nickname: string | null
}

type GuestFormProps = {
  isDataLoading: boolean
  authError: string | null
  onSigninSubmit: (values: SigninFormValues) => void
}

const GuestForm: React.FC<GuestFormProps> = (props: PropsWithChildren<GuestFormProps>) => {

  const {isDataLoading, authError, onSigninSubmit} = props;

  const t = useTranslations("Home.GuestForm");

  const validationSchema = object({
    nickname: string()
      .trim()
      .min(3, t("nameMin"))
      .max(20, t("nameMax"))
      .required(t("helperText")),
  });

  const formik = useFormik({
    initialValues: {
      nickname: null,
    },
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: (values: SigninFormValues) => {
      onSigninSubmit(values);
    },
  });

  return (
    <React.Fragment>
      <Grid container sx={{
        justifyContent: 'center',
        mt: {md: 3, lg: 3}
      }}>
        <Grid item xl={4} md={6} sm={8} xs={12}>
          <Box component="form" noValidate autoComplete="off"
               sx={{
                 py: {lg: 5, sm: 4},
                 px: 4,
                 textAlign: "right"
               }}
               onSubmit={formik.handleSubmit}>

            <TextField
              required
              fullWidth
              size="small"
              id="input-nickname"
              name="nickname"
              label={t("nameInputLabel")}
              placeholder={t("nameInputPlaceholder")}
              focused
              autoFocus
              value={formik.values.nickname || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={(authError !== null) || (formik.touched.nickname && Boolean(formik.errors.nickname))}
              helperText={authError || (formik.touched.nickname && formik.errors.nickname)}
            />

            <UIButton variant="primary"
                      sx={{mt: 4, width: {sm: "auto", xs: '100%'}}}
                      type="submit"
                      disabled={formik.values.nickname === null || isDataLoading}>
              {t("submitButton")}
            </UIButton>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default GuestForm;
