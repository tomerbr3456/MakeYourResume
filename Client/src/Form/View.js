import React, { } from 'react';
import Summary from './Content/Summary/Summary';
import Openning from './Content/Openning/Openning'
import PersonalDetailsView from './Content/PersonalDetails/PersonalDetailsView';
import SiteInformation from './Content/SiteInformation/SiteInformation';
import 'material-icons/iconfont/material-icons.css';
import ProjectsContainer from './Content/Projects/ProjectsContainer'
import { yupSchema } from '../validation/Validation';
import Skills from './Content/Skills/Skills';
import { Formik, Form } from 'formik';
import { SITE_FIELDS } from '../global/GlobalVariables';
import { createUseStyles } from 'react-jss'
import SubmitButton from './Content/Submit/SubmitButton';

const useStyles = createUseStyles({
  root: {
    width: '100%'
  },
  personalDetails: {
    width: '100%',
    height: 300
  },
  summary: {
    width: '100%',
    height: 230
  },
  skills: {
    width: '100%',
    minHeight: 180
  },
  openning: {
    width: '100%',
    height: 200
  },
  siteInformation: {
    width: '100%',
    height: 400
  },
  projects: {
    width: '100%',
    minHeight: 250
  }
})

export default function View(props) {
  const { handleSubmit } = props
  const classes = useStyles()
  return (
    <Formik
      validationSchema={yupSchema}
      initialValues={SITE_FIELDS} onSubmit={handleSubmit}>
      {(formik) => {
        return (
          <Form className={classes.root}>
            <div className={classes.personalDetails}>
              <PersonalDetailsView formik={formik} />
            </div>
            <div className={classes.summary}>
              <Summary formik={formik} />
            </div>
            <div className={classes.skills}>
              <Skills skills={formik.values.skills} skillToAdd={formik.values.skillToAdd} setFieldValue={formik.setFieldValue} />
            </div>
            <div className={classes.openning}>
              <Openning formik={formik} />
            </div>
            <div className={classes.siteInformation}>
              <SiteInformation formik={formik} />
            </div>
            <div className={classes.projects}>
              <ProjectsContainer projects={formik.values.projects} setFieldValue={formik.setFieldValue} />
            </div>
            <SubmitButton />
          </Form>
        )
      }}
    </Formik>
  )
}