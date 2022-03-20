import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

interface BasicCardProps {
    children: React.ReactNode
}

export default function BasicCard({children}: BasicCardProps) {
  return (
    <Card sx={{ m: 2, p: 2, minWidth: 275 }}>
      <CardContent>
      {children}
      </CardContent>
      <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
    </Card>
  );
}
