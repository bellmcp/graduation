import React, { useState, useEffect } from 'react'
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
  useMediaQuery,
} from '@mui/material'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'

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
import ProtocolImage from './assets/protocol_guest.jpeg'
import HeroIamge from './assets/01-min.JPEG'
import CalendarEvent from './assets/wutipat_graduation_event.ics'

const PRIMARY_COLOR = '#bb2660' //'#0066cc'

const commonStyle = {
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: '#1d1d1f',
    },
  },
}

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    allVariants: {
      color: '#1d1d1f',
    },
  },
  ...commonStyle,
})

const themeTH = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif',
    allVariants: {
      color: '#1d1d1f',
    },
  },
  ...commonStyle,
})

const themeSerif = createTheme({
  typography: {
    fontFamily: 'Playfair Display, serif',
    allVariants: {
      color: '#1d1d1f',
    },
  },
  ...commonStyle,
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
              <Grid item xs={12} sm={6} md={5} lg={4}>
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
              <Grid item xs={12} sm={6} md={7} lg={8}>
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
            All-day professional photographer provided.
          </Typography>
        </>
      ),
    },
    {
      title: 'Contact',
      content: (
        <>
          <Grid container spacing={2}>
            <Grid item xs={6} md={5} lg={4}>
              <Stack direction='row' spacing={1} alignItems='center'>
                <CallIcon color='primary' fontSize='small' />
                <Link href='tel:0855206222' underline='hover'>
                  Mobile {'↗'}
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={6} md={7} lg={8}>
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
            <Grid xs={0} md={0} lg={0}></Grid>
            <Grid item xs={6} md={5} lg={4}>
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
            <Grid item xs={6} md={7} lg={8}>
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
            <Grid xs={0} md={0} lg={0}></Grid>
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
          <Typography variant='body1' sx={{ fontWeight: 500 }}>
            Requirements:
          </Typography>
          <ul style={{ paddingLeft: 21, marginBlockEnd: 0 }}>
            {/* <li style={{ marginBottom: 8 }}>
              <Typography variant='body1'>
                Everyone are required to get vaccinated <u>at least 3 doses</u>{' '}
                (2 doses + 1 booster), as if eligible.
              </Typography>
            </li> */}
            {/* <li style={{ marginBottom: 8, textDecoration: 'line-through' }}>
              <Typography variant='body1'>
                <u>Proof of vaccination</u> or <u>ATK test result</u> may be
                required for some attendees and guests.
              </Typography>
            </li> */}
            <li style={{ marginBottom: 8 }}>
              <Typography variant='body1'>
                <u>Face masks</u> are required for all attendees and guests.
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
              // border: '1px solid',
              // borderColor: 'divider',
              borderRadius: '16px !important',
              px: 2,
              py: 0.5,
              mt: '-14px',
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
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

  const [topBarBgColor, setTopBarBgColor] = useState(PRIMARY_COLOR)
  const [topBarTextColor, setTopBarTextColor] = useState('#fff')
  const [topBarLinkColor, setTopBarLinkColor] = useState('#fff')

  const media = useTheme()
  const matches = useMediaQuery((theme) => media.breakpoints.up('lg'))

  useEffect(() => {
    setTimeout(() => {
      setTopBarBgColor('#f5f5f7')
      setTopBarTextColor('#1d1d1f')
      setTopBarLinkColor(PRIMARY_COLOR)
    }, 1000)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: 'fixed',
          backgroundImage: `url(${HeroIamge})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: 600,
          top: 0,
          left: 0,
          display: !matches && 'none',
        }}
      />
      <div style={{ paddingLeft: matches && 600 }}>
        <Stack spacing={10} p={{ xs: 4, sm: 8, md: 12 }}>
          <Stack spacing={6} mb={8} alignItems='center'>
            <SchoolIcon sx={{ fontSize: 48 }} color='primary' />
            <Typography
              variant='body1'
              align='center'
              sx={{ color: '#6e6e73' }}
            >
              You are invited to
            </Typography>
            <ThemeProvider theme={themeSerif}>
              <Typography
                variant='h2'
                component='h1'
                sx={{
                  fontWeight: 600,
                  lineHeight: 1,
                  mb: 1,
                }}
                align='center'
              >
                Graduation
                <br />
                Ceremony
              </Typography>
            </ThemeProvider>
            <Stack spacing={4} alignItems='center'>
              <ThemeProvider theme={themeSerif}>
                <Typography
                  variant='h5'
                  component='h1'
                  color='primary'
                  sx={{ fontWeight: 600 }}
                  align='center'
                >
                  Wutipat K.
                </Typography>
              </ThemeProvider>
              <Typography
                variant='body1'
                align='center'
                sx={{ color: '#6e6e73' }}
              >
                Sunday, 24 April 2022
                <br />
                08:30 - 16:00
              </Typography>
              <Typography
                variant='body1'
                align='center'
                sx={{ color: '#6e6e73' }}
              >
                Faculty of Science
                <br />
                Chulalongkorn University
              </Typography>
            </Stack>
            <Button
              size='large'
              variant='contained'
              sx={{
                borderRadius: 10,
                textTransform: 'none',
                transition: '0.3s',
                boxShadow: `0 4px 40px 0 rgba(187,38,96,0.3)`,
              }}
              href={CalendarEvent}
              disableElevation
            >
              Add to Calendar
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
            <Typography variant='caption' color='textSecondary' align='center'>
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
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { borderRadius: 16 },
        }}
      >
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
                      Phra Kiew¹.
                    </li>
                    <li>
                      Head north to Maha Vachirunahit Building
                      <span style={{ color: 'grey' }}>²</span> for about 200 m.
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
                      Head north to Maha Vachirunahit Building
                      <span style={{ color: 'grey' }}>²</span> for about 500 m.
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
            <ThemeProvider theme={themeTH}>
              <Typography variant='caption' color='textSecondary'>
                ¹ ศาลาพระเกี้ยว
                <br />² อาคารมหาวชิรุณหิศ
              </Typography>
            </ThemeProvider>
          </Stack>
        </DialogContent>
      </Dialog>
      <Dialog
        open={imgOpen}
        onClose={handleImgClose}
        PaperProps={{
          style: { borderRadius: 16 },
        }}
      >
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
            src={ProtocolImage}
            variant='square'
            sx={{ width: '100%', height: '100%' }}
          />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  )
}

export default App
