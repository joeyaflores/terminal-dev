import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:joeyflores74@gmail.com');

  return 'Opening mailto:joeyflores74@gmail.com...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  // setTimeout(function () {
  //   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  // }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root. \nLogin coming soon...`;
};


export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};

export const credit = async (args?: string[]): Promise<string> => {
  return `Huge shoutout to m4tt72 for the original terminal project. I just added some of my own stuff to it. More to come! \n\nUse the 'repo' command to check out the original project. Or the 'donate' command to donate to the original author.
  `;
}

export const bun = async (args?: string[]): Promise<string> => {
  return `
  🚀 Powered by Bun Toolkit 🐇
  ───────────────────────────────────────
  Bun: The future of JavaScript & TypeScript development! Reimagining and optimizing the runtime, aiming to be the swift successor of Node.js.
  
  Features:
  🚴‍♂️ Fast JavaScript runtime
  🛠️ Comprehensive toolset: script runner, test runner & more
  📦 Enhanced, speed-optimized package manager
  🔄 Designed for minimal adjustments: Migrate from Node.js with ease
  🌟 Continuously evolving for broader Node.js compatibility & framework integrations
  
  This current project is turbocharged by Bun, ensuring optimal performance and development experience. Get started, and feel the difference!
  
  This is my first project using Bun, so I'm still learning. But I'm excited to see what I can do with it!
  
  `;
}


export const banner = (args?: string[]): string => {
  return `
                                                        
  d88bb  .d88b.  d88888b db    db  .o88b.  .d88b.     d8888b. d88888b db    db 
   '8P' .8P  Y8. 88'     '8b  d8' d8P  Y8 .8P  Y8.    88  '8D 88'     88    88 
    88  88    88 88ooooo  '8bd8'  8P      88    88    88   88 88ooooo Y8    8P 
    88  88    88 88~~~~~    88    8b      88    88    88   88 88~~~~~ '8b  d8' 
db. 88  '8b  d8' 88.        88    Y8b  d8 '8b  d8' db 88  .8D 88.      '8bd8'  
Y8888P   'Y88P'  Y88888P    YP     'Y88P'  'Y88P'  VP Y8888D' Y88888P    YP    
                                                                              

Type 'help' to see list of available commands.

--
`;
};
