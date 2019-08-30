import * as React from 'react';

export const Container = ({
  children,
  className = '',
}: React.PropsWithChildren<{ className?: string }>) =>
  <div className={ `container ${className}` }>{ children }</div>
;

export const Paragraph = ({ children }: React.PropsWithChildren<{}>) =>
  <p className='paragraph'>{ children }</p>
;

export const Header = () =>
  <Container className='header-container'>
    <h1 className='header'>Linus Engelbrektsson IT AB</h1>
    <h2 className='sub-header'>Software Developer</h2>
  </Container>
;

export const MainContent = () =>
  <Container className='main-container'>
    <Paragraph>Lorem ipsum</Paragraph>
  </Container>
;

export const Footer = () =>
  <Container className='footer-container'>
    <Paragraph>Linus Engelbrektsson IT AB</Paragraph>
    <Paragraph>
      <label>E-mail:</label>
      <p><a href='mailto:linus.engelbrektsson.it@gmail.com'>linus.engelbrektsson.it@gmail.com</a></p>
    </Paragraph>
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
