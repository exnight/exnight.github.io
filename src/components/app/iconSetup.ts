import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const setup = (): void => library.add(faGithub, faLinkedin);

export default setup;
