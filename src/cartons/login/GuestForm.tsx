"use client";

import React from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {useTranslations} from "next-intl";
import {object, string} from "yup";
import {useFormik} from "formik";
import UIButton from "@/components/Buttons";
import {useRouter} from "@/localize/navigation";
import {dashboardNavItems} from "@/const/values";

type FormValues = {
  nickname: string | null
}

const GuestForm: React.FC = () => {
  const t = useTranslations("Home.GuestForm");

  const router = useRouter();

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
    onSubmit: (values: FormValues) => {
      console.log("FormValues", values);
      redirectToDashboard();
    },
  });

  const redirectToDashboard = () => {
    router.push(dashboardNavItems.home.link);
  }

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
              error={formik.touched.nickname && Boolean(formik.errors.nickname)}
              helperText={formik.touched.nickname && formik.errors.nickname}
            />

            <UIButton variant="primary"
                      sx={{mt: 4, width: {sm: "auto", xs: '100%'}}}
                      type="submit"
                      disabled={formik.values.nickname === null}>
              {t("submitButton")}
            </UIButton>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default GuestForm;
