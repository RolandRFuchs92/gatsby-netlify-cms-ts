import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, Box, TextField } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"

import Image from "../components/images/FancyFood"

type ContactUsType = {
  name: string
  email: string
  subject: string
  message: string
}

const schema = yup.object<ContactUsType>({
  name: yup.string().required(),
  email: yup.number().positive().integer().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

export default function LandingScreenTemplate() {
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = data => console.log(data)

  return (
    <Box height="100vh">
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid container item xs={6} justify="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box width={600}>
              <h3>Contact Us</h3>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controller
                    as={<TextField helperText={errors.name || ""} fullWidth />}
                    name="name"
                    control={control}
                    error={!!errors.name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    as={<TextField helperText={errors.email || ""} fullWidth />}
                    name="email"
                    control={control}
                    error={!!errors.email}
                  />
                </Grid>
                <Controller
                  as={<TextField helperText={errors.subject || ""} fullWidth />}
                  name="subject"
                  control={control}
                  error={!!errors.subject}
                />
                <Controller
                  as={<TextField helperText={errors.message || ""} fullWidth />}
                  name="message"
                  control={control}
                  error={!!errors.message}
                />
              </Grid>
            </Box>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Box m={3} height="75vh" data-sal="zoom-out">
            <Image />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
