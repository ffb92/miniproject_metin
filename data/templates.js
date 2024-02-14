import { colors } from "./colors.js";

export const mainMenuTemplate = `
0=================___Main Menu___===================0
0                                                   0
0 [${colors.blue}C${colors.reset}]reate - [${colors.green}R${colors.reset}]ead - [${colors.yellow}U${colors.reset}]pdate - [${colors.red}D${colors.reset}]elete - [${colors.magenta}Q${colors.reset}]uit  0
0                                                   0
0===================================================0
`;

export const subMenuTemplate = `
0==================___Sub Menu___===================0
0                                                   0
0                 [${colors.blue}B${colors.reset}]ack - [${colors.green}S${colors.reset}]ort                   0
0                                                   0
0===================================================0
`;

export const sortMenuTemplate = `
0=================___Sort Menu___===================0
0                                                   0
0   [${colors.blue}N${colors.reset}]ame - [${colors.green}I${colors.reset}]d - [${colors.yellow}T${colors.reset}]ype - [${colors.red}Q${colors.reset}]uantity - [${colors.magenta}W${colors.reset}]eight  0
0                                                   0
0===================================================0
`;
