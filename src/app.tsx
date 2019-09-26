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
    <NavigationMenu />
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

export type MenuItem<Extend = unknown> = Extend & {
  render(this: Extend): React.ReactNode;
};

export type MenuProps<Item extends MenuItem> = {
  items: Item[];
};

export const Menu = <Item extends MenuItem>({ items }: MenuProps<Item>) =>
  <div className='menu'>{ items.map(item =>
    item.render()
  ) }</div>
;

type NavigationMenuItemExtend = {
  label: string;
  link: string;
  className: string;
};

type NavigationMenuItem = MenuItem<NavigationMenuItemExtend>;

const renderNavigationMenuItem = (item: NavigationMenuItemExtend) =>
  <a key={ item.link } href={`#${item.link}`}>
    <label className={`menu-item ${item.className} get-active`} data-path={ item.link }>
      <div className='slide' />
      <div className='text'>{ item.label }</div>
      <div className='transparent'>{ item.label }</div>
    </label>
  </a>
;

const createNavigationMenuItem = (
  label: string,
  link: string,
  className: string,
): NavigationMenuItem => ({
  render() { return renderNavigationMenuItem(this); },
  label,
  link,
  className,
});

export const NavigationMenu = () =>
  <Menu items={[
    [ 'Introduction', '/introduction', 'yellow' ],
    [ 'Contact', '/contact', 'red' ],
  ].map(([label, link, className]) =>
    createNavigationMenuItem(label, link, className)
  )} />
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

export const Contact = () =>
  <>
    <Paragraph>E-mail: <a href='mailto:linus.engelbrektsson.it@gmail.com'>linus.engelbrektsson.it@gmail.com</a></Paragraph>
  </>
;

export type RouteProps = React.PropsWithChildren<{
  path: string;
}>;

export const Route = ({ children, path }: RouteProps) =>
  <div className='route' data-path={ path }>{ children }</div>
;

export const MainContent = () =>
  <div style={{ display: 'flex', flexGrow: 1 }}>
    <Container className='main-container'>
      <Route path='/introduction'><Introduction /></Route>
      <Route path='/contact'><Contact /></Route>
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
