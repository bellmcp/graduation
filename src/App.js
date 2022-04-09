import React, { useState } from 'react'
import {
  Grid,
  Stack,
  Typography,
  Divider,
  Link,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import SchoolIcon from '@mui/icons-material/School'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import CallIcon from '@mui/icons-material/Call'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import ForumIcon from '@mui/icons-material/Forum'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CameraRollIcon from '@mui/icons-material/CameraRoll'
import GroupsIcon from '@mui/icons-material/Groups'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'

import MHVKImage from './assets/mhvk.jpeg'
import COVID19Image from './assets/covid19.jpeg'
import CalendarEvent from './assets/wutipat_graduation_event.ics'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    allVariants: {
      color: '#1d1d1f',
    },
  },
  palette: {
    primary: {
      main: '#0066cc',
    },
    secondary: {
      main: '#000000',
    },
  },
})

function App() {
  const [open, setOpen] = useState(false)
  const [imgOpen, setImgOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickImgOpen = () => {
    setImgOpen(true)
  }

  const handleImgClose = () => {
    setImgOpen(false)
  }

  const info = [
    {
      title: 'Location',
      content: (
        <>
          <Stack direction='row' spacing={4} alignItems='center'>
            <Avatar
              src={MHVKImage}
              sx={{
                width: 80,
                height: 80,
              }}
            />
            <Typography variant='body1'>
              <span style={{ fontWeight: 500 }}>
                Maha Vachirunahit Building
              </span>
              <br />
              Faculty of Science
              <br />
              Chulalongkorn University
            </Typography>
          </Stack>
          <Stack>
            <Grid container spacing={2}>
              <Grid item xs={6} md={5} xl={3}>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <DirectionsWalkIcon color='primary' fontSize='small' />
                  <Link
                    href='https://www.google.com/maps/dir//%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%8A%E0%B8%B4%E0%B8%A3%E0%B8%B8%E0%B8%93%E0%B8%AB%E0%B8%B4%E0%B8%A8/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x30e29ed510b633d1:0x6d3b7bdcf2d8eef2?sa=X&ved=2ahUKEwib44jIx4X3AhXjzTgGHd2tDlIQ9Rd6BAhSEAQ'
                    target='__blank'
                    underline='hover'
                  >
                    Get Directions {'↗'}
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={6} md={7} xl={9}>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <DirectionsBusIcon color='primary' fontSize='small' />
                  <Link
                    underline='hover'
                    onClick={handleClickOpen}
                    sx={{ cursor: 'pointer' }}
                  >
                    Transportation {'>'}
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </>
      ),
    },
    {
      title: 'Schedule',
      content: (
        <>
          <Typography variant='body1' style={{ fontWeight: 500 }}>
            Sunday, 24 April 2022
          </Typography>
          <ul style={{ paddingLeft: 21, marginBlockEnd: 0 }}>
            <li>
              <Typography variant='body1'>
                08:30 - 11:00 —{' '}
                <span style={{ fontWeight: 500 }}>Available</span>
              </Typography>
            </li>
            <li>
              <Typography variant='body1'>
                11:00 - 11:30 — Department group photo
              </Typography>
            </li>
            <li>
              <Typography variant='body1'>
                11:30 - 12:00 — Faculty group photo
              </Typography>
            </li>
            <br />
            <li>
              <Typography variant='body1'>
                13:00 - 16:00 —{' '}
                <span style={{ fontWeight: 500 }}>Available</span>
              </Typography>
            </li>
          </ul>
          <Typography variant='body1'>
            All-day professional photographer is provided.
          </Typography>
        </>
      ),
    },
    {
      title: 'Contact',
      content: (
        <>
          <Grid container spacing={2}>
            <Grid item xs={6} md={5} xl={3}>
              <Stack direction='row' spacing={1} alignItems='center'>
                <CallIcon color='primary' fontSize='small' />
                <Link href='tel:0855206222' underline='hover'>
                  Mobile {'↗'}
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={6} md={7} xl={9}>
              <Stack direction='row' spacing={1} alignItems='center'>
                <ForumIcon color='primary' fontSize='small' />
                <Link
                  href='http://line.naver.jp/ti/p/s9ZY1H2nCz#~'
                  target='__blank'
                  underline='hover'
                >
                  LINE {'↗'}
                </Link>
              </Stack>
            </Grid>
            <Grid xs={0} md={0} xl={0}></Grid>
            <Grid item xs={6} md={5} xl={3}>
              <Stack direction='row' spacing={1} alignItems='center'>
                <FacebookIcon color='primary' fontSize='small' />
                <Link
                  href='https://www.facebook.com/bellmcp/'
                  target='__blank'
                  underline='hover'
                >
                  Facebook {'↗'}
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={6} md={7} xl={9}>
              <Stack direction='row' spacing={1} alignItems='center'>
                <InstagramIcon color='primary' fontSize='small' />
                <Link
                  href='https://instagram.com/bellmcp'
                  target='__blank'
                  underline='hover'
                >
                  Instagram {'↗'}
                </Link>
              </Stack>
            </Grid>
            <Grid xs={0} md={0} xl={0}></Grid>
          </Grid>
          <Typography variant='body1'>
            In case you can not make an appearance, you can video call me via{' '}
            <Link href='tel:0855206222' underline='hover'>
              FaceTime
            </Link>{' '}
            or{' '}
            <Link
              href='http://line.naver.jp/ti/p/s9ZY1H2nCz#~'
              target='__blank'
              underline='hover'
            >
              LINE
            </Link>{' '}
            and we can take a photo together.
          </Typography>
        </>
      ),
    },
    {
      title: 'Gift Policy',
      content: (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <Stack spacing={3} alignItems='center'>
              <GroupsIcon sx={{ fontSize: 48 }} />
              <Typography variant='body1' align='center' sx={{ width: 200 }}>
                Your presence is the best gift you can give.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Stack spacing={3} alignItems='center'>
              <VolunteerActivismIcon sx={{ fontSize: 48 }} />
              <Typography variant='body1' align='center' sx={{ width: 200 }}>
                Gifts are welcome but optional.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <Stack spacing={3} alignItems='center'>
              <CameraRollIcon sx={{ fontSize: 48 }} />
              <Typography variant='body1' align='center' sx={{ width: 200 }}>
                Polaroid is available as a souvenir if you needed.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      ),
    },
    {
      title: 'Health & Safety',
      content: (
        <>
          <ul
            style={{ paddingLeft: 21, marginBlockStart: 0, marginBlockEnd: 0 }}
          >
            <li style={{ marginBottom: 8 }}>
              <Typography variant='body1'>
                <u>Face mask</u>, <u>Proof of vaccination</u>, and{' '}
                <u>ATK test result</u> will be required for attendees and
                guests.
              </Typography>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Typography variant='body1'>
                Everyone are required to get vaccinated <u>at least 3 doses</u>{' '}
                (2 doses + 1 booster), as if eligible.
              </Typography>
            </li>
          </ul>
          <Typography variant='body1'>
            Please follow Chulalongkorn University's{' '}
            <Link
              onClick={handleClickImgOpen}
              target='__blank'
              underline='hover'
              sx={{ cursor: 'pointer' }}
            >
              COVID-19 health & safety protocols
            </Link>
            .
            {/* and kindly check the{' '}
            <Link
              href='https://www.facebook.com/CUGraduates'
              target='__blank'
              underline='hover'
            >
              CU Graduates official page
            </Link>{' '}
            periodically for updates. */}
          </Typography>
        </>
      ),
    },
    {
      title: 'FAQ',
      content: (
        <>
          <Accordion
            elevation={0}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '16px !important',
              px: 2,
              py: 0.5,
              mt: '-14px',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant='body1'
                sx={{ fontWeight: 500 }}
                color='textPrimary'
              >
                Q: What about schedule for 12 and 19 May?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' color='textPrimary'>
                I prefer <u>not to attend</u> the official rehearsals and
                commencement on 12 and 19 May for personal reasons.
                <br /> <br />
                Thank you for your understanding and kindly save the date for 24
                April.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ),
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ backgroundColor: '#fbfbfd' }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ backgroundColor: '#000', color: '#fff', minHeight: 800 }}
        ></Grid>
        <Grid item xs={12} md={8} p={{ xs: 8, md: 12 }}>
          <Stack spacing={10}>
            <Stack spacing={8} mb={8} alignItems='center'>
              <SchoolIcon sx={{ fontSize: 48 }} color='primary' />
              <Typography variant='body1' align='center' sx={{ fontSize: 18 }}>
                You are invited to
              </Typography>
              <Stack alignItems='center'>
                <Typography
                  variant='h2'
                  component='h1'
                  sx={{ fontWeight: 500, lineHeight: 1, mb: 1, fontSize: 90 }}
                  align='center'
                >
                  Wutipat's
                </Typography>
                <Typography
                  variant='h4'
                  component='h1'
                  sx={{ fontWeight: 600 }}
                  align='center'
                >
                  Graduation Ceremony
                </Typography>
              </Stack>
              <Stack spacing={4} alignItems='center'>
                <Typography variant='body1' align='center'>
                  Sunday, 24 April 2022
                  <br />
                  08:30 - 16:00
                </Typography>
                <Typography variant='body1' align='center'>
                  Chulalongkorn University
                </Typography>
              </Stack>
              <Button
                size='large'
                variant='contained'
                sx={{ borderRadius: 10, textTransform: 'none' }}
                href={CalendarEvent}
                disableElevation
              >
                Add to calendar
              </Button>
            </Stack>
            {info.map((item) => (
              <>
                <Grid container>
                  <Grid item xs={12} xl={3} sx={{ pr: 6 }}>
                    <Typography
                      variant='h4'
                      color='secondary'
                      sx={{ fontWeight: 500, mb: 4, mt: '-6px' }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} xl={9}>
                    <Stack spacing={3}>{item.content}</Stack>
                  </Grid>
                </Grid>
                <Divider />
              </>
            ))}
            <Stack alignItems='center'>
              <Typography
                variant='caption'
                color='textSecondary'
                align='center'
              >
                Copyright © 2022{' '}
                <Link
                  href='https://www.bellmcp.work'
                  target='__blank'
                  underline='hover'
                >
                  Wutipat Khamnuansin
                </Link>
                , All rights reserved.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Typography variant='h5' color='inherit' sx={{ fontWeight: 500 }}>
              Transporation
            </Typography>
            <IconButton color='inherit' onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 3 }}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Stack>
                <Typography variant='h6' color='primary'>
                  BTS
                </Typography>
                <Typography variant='body1'>
                  <ul>
                    <li>BTS Siam Station (Exit 2)</li>
                    <li>
                      Get a CU Pop Bus (Line 1 or 4) from LIDO Connect to Sala
                      Phra Kiew.
                    </li>
                    <li>
                      Head north to Maha Vachirunahit Building for about 200 m.
                    </li>
                  </ul>
                </Typography>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Stack>
                <Typography variant='h6' color='primary'>
                  MRT
                </Typography>
                <Typography variant='body1'>
                  <ul>
                    <li>MRT Sam Yan Station (Exit 2)</li>
                    <li>Get to the campus by Chamchuri Square entrance.</li>
                    <li>
                      Head north to Maha Vachirunahit Building for about 500 m.
                    </li>
                  </ul>
                </Typography>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Stack>
                <Typography variant='h6' color='primary'>
                  Bus
                </Typography>
                <Typography variant='body1'>
                  <ul>
                    <li>
                      Line: 29, 34, 93, 501, 25, 47, 21, 141, 16, 50, 36, 36A,
                      542, 529
                    </li>
                    <li>
                      Bus stop: Faculty of Science, Chualongkorn University
                    </li>
                  </ul>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
      <Dialog open={imgOpen} onClose={handleImgClose}>
        <DialogTitle>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Typography variant='h5' color='inherit' sx={{ fontWeight: 500 }}>
              COVID-19 health & safety protocols
            </Typography>
            <IconButton color='inherit' onClick={handleImgClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Avatar
            src={COVID19Image}
            variant='square'
            sx={{ width: '100%', height: '100%' }}
          />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  )
}

export default App
