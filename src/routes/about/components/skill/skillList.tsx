import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SkillItem from './skillItem';

interface SkillContent {
  skill: string;
  value: number;
}

const programmingLang: SkillContent[] = [
  { skill: 'Python', value: 85 },
  { skill: 'ReactJS', value: 75 },
  { skill: 'C++', value: 50 },
  { skill: 'Java', value: 50 },
];

const tools: SkillContent[] = [
  { skill: 'git', value: 75 },
  { skill: 'Docker', value: 50 },
  { skill: 'Keras', value: 70 },
  { skill: 'LaTeX', value: 60 },
  { skill: 'sklearn', value: 80 },
  { skill: 'Tensorflow', value: 60 },
];

const SkillList: React.FC = () => {
  return (
    <Grid container direction="column">
      <Typography variant="body1">
        <em>Programming Languages</em>
      </Typography>
      <SkillItem data={programmingLang} />

      <Typography variant="body1">
        <em>Libraries and Tools</em>
      </Typography>
      <SkillItem data={tools} />
    </Grid>
  );
};

export default SkillList;
