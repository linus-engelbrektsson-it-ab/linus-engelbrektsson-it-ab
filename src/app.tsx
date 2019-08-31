import * as React from 'react';

export const Container = ({
  children,
  className = '',
}: React.PropsWithChildren<{ className?: string }>) =>
  <div className={ `container ${className}` }>{ children }</div>
;

export const Paragraph = ({
  children,
  className = '',
}: React.PropsWithChildren<{ className?: string }>) =>
  <div className={ `paragraph ${className}` }>{ children }</div>
;

export const Highlight = ({ children }: React.PropsWithChildren<{}>) =>
  <span className='highlight'>{ children }</span>
;

export const Header = () =>
  <Container className='header-container'>
    <h1 className='header'>Linus Engelbrektsson IT AB</h1>
    <h2 className='sub-header'>Software Developer</h2>
  </Container>
;

export const SideContent = () =>
  <Container className='side-container'>
    <a href="/#1">1</a>
  </Container>
;

export const Tooltip = ({ children }: React.PropsWithChildren<{}>) =>
  <div className='tooltip'>{ children }</div>
;

export const SoftwareDeveloperTooltip = ({ children }: React.PropsWithChildren<{}>) =>
  <>
    <Tooltip>
      <>I started to get interested in coding when I was about 10 years old, </>
      I wanted to become a game developer.
    </Tooltip>
    { children }
  </>
;

export const WebDevelopmentTooltip = ({ children }: React.PropsWithChildren<{}>) =>
  <>
    <Tooltip>
      <Paragraph>In recent years, I have been studying and working mostly with web development.</Paragraph>
      <Paragraph>I have learned modern web development techniques such as SPA and Restful API.</Paragraph>
    </Tooltip>
    { children }
  </>
;

export const Introduction = () =>
  <>
    <Paragraph>Hi!</Paragraph>
    <Paragraph>
      I am a <Highlight><SoftwareDeveloperTooltip>software developer </SoftwareDeveloperTooltip></Highlight>
      who specializes in <Highlight><WebDevelopmentTooltip>web development</WebDevelopmentTooltip></Highlight>.
    </Paragraph>
  </>
;

export const MainContent = () =>
  <div style={{ display: 'flex', flexGrow: 1 }}>
    <Container className='main-container'>
      <Introduction />
    </Container>
  </div>
;

export const FooterText = ({ children }: React.PropsWithChildren<{}>) =>
  <Paragraph className='footer-text'>{ children }</Paragraph>
;

export const Footer = () =>
  <Container className='footer-container'>
    <FooterText>Linus Engelbrektsson IT AB</FooterText>
    <FooterText>
      <label>E-mail:</label>
      <label><a href='mailto:linus.engelbrektsson.it@gmail.com'>linus.engelbrektsson.it@gmail.com</a></label>
    </FooterText>
  </Container>
;

export const AppContainer = ({ children }: React.PropsWithChildren<{}>) =>
  <div className='app-container'>{ children }</div>
;

export const App = () =>
  <AppContainer>
    <Header />
    <MainContent />
    <Footer />
  </AppContainer>
;
