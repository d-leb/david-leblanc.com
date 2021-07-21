import React from 'react'
import styled from 'styled-components'

import { AppConfig } from 'config/appconfig'
import { PageTemplate } from 'templates/PageTemplate'

import { VideoOverlay } from './VideoOverlay'

const VideoContainer = styled.div`
  overflow: hidden;
`

const Video = styled.video`
  width: 100%;
  margin-bottom: -50px;
`

export const Intro = () => (
  <PageTemplate nopadding>
    <VideoContainer aria-hidden="true">
      {/* eslint-disable jsx-a11y/media-has-caption */}
      <Video autoPlay muted loop>
        <source src={AppConfig.Video.Intro} type="video/mp4" />
      </Video>
      {/* eslint-enable jsx-a11y/media-has-caption */}
      <VideoOverlay />
    </VideoContainer>
  </PageTemplate>
)
