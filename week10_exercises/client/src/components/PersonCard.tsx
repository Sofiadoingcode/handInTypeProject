import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Person } from '../types';

export default ({person}: { person: Person }) => {
    
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} style={{
                display: 'block',
                width: '30vw',
                transitionDuration: '0.3s',
                height: '23vw',
                border: '1px solid #ccc',
            }}>
                <CardMedia
                    sx={{ height: 140 }}
                    title={person.name}
                />
                <CardContent>
                    <Typography gutterBottom component="div">
                        {person.age}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {person.occupation}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {person.salary}
                    </Typography>

                </CardContent>
            </Card>
        </div>)
}